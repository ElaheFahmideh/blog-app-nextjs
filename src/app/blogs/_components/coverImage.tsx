import Image from 'next/image';
import Link from 'next/link';

type PropsType = {
  title: string;
  coverImageUrl: string;
  slug: string;
};

export default function CoverImage({ coverImageUrl, title, slug }: Readonly<PropsType>) {
  return (
    <div className="relative aspect-video overflow-hidden mb-5">
      <Link href={`/blogs/${slug}`}>
        <Image
          className="rounded-md object-cover object-center"
          src={coverImageUrl}
          alt={title}
          quality={90}
          fill
          unoptimized
        />
      </Link>
    </div>
  );
}
