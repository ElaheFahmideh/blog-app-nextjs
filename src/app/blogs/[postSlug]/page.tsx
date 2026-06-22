import Image from 'next/image';
import IPost from '@models/post/post';

export default async function SignlePost({ params }: { params: Promise<{ postSlug: string }> }) {
  const { postSlug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${postSlug}`);
  const {
    data: { post },
  }: { data: { post: IPost } } = await res.json();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">{post.title}</h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300 cursor-pointer"
          fill
          src={post.coverImageUrl}
          alt={post.briefText}
          unoptimized
        />
      </div>
    </div>
  );
}
