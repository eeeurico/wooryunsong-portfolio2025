"use client"

import Image from "next/image"
import styles from "./home.module.css"
import { useScrollIndex } from "./useScrollIndex"
import { useRef, useEffect } from "react"

export default function Home({ insideImages, frames, framesText, hexColors }) {
  const [insideRef, scrollIdx, scrollFrac] = useScrollIndex(insideImages.length)

  const getFrameOpacity = (idx) => {
    return Math.round(scrollFrac) === idx ? 1 : 0
  }
  // console.log("scrollIdx, scrollFrac", scrollIdx, scrollFrac)

  const gradientRef = useRef(null)

  useEffect(() => {
    const inside = insideRef.current
    const gradient = gradientRef.current
    if (!inside || !gradient) return
    function syncScroll() {
      gradient.scrollTop = inside.scrollTop
    }
    inside.addEventListener("scroll", syncScroll)
    return () => inside.removeEventListener("scroll", syncScroll)
  }, [insideRef])

  // // Calculate opacity for each frame based on scrollIdx and its fractional position
  // function getFrameOpacity(idx) {
  //   // Only the closest index is visible, but use scrollFrac for future blending if needed
  //   return Math.round(scrollFrac) === idx ? 1 : 0
  // }

  // // Helper to blend two hex colors
  // function blendHexColors(hex1, hex2, t) {
  //   // Remove #
  //   hex1 = hex1.replace("#", "")
  //   hex2 = hex2.replace("#", "")
  //   // Parse r,g,b
  //   const r1 = parseInt(hex1.substring(0, 2), 16)
  //   const g1 = parseInt(hex1.substring(2, 4), 16)
  //   const b1 = parseInt(hex1.substring(4, 6), 16)
  //   const r2 = parseInt(hex2.substring(0, 2), 16)
  //   const g2 = parseInt(hex2.substring(2, 4), 16)
  //   const b2 = parseInt(hex2.substring(4, 6), 16)
  //   // Interpolate
  //   const r = Math.round(r1 + (r2 - r1) * t)
  //   const g = Math.round(g1 + (g2 - g1) * t)
  //   const b = Math.round(b1 + (b2 - b1) * t)
  //   return `#${r.toString(16).padStart(2, "0")}${g
  //     .toString(16)
  //     .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
  // }

  // // Calculate color transition progress between current and next image using scrollFrac
  // const idx = Math.floor(scrollFrac)
  // const frac = Math.min(1, Math.max(0, scrollFrac - idx))
  // let color = hexColors[idx]
  // if (idx < hexColors.length - 1 && frac >= 0.5) {
  //   // Start blending at 50%
  //   const blendT = (frac - 0.5) * 2 // 0 at 50%, 1 at 100%
  //   color = blendHexColors(hexColors[idx], hexColors[idx + 1], blendT)
  // }

  return (
    <div
      className={styles.page}
      // style={{ "--main-color": color }}
    >
      <main className={styles.main}>
        <div className={styles.gradientOverlay} ref={gradientRef}>
          {insideImages.map(({}, idx) => (
            <div
              key={`inside-grad-${idx}`}
              style={{
                "--next-grad-color": hexColors[idx + 1] || hexColors[idx],
                "--grad-color": hexColors[idx],
              }}
            />
          ))}
        </div>
        <div className={styles.inside} ref={insideRef}>
          {insideImages.map((src, idx) => (
            <Image
              key={`inside-${idx}`}
              src={src}
              alt={`Inside ${idx + 1}`}
              width={4000}
              height={2250}
              loading="lazy"
              placeholder="blur"
            />
          ))}
        </div>
        {/* <div className={styles.hexGrey}>
          <div />
          <div />
        </div>
         */}
        <div className={styles.hexColors}>
          <div />
          <div />
          <div />
        </div>
        {/* <div className={styles.hexColor}></div> */}
        <div className={styles.hexGrey}>
          <div />
          <div />
        </div>
        {/* <div className={styles.frames}>
          {frames.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Frame ${idx + 1}`}
              width={4000}
              height={2250}
              style={{
                opacity: getFrameOpacity(idx),
                transition: "opacity 2s",
              }}
            />
          ))}
        </div> */}
        {/*
         */}
        <div className={styles.framesText}>
          {framesText.map(({ img, link }, idx) => {
            const isActive = getFrameOpacity(idx) === 1
            if (!img) return null
            return (
              <div
                key={`frame-text-div-${idx}`}
                className={isActive ? styles.active : ""}
              >
                {link ? (
                  <a href={link} target="_blank" rel="noreferrer noopener" />
                ) : null}
                <Image
                  key={idx}
                  src={img}
                  width={4000}
                  height={2250}
                  alt={`Frame ${idx + 1}`}
                />
              </div>
            )
          })}
        </div>
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  )
}
