import Image from "next/image";
import { publishedBooks } from "../bookData";

export function BookShowcase() {
  return (
    <section id="books" className="bg-[#143d38] px-5 py-18 text-white sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold text-[#e0a84f]">已发布成品</p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
              <span className="block">先看三本</span>
              <span className="block">已经能打开的成品。</span>
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-9 text-[#d6e2dc]">
            不用想象最终会长什么样。生日、毕业、新婚，三本发布书都直接从这里进入，看到完整的翻阅体验。
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {publishedBooks.map((book) => (
            <article
              key={book.slug}
              className="overflow-hidden rounded-md border border-white/14 bg-[#214f49] shadow-[0_24px_70px_rgba(0,0,0,0.14)] transition hover:border-[#e0a84f]/70 hover:bg-[#275a53]"
            >
              <a
                href={book.bookPath}
                aria-label={`打开${book.title}`}
                className="group flex min-h-[430px] items-center justify-center border-b border-white/10 bg-[#efe3cd] px-6 py-8"
              >
                <Image
                  src={book.coverSrc}
                  alt={`${book.title}封面`}
                  width={book.coverWidth}
                  height={book.coverHeight}
                  sizes="(max-width: 1024px) 82vw, 28vw"
                  className="max-h-[374px] w-auto rounded-sm object-contain shadow-[0_22px_50px_rgba(61,46,24,0.24)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_30px_65px_rgba(61,46,24,0.30)]"
                />
              </a>
              <div className="flex min-h-[350px] flex-col justify-between p-6 sm:p-7">
                <div>
                  <p className="text-sm font-semibold text-[#e0a84f]">{book.label}</p>
                  <h3 className="mt-4 text-3xl font-semibold">{book.title}</h3>
                  <p className="mt-5 font-serif text-3xl leading-snug text-white">
                    {book.line}
                  </p>
                  <p className="mt-6 text-base leading-8 text-[#d6e2dc]">{book.summary}</p>
                </div>
                <a
                  href={book.bookPath}
                  className="mt-9 flex h-11 w-full items-center justify-center rounded-md bg-[#f7f3e9] px-5 text-sm font-semibold text-[#143d38] transition hover:bg-white"
                >
                  全屏预览
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
