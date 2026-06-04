import Image from "next/image";
import Link from "next/link";
import { publishedBooks } from "../bookData";

export function BookShowcase() {
  return (
    <section id="books" className="bg-[#143d38] px-5 py-18 text-white sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold text-[#e0a84f]">已发布成品</p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              三个可以进入的故事。
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-9 text-[#d6e2dc]">
            官网先把场景放在眼前，把书留给一个郑重的打开动作。生日、毕业、新婚，各自有一条能被送出的情绪线。
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {publishedBooks.map((book) => (
            <article
              key={book.slug}
              className="overflow-hidden rounded-md border border-white/14 bg-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.14)] transition hover:border-[#e0a84f]/70 hover:bg-white/[0.08]"
            >
              <div className="flex h-[350px] items-center justify-center border-b border-white/10 bg-[#102d2a] px-5 py-5">
                <Image
                  src={book.coverSrc}
                  alt={`${book.title}封面`}
                  width={353}
                  height={443}
                  className="h-full w-auto rounded-sm object-contain shadow-[0_24px_55px_rgba(0,0,0,0.38)]"
                />
              </div>
              <div className="flex min-h-[390px] flex-col justify-between p-6 sm:p-7">
                <div>
                  <p className="text-sm font-semibold text-[#e0a84f]">{book.label}</p>
                  <h3 className="mt-4 text-3xl font-semibold">{book.title}</h3>
                  <p className="mt-5 font-serif text-3xl leading-snug text-white">
                    {book.line}
                  </p>
                  <p className="mt-6 text-base leading-8 text-[#d6e2dc]">{book.summary}</p>
                </div>
                <Link
                  href={book.previewPath}
                  className="mt-9 flex h-11 w-full items-center justify-center rounded-md bg-[#f7f3e9] px-5 text-sm font-semibold text-[#143d38] transition hover:bg-white"
                >
                  全屏预览
                </Link>
                <p className="mt-4 text-center text-xs leading-5 text-[#a9c4bb]">
                  打开后会进入整屏记忆书预览，可直接翻看发布成品。
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
