import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import IPost from '@models/post/post';
import ButtonIcon from '@ui/buttonIcon';
import toPersianDigits from '@utils/numberFormatter';

export default function PostInteraction({ post }: Readonly<{ post: IPost }>) {
  return (
    <div className="flex gap-x-2 mt-5">
      <ButtonIcon variant="red">
        <HeartIcon />
        <span>{toPersianDigits(post?.likesCount)}</span>
      </ButtonIcon>

      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
      </ButtonIcon>

      <ButtonIcon variant="primary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
}
