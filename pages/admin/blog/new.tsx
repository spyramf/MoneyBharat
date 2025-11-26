import React from 'react';
import { GetServerSideProps } from 'next';
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';
import BlogEditor from '@/components/admin/BlogEditor';
import AdminLayout from '@/layouts/AdminLayout';
import { supabaseBlogService, SupabaseBlogAuthor, SupabaseBlogCategory } from '@/services/supabaseBlogService';
import { ensureDefaultAuthor } from '@/lib/server/ensureDefaultAuthor';

interface NewBlogPostProps {
  categories: SupabaseBlogCategory[];
  authors: SupabaseBlogAuthor[];
}

const NewBlogPost = ({ categories, authors }: NewBlogPostProps) => {
  return (
    <AdminLayout>
      <BlogEditor categories={categories} authors={authors} />
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createPagesServerClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  const { data: userRole } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', session.user.id)
    .single();

  if (userRole?.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const defaultAuthor = await ensureDefaultAuthor(supabase);

  const [categories, authorsResult] = await Promise.all([
    supabaseBlogService.getAllCategories(),
    supabaseBlogService.getAllAuthors(),
  ]);

  const authors =
    (authorsResult && authorsResult.length > 0
      ? authorsResult
      : defaultAuthor
        ? [defaultAuthor]
        : []) || [];

  return {
    props: {
      initialSession: session,
      user: session.user,
      categories: categories || [],
      authors,
    },
  };
};

export default NewBlogPost;
