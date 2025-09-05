// frames
import frames1 from "../images/frames1.png"
import frames2 from "../images/frames2.png"
import frames3 from "../images/frames3.png"
import frames4 from "../images/frames4.png"
import frames5 from "../images/frames5.png"
import frames6 from "../images/frames6.png"
import frames7 from "../images/frames7.png"
import frames8 from "../images/frames8.png"
import frames9 from "../images/frames9.png"
import frames10 from "../images/frames10.png"
import frames11 from "../images/frames11.png"
import frames12 from "../images/frames12.png"
import frames13 from "../images/frames13.png"
import frames14 from "../images/frames14.png"
import frames15 from "../images/frames15.png"
import frames16 from "../images/frames16.png"
import frames17 from "../images/frames17.png"
import frames18 from "../images/frames18.png"
import frames19 from "../images/frames19.png"
import frames20 from "../images/frames20.png"
import frames21 from "../images/frames21.png"
import frames22 from "../images/frames22.png"

// frames text
import framesText1 from "../images/_frames-text1.png"
import framesText2 from "../images/_frames-text2.png"
import framesText3 from "../images/_frames-text3.png"
import framesText4 from "../images/_frames-text4.png"
import framesText5 from "../images/_frames-text5.png"
import framesText6 from "../images/_frames-text6.png"
import framesText7 from "../images/_frames-text7.png"
import framesText8 from "../images/_frames-text8.png"
import framesText9 from "../images/_frames-text9.png"
import framesText10 from "../images/_frames-text10.png"
import framesText11 from "../images/_frames-text11.png"
import framesText12 from "../images/_frames-text12.png"
import framesText13 from "../images/_frames-text13.png"
import framesText14 from "../images/_frames-text14.png"
import framesText15 from "../images/_frames-text15.png"
import framesText16 from "../images/_frames-text16.png"
import framesText17 from "../images/_frames-text17.png"
import framesText18 from "../images/_frames-text18.png"
import framesText19 from "../images/_frames-text19.png"
import framesText20 from "../images/_frames-text20.png"
import framesText21 from "../images/_frames-text21.png"
import framesText22 from "../images/_frames-text22.png"
// inside
import inside1 from "../images/_inside1.jpg"
import inside2 from "../images/_inside2.jpg"
import inside3 from "../images/_inside3.jpg"
import inside4 from "../images/_inside4.jpg"
import inside5 from "../images/_inside5.jpg"
import inside6 from "../images/_inside6.jpg"
import inside7 from "../images/_inside7.jpg"
import inside8 from "../images/_inside8.jpg"
import inside9 from "../images/_inside9.jpg"
import inside10 from "../images/_inside10.jpg"
import inside11 from "../images/_inside11.jpg"
import inside12 from "../images/_inside12.jpg"
import inside13 from "../images/_inside13.jpg"
import inside14 from "../images/_inside14.jpg"
import inside15 from "../images/_inside15.jpg"
import inside16 from "../images/_inside16.jpg"
import inside17 from "../images/_inside17.jpg"
import inside18 from "../images/_inside18.jpg"
import inside19 from "../images/_inside19.jpg"
import inside20 from "../images/_inside20.jpg"
import inside21 from "../images/_inside21.jpg"
import inside22 from "../images/_inside22.jpg"

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

const frames = [
  frames1,
  frames2,
  frames3,
  frames4,
  frames5,
  frames6,
  frames7,
  frames8,
  frames9,
  frames10,
  frames11,
  frames12,
  frames13,
  frames14,
  frames15,
  frames16,
  frames17,
  frames18,
  frames19,
  frames20,
  frames21,
  frames22,
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
      frames={frames}
      framesText={framesText}
      hexColors={hexColors}
    />
  )
}
