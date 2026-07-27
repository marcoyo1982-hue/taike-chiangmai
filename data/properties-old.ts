export interface Property {
  slug: string;
  name: string;
  subtitle: string;
  description: string;

  youtube: string;

  map: string;
  embed: string;

  pdf: string;

  line: string;

  gallery: string[];

  landmarks: {
    icon: string;
    title: string;
    time: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];
}

export const properties = [
  {
    slug: "the-next-jedyod-4",

    name: "The Next Jedyod 4",

    subtitle: "清邁 Jedyod 生活圈",

    description: "建案介紹先放這裡，之後再更新正式內容。",

    youtube: "https://www.youtube.com/watch?v=u9_d3bXxft0&t=28s",

    map: "https://maps.app.goo.gl/RbUgQVJKcHZCjG6UA",

    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.676974383623!2d98.96739057340619!3d18.81254376019405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bde68aeb8c1%3A0x5709efeafecd7ef!2sThe%20Next%20Jedyod%203!5e0!3m2!1szh-TW!2sth!4v1784613185146!5m2!1szh-TW!2sth",

    pdf: "/properties/the-next-jedyod-4/brochure.pdf",

    line:
      "https://line.me/ti/g2/1wz1YCPodR-QaNfAgJmnG9AcN33FRB76XAJ1vQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",

    gallery: [
      "/properties/the-next-jedyod-4/gallery/01.jpg",
      "/properties/the-next-jedyod-4/gallery/02.jpg",
      "/properties/the-next-jedyod-4/gallery/03.jpg",
    ],

    landmarks: [
      {
        icon: "🛍️",
        title: "MAYA Lifestyle Shopping Center",
        time: "8 分鐘",
      },
      {
        icon: "☕",
        title: "One Nimman",
        time: "9 分鐘",
      },
      {
        icon: "✈️",
        title: "清邁國際機場",
        time: "15 分鐘",
      },
    ],

    faqs: [
      {
        question: "外國人可以買嗎？",
        answer: "可以，外國人可以合法購買永久產權公寓。"
      },
      {
        question: "是不是永久產權？",
        answer: "是，The Next Jedyod 4 為永久產權公寓。"
      },
      {
        question: "有沒有代租服務？",
        answer: "有，可協助代租、代管及售後服務。"
      },
      {
        question: "可以安排賞屋嗎？",
        answer: "可以，提供現場賞屋與線上賞屋服務。"
      },
      {
        question: "付款方式？",
        answer: "依建商付款進度付款，海外匯款可協助辦理。"
      }
    ],
  },

  {
    slug: "ping-live-condo",

    name: "Ping Live Condo",

    subtitle: "清邁河畔精品公寓",

    description: "建案介紹先放這裡，之後再更新正式內容。",

    youtube: "",

    map: "",
    embed: "",

    pdf: "/properties/ping-live-condo/brochure.pdf",

    line: "",

    gallery: [],

    landmarks: [],

    faqs: [],
  },

  {
    slug: "astra-infinite",

    name: "Astra Infinite",

    subtitle: "Chang Klan 精品公寓",

    description: "建案介紹先放這裡，之後再更新正式內容。",

    youtube: "",

    map: "",
    embed: "",

    pdf: "/properties/astra-infinite/brochure.pdf",

    line: "",

    gallery: [],

    landmarks: [],

    faqs: [],
  },
];
