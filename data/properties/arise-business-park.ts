import type { Property } from "./types";
import { site } from "../site";

const property: Property = {
  slug: "arise-business-park",
  name: "ARISE BUSINESS PARK",
  subtitle: "三間樣品屋，從開放式套房看到一房加多功能空間",
  summary: "跟著台客走進三種格局，看客廳、睡眠區和工作空間怎麼安排。",
  description: "在台北找房子，台北車站附近方便，住信義區也方便，日常走的路卻很不一樣。在清邁看 ARISE BUSINESS PARK，我也會先問：你平常在哪一區工作、買菜，週末又常往哪裡跑？\n\n下面三支影片各看一間樣品屋。Studio 把休息和起居集中在同一個空間；One Bedroom 有可以關門的獨立臥室。到了 One Bedroom Plus，多出來的空間可以想想要擺書桌，還是留給收納。看影片時留意家具擺好以後，從門口走到床邊還剩多少走道。\n\n如果要長住清邁，你會把預算留給獨立臥室，還是更在意有一個能安靜工作的角落？",
  cover: "cover.jpg",
  date: "2026-11-23",
  category: "清邁房產",
  videos: ["studio.mp4", "one-bedroom.mp4", "one-bedroom-plus.mp4"],
  videoTitles: ["Studio｜開放式套房", "One Bedroom｜獨立一房", "One Bedroom Plus｜一房加多功能空間"],
  gallery: ["studio", "one-bedroom", "one-bedroom-plus"],
  map: "", embed: "", pdf: "", personalLine: site.personalLine, lineCommunity: site.lineCommunity,
  info: {
    location: "清邁", developer: "", ownership: "可洽詢外國人永久產權戶別", completion: "", floors: "", units: "",
    roomTypes: ["Studio", "One Bedroom", "One Bedroom Plus"], size: "", price: "依戶別個別洽詢"
  },
  landmarks: [],
  faqs: [{ question: "One Bedroom Plus 有幾間獨立臥室？", answer: "一間獨立臥室，另有多功能空間。影片中可以看到兩個空間的配置。" }],
};
export default property;
