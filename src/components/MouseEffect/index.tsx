import { useEffect, useRef } from 'react'
import { isInteractiveTarget, lerp, setCursorPosition, type Point } from './utils'
import './styles.css'

type MouseEffectProps = {
  isDarkMode?: boolean
  pageRootId?: string
}

const CURSOR_SELECTORS = {
  ring: '[data-cursor="ring"]',
  dot: '[data-cursor="dot"]',
} as const

export default function MouseEffect({
  isDarkMode = false,
  pageRootId = 'cover-photo',
}: MouseEffectProps) {
  const layerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<Point>({ x: 0, y: 0 })
  const ringRef = useRef<Point>({ x: 0, y: 0 })
  const dotRef = useRef<Point>({ x: 0, y: 0 })
  const rafRef = useRef(0)
  const activeRef = useRef(false)

  useEffect(() => {
    const layer = layerRef.current
    const pageRoot = document.getElementById(pageRootId)
    if (!layer || !pageRoot) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (reducedMotion || coarsePointer) return

    const ring = layer.querySelector<HTMLElement>(CURSOR_SELECTORS.ring)
    const dot = layer.querySelector<HTMLElement>(CURSOR_SELECTORS.dot)

    const syncPosition = (point: Point) => {
      targetRef.current = point
      ringRef.current = point
      dotRef.current = point
    }

    const animate = () => {
      const target = targetRef.current
      const ringPoint = ringRef.current
      const dotPoint = dotRef.current

      ringPoint.x = lerp(ringPoint.x, target.x, 0.18)
      ringPoint.y = lerp(ringPoint.y, target.y, 0.18)
      dotPoint.x = lerp(dotPoint.x, target.x, 0.35)
      dotPoint.y = lerp(dotPoint.y, target.y, 0.35)

      setCursorPosition(ring, ringPoint)
      setCursorPosition(dot, dotPoint)

      rafRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const point = { x: event.clientX, y: event.clientY }
      targetRef.current = point

      if (isInteractiveTarget(event.target)) {
        layer.classList.add('custom-cursor-layer--hover')
      } else {
        layer.classList.remove('custom-cursor-layer--hover')
      }

      if (!activeRef.current) {
        syncPosition(point)
        activeRef.current = true
        layer.classList.add('custom-cursor-layer--active')
        pageRoot.classList.add('custom-cursor-active')
      }
    }

    const handleMouseDown = () => {
      layer.classList.add('custom-cursor-layer--pressed')
    }

    const handleMouseUp = () => {
      layer.classList.remove('custom-cursor-layer--pressed')
    }

    const handleMouseLeave = () => {
      layer.classList.remove(
        'custom-cursor-layer--active',
        'custom-cursor-layer--hover',
        'custom-cursor-layer--pressed',
      )
      pageRoot.classList.remove('custom-cursor-active')
      activeRef.current = false
    }

    rafRef.current = requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      pageRoot.classList.remove('custom-cursor-active')
    }
  }, [pageRootId])

  const layerClassName = [
    'custom-cursor-layer',
    isDarkMode ? 'custom-cursor-layer--dark' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={layerRef} className={layerClassName} aria-hidden>
      <div className="custom-cursor-ring" data-cursor="ring" />
      <div className="custom-cursor-dot" data-cursor="dot" />
    </div>
  )
}
