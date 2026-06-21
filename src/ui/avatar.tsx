import Image from 'next/image';

type TAvatarProps = {
  avatarUrl: string;
  width?: NumberString;
  height?: NumberString;
};

export default function Avatar({ avatarUrl, width = '25', height = '25' }: Readonly<TAvatarProps>) {
  return (
    <Image
      className="rounded-full ring-1 ring-secondary-300"
      src={avatarUrl}
      alt={avatarUrl}
      width={width}
      height={height}
      unoptimized
    />
  );
}
