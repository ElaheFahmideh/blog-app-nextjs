import Link from 'next/link';
import ICategory from '@models/category/category';

export default async function Categories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <ul className="space-y-4">
      <Link href="/blogs/" className="mt-3">
        همه
      </Link>
      {categories.map((category: ICategory) => (
        <li key={category._id}>
          <Link href={`/blogs/category/${category.slug}`}>{category.title}</Link>
        </li>
      ))}
    </ul>
  );
}
