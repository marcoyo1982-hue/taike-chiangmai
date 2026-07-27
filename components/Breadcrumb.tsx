import Link from "next/link";

type BreadcrumbProps = {
  title: string;
};

export default function Breadcrumb({
  title,
}: BreadcrumbProps) {
  return (
    <nav className="mb-10 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-2">

        <li>
          <Link
            href="/"
            className="hover:text-emerald-600"
          >
            首頁
          </Link>
        </li>

        <li>/</li>

        <li>
          <Link
            href="/property"
            className="hover:text-emerald-600"
          >
            房產
          </Link>
        </li>

        <li>/</li>

        <li className="font-semibold text-gray-800">
          {title}
        </li>

      </ol>
    </nav>
  );
}