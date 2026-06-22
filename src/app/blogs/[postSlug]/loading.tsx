import Spinner from '@ui/spinner';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-secondary-400 text-center text-sm">درحال بارگذاری اطلاعات</p>
      <Spinner />
    </div>
  );
}
