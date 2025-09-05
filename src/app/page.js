// frames text
import framesText1 from "../images-sm/_frames-text1.webp"
import framesText2 from "../images-sm/_frames-text2.webp"
import framesText3 from "../images-sm/_frames-text3.webp"
import framesText4 from "../images-sm/_frames-text4.webp"
import framesText5 from "../images-sm/_frames-text5.webp"
import framesText6 from "../images-sm/_frames-text6.webp"
import framesText7 from "../images-sm/_frames-text7.webp"
import framesText8 from "../images-sm/_frames-text8.webp"
import framesText9 from "../images-sm/_frames-text9.webp"
import framesText10 from "../images-sm/_frames-text10.webp"
import framesText11 from "../images-sm/_frames-text11.webp"
import framesText12 from "../images-sm/_frames-text12.webp"
import framesText13 from "../images-sm/_frames-text13.webp"
import framesText14 from "../images-sm/_frames-text14.webp"
import framesText15 from "../images-sm/_frames-text15.webp"
import framesText16 from "../images-sm/_frames-text16.webp"
import framesText17 from "../images-sm/_frames-text17.webp"
import framesText18 from "../images-sm/_frames-text18.webp"
import framesText19 from "../images-sm/_frames-text19.webp"
import framesText20 from "../images-sm/_frames-text20.webp"
import framesText21 from "../images-sm/_frames-text21.webp"
import framesText22 from "../images-sm/_frames-text22.webp"
// inside
import inside1 from "../images-sm/_inside1.webp"
import inside2 from "../images-sm/_inside2.webp"
import inside3 from "../images-sm/_inside3.webp"
import inside4 from "../images-sm/_inside4.webp"
import inside5 from "../images-sm/_inside5.webp"
import inside6 from "../images-sm/_inside6.webp"
import inside7 from "../images-sm/_inside7.webp"
import inside8 from "../images-sm/_inside8.webp"
import inside9 from "../images-sm/_inside9.webp"
import inside10 from "../images-sm/_inside10.webp"
import inside11 from "../images-sm/_inside11.webp"
import inside12 from "../images-sm/_inside12.webp"
import inside13 from "../images-sm/_inside13.webp"
import inside14 from "../images-sm/_inside14.webp"
import inside15 from "../images-sm/_inside15.webp"
import inside16 from "../images-sm/_inside16.webp"
import inside17 from "../images-sm/_inside17.webp"
import inside18 from "../images-sm/_inside18.webp"
import inside19 from "../images-sm/_inside19.webp"
import inside20 from "../images-sm/_inside20.webp"
import inside21 from "../images-sm/_inside21.webp"
import inside22 from "../images-sm/_inside22.webp"

const insideImages = [
  inside1,
  inside2,
  inside3,
  inside4,
  inside5,
  inside6,
  inside7,
  inside8,
  inside9,
  inside10,
  inside11,
  inside12,
  inside13,
  inside14,
  inside15,
  inside16,
  inside17,
  inside18,
  inside19,
  inside20,
  inside21,
  inside22,
]

const framesText = [
  { img: framesText1, link: "" },
  { img: framesText2, link: "" },
  { img: framesText3, link: "https://vimeo.com/694159987" },
  { img: framesText4, link: "" },
  { img: framesText5, link: "" },
  { img: framesText6, link: "" },
  { img: framesText7, link: "" },
  { img: framesText8, link: "" },
  { img: framesText9, link: "" },
  { img: framesText10, link: "" },
  { img: undefined, link: "" },
  { img: framesText12, link: "" },
  { img: framesText13, link: "" },
  { img: framesText14, link: "" },
  { img: framesText15, link: "" },
  { img: framesText16, link: "" },
  { img: framesText17, link: "" },
  { img: framesText18, link: "" },
  { img: framesText19, link: "" },
  { img: framesText20, link: "" },
  { img: framesText21, link: "https://vimeo.com/811570947" },
  { img: framesText22, link: "" },
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
  return (
    <Home
      insideImages={insideImages}
      framesText={framesText}
      hexColors={hexColors}
    />
  )
}
