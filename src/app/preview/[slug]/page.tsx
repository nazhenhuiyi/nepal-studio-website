import { notFound } from "next/navigation";
import Link from "next/link";
import { findPublishedBook, publishedBooks } from "../../bookData";

export function generateStaticParams() {
  return publishedBooks.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = findPublishedBook(slug);

  if (!book) {
    return {
      title: "记忆书预览 | 所念成册",
    };
  }

  return {
    title: `${book.title} | 所念成册预览`,
    description: book.summary,
  };
}

export default async function BookPreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = findPublishedBook(slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#102d2a] text-white">
      <iframe
        title={`${book.title} 全屏记忆书预览`}
        src={book.bookPath}
        className="h-screen w-screen border-0"
      />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-10 flex items-start justify-between gap-3 p-3 sm:p-4">
        <Link
          href="/#books"
          className="pointer-events-auto rounded-md border border-white/14 bg-[#102d2a]/80 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:bg-[#143d38]"
        >
          返回官网
        </Link>
        <a
          href={book.bookPath}
          className="pointer-events-auto rounded-md bg-[#f7f3e9] px-4 py-2 text-sm font-semibold text-[#143d38] shadow-lg transition hover:bg-white"
        >
          打开纯净版
        </a>
      </div>
    </main>
  );
}
