import IPost from '@models/post/post';
import CoverImage from './coverImage';
import Author from './author';
import ReadingTime from './readingTime';
import Link from 'next/link';

export default async function PostList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post: IPost) => (
        <div
          key={post?._id}
          className="col-span-12 sm:col-span-6 xl:col-span-4 border border-secondary-200 rounded-lg p-2"
        >
          <CoverImage {...post} />

          <Link href={`/blogs/${post?.slug}`}>
            <h2 className="text-secondary-700 font-bold mb-4">{post?.title}</h2>
          </Link>

          <div className="flex justify-between">
            <Author {...post} />
            <ReadingTime {...post} />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-secondary-200 font-bold">پستی وجود ندارد!</p>
  );
}
