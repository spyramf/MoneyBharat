import React from 'react';
import { GetServerSideProps } from 'next';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import BlogEditor from '@/components/admin/BlogEditor';
import { supabaseBlogService } from '@/services/supabaseBlogService';
import AdminLayout from '@/layouts/AdminLayout';

const NewBlogPost = ({ categories, authors }) => {
  return (
    <AdminLayout>
      <BlogEditor categories={categories} authors={authors} />
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
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

  const [categories, authors] = await Promise.all([
    supabaseBlogService.getAllCategories(),
    supabaseBlogService.getAllAuthors(),
  ]);

  return {
    props: {
      initialSession: session,
      user: session.user,
      categories: categories || [],
      authors: authors || [],
    },
  };
};

export default NewBlogPost;
