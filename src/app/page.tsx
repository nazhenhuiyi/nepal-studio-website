import Image from "next/image";
import { BookShowcase } from "./components/BookShowcase";
import { publishedBooks } from "./bookData";

const [birthdayBook, graduationBook, weddingBook] = publishedBooks;

const reasons = [
  {
    title: "普通日子也值得有页码",
    body: "真正让人心里一软的，常常不是电影时刻，而是那天其实没发生什么，却一直舍不得忘。",
  },
  {
    title: "笨拙表达也有抵达方式",
    body: "很多话说出口太重，写长了太满。那就把证据放好，让一页替你轻轻抵达。",
  },
  {
    title: "只有你们懂，才更像你们",
    body: "怪外号、错别字、转账备注、无上下文聊天，不必解释给外人听。对方笑出来的那一秒，这一页就送对了。",
  },
];

const scenes = [
  {
    title: "那张“别发”的照片",
    body: "你说这张别发。可我一直觉得，这张最像你。",
  },
  {
    title: "随口说过的以后",
    body: "你只是随口一说。我却替它留了一页。",
  },
  {
    title: "一句“到家了吗”",
    body: "有些关心不是某一句话，是很多年都这样问。",
  },
  {
    title: "外卖备注里的偏爱",
    body: "爱有时候不是大事，是记得你不吃葱。",
  },
  {
    title: "后来没有常联系",
    body: "不常联系，也不代表随便忘掉。",
  },
  {
    title: "给未来的自己",
    body: "如果以后忘了，就翻回这一页。",
  },
];

