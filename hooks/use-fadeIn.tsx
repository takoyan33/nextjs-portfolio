"use client"

import { useEffect, useRef } from "react"

/**
 * 画面が表示されたら上に上がるアニメーションを付与する
 * @param children 子要素
 * @returns 子要素
 */
const ScrollComponent = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
        }
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={ref} className="fade-in">
      {children}
    </div>
  )
}

export default ScrollComponent
