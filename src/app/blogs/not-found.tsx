import { ArrowRightIcon, BoltSlashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex flex-col items-center">
        <div className="flex gap-x-1 text-red-500 mb-8">
          <BoltSlashIcon width={24} />
          <h1 className="text-lg font-bold ">هیچ پستی با این مشخصات یافت نشد.</h1>
        </div>

        <Link href="/blogs" className="flex items-center gap-x-2 text-secondary-500">
          <ArrowRightIcon className="w-6 h-6" />
          <span>برگشت به صفحه پست ها</span>
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
