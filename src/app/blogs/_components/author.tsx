import { IAuthor } from '@models/post/post';
import Avatar from '@ui/avatar';

export default function Author({ author }: Readonly<{ author: IAuthor }>) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar {...author} />
      <span className="text-sm text-secondary-500">{author?.name}</span>
    </div>
  );
}
