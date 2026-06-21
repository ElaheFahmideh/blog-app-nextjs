import Image from 'next/image';
import Link from 'next/link';

type PropsType = {
  title: string;
  coverImageUrl: string;
  slug: string;
};

export default function CoverImage({ coverImageUrl, title, slug }: Readonly<PropsType>) {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="relative aspect-video overflow-hidden mb-5">
        <Image
          className="rounded-md object-cover object-center"
          src={coverImageUrl}
          alt={title}
          fill
          unoptimized
        />
      </div>
    </Link>
  );
}
