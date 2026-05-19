export type Point = {
  x: number
  y: number
}

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

export function setCursorPosition(element: HTMLElement | null, point: Point): void {
  if (!element) return
  element.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`
}

export function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false
  return Boolean(
    target.closest(
      'a, button, [role="button"], input, textarea, select, label, .ant-btn, .ant-input, .ant-select',
    ),
  )
}
