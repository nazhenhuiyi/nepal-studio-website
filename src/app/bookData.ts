export const publishedBooks = [
  {
    slug: "birthday-light",
    label: "生日祝福",
    title: "给小满的生日小书",
    line: "小满，生日这天有盏灯为你亮着。",
    summary:
      "一份送给重要朋友的生日书。从一张捧着饮料的照片出发，把认真、敏感、喜欢的事和被好运照顾的愿望，收进拍立得、蛋糕和生日签里。",
    coverSrc:
      "/books/birthday-light/project-assets/asset_item_photo-card_generated-20260603061001-9bf9780a-4256206c.png",
    coverWidth: 1086,
    coverHeight: 1448,
    bookPath: "/books/birthday-light/index.html",
  },
  {
    slug: "graduation-farewell",
    label: "毕业离别",
    title: "给小满的三年",
    line: "有些同桌，是座位表上写了三年，心里会记更久。",
    summary:
      "林遥送给高三同桌小满的毕业告别书。从早读、晚自习、模拟考，到南方和北方的距离，把舍不得藏进一册温柔的送行里。",
    coverSrc:
      "/books/graduation-farewell/project-assets/asset_-_AI_photo-card_generated-20260604075324-5493be2d-d3a11e39.png",
    coverWidth: 982,
    coverHeight: 1601,
    bookPath: "/books/graduation-farewell/index.html",
  },
  {
    slug: "ordinary-days-answer",
    label: "新婚记忆",
    title: "普通日子的答案",
    line: "以前所有平凡的日子，都在今天有了答案。",
    summary:
      "小江送给小满的新婚记忆书。从朋友聚会里的初识，到吃饭、散步、报平安，再到一次次选择彼此，把婚礼表白落回普通日子。",
    coverSrc:
      "/books/ordinary-days-answer/project-assets/asset_-_AI_photo-card_generated-20260604085724-77738c86-09ed82af.png",
    coverWidth: 1122,
    coverHeight: 1402,
    bookPath: "/books/ordinary-days-answer/index.html",
  },
] as const;

export type PublishedBook = (typeof publishedBooks)[number];

export function findPublishedBook(slug: string): PublishedBook | undefined {
  return publishedBooks.find((book) => book.slug === slug);
}
