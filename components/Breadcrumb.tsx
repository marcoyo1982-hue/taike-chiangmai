import Link from "next/link";

type BreadcrumbProps = {
  title: string;
  category?: { name: string; href: string };
};

export default function Breadcrumb({
  title,
  category = { name: "房產", href: "/property" },
}: BreadcrumbProps) {
  return (
    <nav aria-label="目前位置" className="mb-8 text-sm text-gray-500">
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
            href={category.href}
            className="hover:text-emerald-600"
          >
            {category.name}
          </Link>
        </li>

        <li>/</li>

        <li aria-current="page" className="font-semibold text-gray-800">
          {title}
        </li>

      </ol>
    </nav>
  );
}
