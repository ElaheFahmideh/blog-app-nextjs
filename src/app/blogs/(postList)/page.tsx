import { Suspense } from 'react';
import Spinner from '@ui/spinner';
import PostList from '../_components/postList';

export default function Blogs() {
  return (
    <>
      <h2 className="text-secondary-600 font-bold mb-5">لیست بلاگ ها</h2>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </>
  );
}