const keepsakes = ["照片", "聊天", "票根", "语音", "小票", "便签", "歌单", "天气"];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f7f3e9] text-[#143d38]">
      <section className="relative min-h-[74svh] overflow-hidden border-b border-[#dfd3bf] bg-[#f7f3e9] xl:min-h-[86svh]">
        <div className="absolute inset-0 bg-[url('/brand/paper-grain.webp')] bg-cover bg-center opacity-70" />
        <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="true">
          <Image
            src={birthdayBook.coverSrc}
            alt=""
            width={birthdayBook.coverWidth}
            height={birthdayBook.coverHeight}
            sizes="(min-width: 1536px) 14vw, 16vw"
            className="absolute left-[max(2rem,7vw)] top-[28%] w-[180px] rotate-[-7deg] rounded-sm object-contain shadow-[0_28px_70px_rgba(61,46,24,0.22)] 2xl:w-[230px]"
          />
          <Image
            src={graduationBook.coverSrc}
            alt=""
            width={graduationBook.coverWidth}
            height={graduationBook.coverHeight}
            fetchPriority="high"
            sizes="(min-width: 1536px) 14vw, 16vw"
            className="absolute right-[max(2rem,8vw)] top-[18%] w-[170px] rotate-[6deg] rounded-sm object-contain shadow-[0_28px_70px_rgba(61,46,24,0.22)] 2xl:w-[225px]"
          />
          <Image
            src={weddingBook.coverSrc}
            alt=""
            width={weddingBook.coverWidth}
            height={weddingBook.coverHeight}
            sizes="(min-width: 1536px) 14vw, 16vw"
            className="absolute bottom-[4%] right-[max(7rem,20vw)] w-[150px] rotate-[-2deg] rounded-sm object-contain shadow-[0_28px_70px_rgba(61,46,24,0.22)] 2xl:w-[210px]"
          />
        </div>

        <header className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/brand/suonian-chengce-mark.png"
              alt="所念成册标志"
              width={32}
              height={40}
              priority
              className="object-contain"
              style={{ height: "40px", width: "32px" }}
            />
            <span className="text-base font-semibold">所念成册</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-[#365a56] md:flex">
            <a href="#books" className="hover:text-[#d86a58]">
              成品预览
            </a>
            <a href="#seen" className="hover:text-[#d86a58]">
              被看见
            </a>
            <a href="#moments" className="hover:text-[#d86a58]">
              小事成册
            </a>
            <a href="#gift" className="hover:text-[#d86a58]">
              可送出
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(74svh-5rem)] max-w-5xl flex-col items-center justify-center px-5 pb-10 pt-8 text-center sm:px-8 sm:pb-12 xl:min-h-[calc(86svh-5rem)] xl:pb-14">
          <p className="mb-5 text-sm font-semibold text-[#c86655]">
            真实素材成册的礼物官网
          </p>
          <h1 className="font-serif text-5xl leading-[1.04] text-[#143d38] sm:text-7xl md:text-8xl">
            所念成册
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-serif text-2xl leading-tight text-[#143d38] sm:text-4xl md:mt-7 md:text-5xl">
            <span className="block">让所思、所念、所忆，</span>
            <span className="block">慢慢成册。</span>
          </p>
          <p className="mx-auto mt-6 max-w-[21rem] text-base leading-7 text-[#526965] sm:max-w-2xl sm:text-lg md:mt-7 md:text-xl md:leading-8">
            <span className="block">把聊天、照片、票根和舍不得删的小事，</span>
            <span className="block">整理成一本真的能打开、能送出的记忆书。</span>
          </p>
          <div className="mt-7 flex flex-row flex-wrap items-center justify-center gap-3 md:mt-8">
            <a
              href="#books"
              className="flex h-11 w-full max-w-[13rem] items-center justify-center rounded-md bg-[#143d38] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22534d] sm:w-auto"
            >
              先看三本成品
            </a>
            <a
              href="#seen"
              className="flex h-11 w-full max-w-[13rem] items-center justify-center rounded-md border border-[#bca987] px-5 text-sm font-semibold text-[#143d38] transition hover:border-[#d86a58] hover:text-[#c95f4f] sm:w-auto"
            >
              看见它为什么动人
            </a>
          </div>

          <div className="mt-5 flex max-w-xs flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold text-[#365a56] sm:max-w-none sm:gap-x-4 sm:text-sm md:mt-7">
            <span>已发布 3 本</span>
            <span className="text-[#c86655]" aria-hidden="true">/</span>
            <span>生日、毕业、新婚</span>
            <span className="hidden text-[#c86655] sm:inline" aria-hidden="true">/</span>
            <span className="basis-full text-center sm:basis-auto">打开就是完整书</span>
          </div>
        </div>
      </section>

      <BookShowcase />

      <section id="seen" className="bg-[#143d38] px-5 py-18 text-white sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold text-[#e0a84f]">被认真看见</p>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                送出去的不是纪念册，是一种确认。
              </h2>
            </div>
            <p className="max-w-2xl text-xl leading-9 text-[#d6e2dc]">
              我在你那里，真的有被好好记住。
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {reasons.map((item) => (
              <article
                key={item.title}
                className="rounded-md border border-white/14 bg-white/[0.06] p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#d6e2dc]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="moments" className="bg-[#f7f3e9] px-5 py-18 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-[#d86a58]">
              把只有你们懂的小事，慢慢成册
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#143d38] md:text-6xl">
              小东西没有变大，是我们终于看见了它本来装着什么。
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {scenes.map((scene) => (
              <article
                key={scene.title}
                className="rounded-md border border-[#dfd3bf] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#143d38]">{scene.title}</h3>
                <p className="mt-4 font-serif text-2xl leading-snug text-[#143d38]">
                  {scene.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8eee9] px-5 py-18 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold text-[#d86a58]">差点散掉的珍重</p>
            <h2 className="font-serif text-4xl leading-tight text-[#143d38] md:text-6xl">
              给那些舍不得删、也不知道该放哪的小证据。
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#526965]">
              一张拍糊的照片、一条语音、一张小票、一句「早点睡」。它们平时小到不像礼物，可真正让人停住的，往往就是这些小东西。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {keepsakes.map((item) => (
              <div
                key={item}
                className="flex h-24 items-center justify-center rounded-md border border-[#cbd8cf] bg-[#fbf8ef] text-xl font-semibold shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gift" className="bg-[#fbf8ef] px-5 py-18 sm:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold text-[#d86a58]">让珍重有形，让感动常在</p>
          <h2 className="font-serif text-4xl leading-tight text-[#143d38] md:text-6xl">
            不是多说什么。是把一直记得的东西，慢慢放好。
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-[#526965]">
            所念成册让那些差点散在相册、聊天和抽屉里的珍重，终于有一个可以被翻到、被停留、被送到的位置。
          </p>
        </div>
      </section>
    </main>
  );
}
