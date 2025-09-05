"use client"
import { useRef, useEffect, useState } from "react"

export function useScrollIndex(numItems) {
  const ref = useRef(null)
  const [scrollIdx, setScrollIdx] = useState(0)
  const [scrollFrac, setScrollFrac] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    function onScroll() {
      const scroll = el.scrollTop
      const client = el.clientHeight
      const total = el.scrollHeight
      const section = total / numItems
      // Use scroll offset directly for index calculation
      let idx = Math.round(scroll / section)
      idx = Math.max(0, Math.min(numItems - 1, idx))
      setScrollIdx(idx)
      // Fractional position between images
      let fracIdx = scroll / section
      fracIdx = Math.max(0, Math.min(numItems - 1, fracIdx))
      setScrollFrac(fracIdx)
    }
    el.addEventListener("scroll", onScroll)
    onScroll()
    return () => el.removeEventListener("scroll", onScroll)
  }, [numItems])

  return [ref, scrollIdx, scrollFrac]
}
