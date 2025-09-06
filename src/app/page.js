// frames text
import text1 from "../images-sm/_text1.webp"
import text2 from "../images-sm/_text2.webp"
import text3 from "../images-sm/_text3.webp"
import text4 from "../images-sm/_text4.webp"
import text5 from "../images-sm/_text5.webp"
import text6 from "../images-sm/_text6.webp"
import text7 from "../images-sm/_text7.webp"
import text8 from "../images-sm/_text8.webp"
import text9 from "../images-sm/_text9.webp"
import text10 from "../images-sm/_text10.webp"
import text11 from "../images-sm/_text11.webp"
import text12 from "../images-sm/_text12.webp"
import text13 from "../images-sm/_text13.webp"
import text14 from "../images-sm/_text14.webp"
import text15 from "../images-sm/_text15.webp"
import text16 from "../images-sm/_text16.webp"
import text17 from "../images-sm/_text17.webp"
import text18 from "../images-sm/_text18.webp"
import text19 from "../images-sm/_text19.webp"
import text20 from "../images-sm/_text20.webp"
import text21 from "../images-sm/_text21.webp"
import text22 from "../images-sm/_text22.webp"
// inner
import inner1 from "../images-sm/_inner1.webp"
import inner2 from "../images-sm/_inner2.webp"
import inner3 from "../images-sm/_inner3.webp"
import inner4 from "../images-sm/_inner4.webp"
import inner5 from "../images-sm/_inner5.webp"
import inner6 from "../images-sm/_inner6.webp"
import inner7 from "../images-sm/_inner7.webp"
import inner8 from "../images-sm/_inner8.webp"
import inner9 from "../images-sm/_inner9.webp"
import inner10 from "../images-sm/_inner10.webp"
import inner11 from "../images-sm/_inner11.webp"
import inner12 from "../images-sm/_inner12.webp"
import inner13 from "../images-sm/_inner13.webp"
import inner14 from "../images-sm/_inner14.webp"
import inner15 from "../images-sm/_inner15.webp"
import inner16 from "../images-sm/_inner16.webp"
import inner17 from "../images-sm/_inner17.webp"
import inner18 from "../images-sm/_inner18.webp"
import inner19 from "../images-sm/_inner19.webp"
import inner20 from "../images-sm/_inner20.webp"
import inner21 from "../images-sm/_inner21.webp"
import inner22 from "../images-sm/_inner22.webp"

const innerImages = [
  inner1,
  inner2,
  inner3,
  inner4,
  inner5,
  inner6,
  inner7,
  inner8,
  inner9,
  inner10,
  inner11,
  inner12,
  inner13,
  inner14,
  inner15,
  inner16,
  inner17,
  inner18,
  inner19,
  inner20,
  inner21,
  inner22,
]

const text = [
  { img: text1, link: "" },
  { img: text2, link: "" },
  { img: text3, link: "https://dub.sh/solace-video" },
  { img: text4, link: "" },
  { img: text5, link: "" },
  { img: text6, link: "" },
  { img: text7, link: "" },
  { img: text8, link: "" },
  { img: text9, link: "" },
  { img: text10, link: "" },
  { img: undefined, link: "" },
  { img: text12, link: "" },
  { img: text13, link: "" },
  { img: text14, link: "" },
  { img: text15, link: "" },
  { img: text16, link: "" },
  { img: text17, link: "" },
  { img: text18, link: "" },
  { img: text19, link: "" },
  { img: text20, link: "" },
  { img: text21, link: "https://dub.sh/comfortball" },
  { img: text22, link: "" },
]

// hex colors
const hexColors = [
  "#1be4e8",
  "#b0f844",
  "#b0f844",
  "#b0f844",
  "#7737d7",
  "#7737d7",
  "#dff0ec",
  "#5e4025",
  "#5e4025",
  "#f0fa28",
  "#f0fa28",
  "#1be4e8",
  "#1be4e8",
  "#ebe15d",
  "#000000",
  "#8c7db6",
  "#f4c4d0",
  "#7c4634",
  "#6af495",
  "#a000ef",
  "#a000ef",
  "#1be4e8",
]

import Home from "_/components/home"

export default function Page() {
  return <Home innerImages={innerImages} text={text} hexColors={hexColors} />
}
