import { ClockIcon } from '@heroicons/react/24/outline';

export default function ReadingTime({ readingTime }: Readonly<{ readingTime: number }>) {
  return (
    <div className="flex items-center text-[12px] text-secondary-500">
      <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
      <span className="ml-1">خواندن:</span>
      <span className="leading-3">{readingTime} دقیقه</span>
    </div>
  );
}
