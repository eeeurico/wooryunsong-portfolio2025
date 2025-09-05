"use client"

import Image from "next/image"
import styles from "./home.module.css"
import { useScrollIndex } from "./useScrollIndex"
import { useRef, useEffect } from "react"

export default function Home({ insideImages, framesText, hexColors }) {
  const [insideRef, scrollIdx, scrollFrac] = useScrollIndex(insideImages.length)

  const getFrameOpacity = (idx) => {
    return Math.round(scrollFrac) === idx ? 1 : 0
  }

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

  return (
    <div className={styles.page}>
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
              width={2000}
              height={1125}
              priority={true}
              // loading="lazy"
              // placeholder="blur"
            />
          ))}
        </div>
        <div className={styles.hexColors}>
          <div />
          <div />
          <div />
        </div>
        <div className={styles.hexGrey}>
          <div />
          <div />
        </div>

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
                  width={2000}
                  height={1125}
                  priority={true}
                  alt={`Frame ${idx + 1}`}
                />
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
