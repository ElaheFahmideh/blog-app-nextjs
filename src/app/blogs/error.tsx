'use client';
import { ArrowRightIcon, BoltSlashIcon } from '@heroicons/react/24/outline';
import useMoveBack from '@hooks/useMoveBack';

type PropsType = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function Error({ error, unstable_retry }: Readonly<PropsType>) {
  const back = useMoveBack();
  return (
    <>
      <button className="flex gap-x-1 text-blue-500 font-sm mb-10" onClick={back}>
        <ArrowRightIcon width={20} />
        بازگشت
      </button>
      <div className="flex flex-col items-center">
        <div className="flex gap-x-1 text-secondary-500 mb-3">
          <BoltSlashIcon width={24} />
          <p className="text-lg font-bold">مشکلی پیش آمده است</p>
        </div>

        <button className="text-error font-sm font-bold" onClick={unstable_retry}>
          تلاش دوباره
        </button>
      </div>
    </>
  );
}
