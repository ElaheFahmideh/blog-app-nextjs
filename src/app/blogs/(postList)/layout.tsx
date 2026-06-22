import { Metadata } from 'next';
import { Suspense } from 'react';
import Spinner from '@ui/spinner';
import Categories from '../_components/categories';

type TLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'بلاگ ها',
};

export default function Layout({ children }: TLayoutProps) {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-4 text-secondary-500">
        <h1 className="font-bold text-secondary-600">لیست مطالب</h1>
        <Suspense fallback={<Spinner />}>
          <Categories />
        </Suspense>
      </div>
      <div className="col-span-12 lg:col-span-8 xl:col-span-9">{children}</div>
    </div>
  );
}
