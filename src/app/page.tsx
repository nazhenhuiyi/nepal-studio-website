import Image from "next/image";

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
    <main className="bg-[#f7f3e9] text-[#143d38]">
      <section className="relative min-h-[92vh] overflow-hidden border-b border-[#dfd3bf] bg-[#f7f3e9]">
        <div className="absolute inset-0 bg-[url('/brand/paper-grain.webp')] bg-cover bg-center opacity-70" />

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

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-8 text-center sm:px-8 md:pt-12">
          <p className="mb-5 text-sm font-semibold text-[#d86a58]">
            让所念有归处
          </p>
          <h1 className="font-serif text-5xl leading-[1.04] text-[#143d38] sm:text-7xl md:text-8xl">
            所念成册
          </h1>
          <p className="mx-auto mt-7 max-w-3xl font-serif text-3xl leading-tight text-[#143d38] sm:text-4xl md:text-5xl">
            让所思、所念、所忆，慢慢成册。
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#526965] md:text-xl">
            把真实素材里的所念，整理成一本可送出的记忆书。不是编造回忆，是把一直记得的小事，慢慢放好。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#seen"
              className="flex h-11 items-center justify-center rounded-md bg-[#143d38] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#22534d]"
            >
              看见它为什么动人
            </a>
            <a
              href="#moments"
              className="flex h-11 items-center justify-center rounded-md border border-[#bca987] px-5 text-sm font-semibold text-[#143d38] transition hover:border-[#d86a58] hover:text-[#c95f4f]"
            >
              翻一翻那些小事
            </a>
          </div>

          <div className="relative mx-auto mt-11 max-w-5xl overflow-hidden">
            <Image
              src="/brand/suonian-home-hero.png"
              alt="照片、聊天和票根慢慢成册的品牌视觉"
              width={1800}
              height={1000}
              priority
              className="w-full rounded-md border border-[#dfd3bf] shadow-[0_24px_70px_rgba(61,46,24,0.12)]"
            />
          </div>
        </div>
      </section>

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
