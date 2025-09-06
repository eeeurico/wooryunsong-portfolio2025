"use client"

import Image from "next/image"
import styles from "./home.module.css"
import { useScrollIndex } from "./useScrollIndex"
import { useRef, useEffect, useState } from "react"

export default function Home({ innerImages, text, hexColors }) {
  const [loaded, setLoaded] = useState(false)

  const [innerRef, scrollIdx, scrollFrac] = useScrollIndex(innerImages.length)

  const getFrameOpacity = (idx) => {
    return Math.round(scrollFrac) === idx ? 1 : 0
  }

  const gradientRef = useRef(null)

  useEffect(() => {
    const inner = innerRef.current
    const gradient = gradientRef.current
    if (!inner || !gradient) return
    function syncScroll() {
      gradient.scrollTop = inner.scrollTop
    }
    inner.addEventListener("scroll", syncScroll)
    return () => inner.removeEventListener("scroll", syncScroll)
  }, [innerRef])

  return (
    <div className={`${styles.page} ${!loaded ? styles.notloaded : ""}`}>
      <main className={styles.main}>
        <div className={styles.gradientOverlay} ref={gradientRef}>
          {innerImages.map(({}, idx) => (
            <div
              key={`inner-grad-${idx}`}
              style={{
                "--next-grad-color": hexColors[idx + 1] || hexColors[idx],
                "--grad-color": hexColors[idx],
              }}
            />
          ))}
        </div>
        <div className={styles.inner} ref={innerRef}>
          {innerImages.map((src, idx) => (
            <Image
              key={`inner-${idx}`}
              src={src}
              alt={`inner ${idx + 1}`}
              width={2000}
              height={1125}
              priority={true}
              onLoadingComplete={() => {
                setTimeout(() => {
                  idx + 1 === 1 && setLoaded(true)
                  // idx === 0 && setLoaded(true)
                  // console.log(`completed inner image ${idx + 1}`)
                }, 100)
              }}
              quality={100}
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

        <div className={styles.text}>
          {text.map(({ img, link }, idx) => {
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
