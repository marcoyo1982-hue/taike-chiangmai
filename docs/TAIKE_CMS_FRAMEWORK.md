# 台客在清邁 CMS Framework

Version：1.0

---

# 專案目標

建立一套可長期維護的內容管理網站。

新增建案、文章、美食、景點時，只需新增資料，不需修改程式。

---

# Rule 0（最高原則）

每次修改前，先判斷：

【模板修改】

或

【資料修改】

---

## 模板修改（Framework）

會影響所有同類型內容。

例如：

- Property Template
- Food Template
- Travel Template
- Life Template

模板修改需要先討論。

完成後 Lock。

---

## 資料修改（Content）

只修改內容。

例如：

- 建案資料
- 美食資料
- 景點資料
- 文章內容
- Google Map
- PDF
- YouTube
- FAQ
- 圖片

不得修改 Component。

---

# Rule 1

Component 不得寫死資料。

錯誤：

<h1>The Next Jedyod 4</h1>

正確：

<h1>{property.name}</h1>

---

# Rule 2

新增內容只能修改：

data/

public/

不得修改：

components/

app/

---

# Rule 3

優先使用共用 Component。

目前共用元件：

- Breadcrumb
- Gallery
- GoogleMap
- FAQ
- YoutubePlayer
- ConsultantCard
- RelatedProperties

未來持續增加。

---

# Rule 4

先找舊 Component。

可以擴充就擴充。

不要建立重複功能。

例如：

禁止：

PropertyGallery

FoodGallery

TravelGallery

統一：

Gallery

---

# Rule 5

Template 完成後 Lock。

除非：

- 重大 Bug
- 架構錯誤
- 所有同類型內容都需要的新功能

否則不得修改。

---

# Rule 6

所有 Template 開發流程一致。

1. types.ts

2. data

3. List Page

4. Detail Page

5. 共用 Component

6. SEO

7. Lock

---

# Rule 7

新增功能前，先回答：

新增第100筆資料時，

需不需要修改程式？

如果需要。

代表架構失敗。

重新設計。

如果不用。

代表可以開始開發。

---

# Rule 8

每完成一個 Template：

建立 Checklist。

Checklist 完成。

Template Lock。

開始下一個 Template。

---

# Rule 9

所有開發，

優先考慮：

容易維護。

而不是：

功能最多。

---

# Template Status

Property

Status：
LOCK ✅

Food

Status：
Developing

Travel

Status：
Waiting

Life

Status：
Waiting

Videos

Status：
Waiting

News

Status：
Waiting