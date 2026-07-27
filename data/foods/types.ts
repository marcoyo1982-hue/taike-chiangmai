export interface Food {
  slug: string;

  // 基本資料
  name: string;
  category: string;
  subtitle: string;
  summary: string;
  description: string;

  // 首頁封面
  cover: string;

  // 發布日期
  date: string;

  // 台客推薦指數
  rating: string;

  // 圖片
  gallery: string[];

  // 店家資訊
  map: string;
  embed: string;
  address: string;
 openingHours: string;
  phone: string;
  price: string;

  // 推薦必點
  recommend: string[];

  // 標籤
  tags: string[];

  // YouTube（沒有可留空）
  youtube?: string;
}