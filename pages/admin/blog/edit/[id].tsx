import React from 'react';
import { GetServerSideProps } from 'next';
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';
import BlogEditor from '@/components/admin/BlogEditor';
import AdminLayout from '@/layouts/AdminLayout';
import { supabaseBlogService, SupabaseBlogAuthor, SupabaseBlogCategory, SupabaseBlogPost } from '@/services/supabaseBlogService';

interface EditBlogPostProps {
  post: SupabaseBlogPost;
  categories: SupabaseBlogCategory[];
  authors: SupabaseBlogAuthor[];
}

const EditBlogPost = ({ post, categories, authors }: EditBlogPostProps) => {
  return (
    <AdminLayout>
      <BlogEditor post={post} categories={categories} authors={authors} />
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

  const { id } = ctx.params ?? {};
  const postId = Array.isArray(id) ? id[0] : id;

  if (!postId) {
    return { notFound: true };
  }

  const [post, categories, authors] = await Promise.all([
    supabaseBlogService.getPostById(postId),
    supabaseBlogService.getAllCategories(),
    supabaseBlogService.getAllAuthors(),
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      initialSession: session,
      user: session.user,
      post,
      categories: categories || [],
      authors: authors || [],
    },
  };
};

export default EditBlogPost;
