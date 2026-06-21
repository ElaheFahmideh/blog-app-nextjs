import { Suspense } from 'react';
import PostList from './_components/postList';
import Spinner from '@ui/spinner';

export default function Blogs() {
  return (
    <>
      <h2 className="text-secondary-600 font-bold">لیست بلاگ ها</h2>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </>
  );
}
