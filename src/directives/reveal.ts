import type { Directive, DirectiveBinding } from 'vue'

const VALID = new Set([
  'fade-in-up',
  'fade-in-down',
  'fade-in-left',
  'fade-in-right',
  'fade-in',
])

export type RevealBinding =
  | string
  | {
      animation?: string
      delay?: number
      once?: boolean
      threshold?: number
      rootMargin?: string
    }

function parse(binding: DirectiveBinding<RevealBinding | undefined>) {
  const v = binding.value
  if (typeof v === 'string' && VALID.has(v)) {
    return {
      animation: v,
      delay: 0,
      once: true,
      threshold: 0.12,
      rootMargin: '0px 0px -48px 0px',
    }
  }
  if (v && typeof v === 'object') {
    const name = v.animation ?? 'fade-in-up'
    return {
      animation: VALID.has(name) ? name : 'fade-in-up',
      delay: typeof v.delay === 'number' ? v.delay : 0,
      once: v.once !== false,
      threshold:
        typeof v.threshold === 'number' ? v.threshold : 0.12,
      rootMargin:
        typeof v.rootMargin === 'string'
          ? v.rootMargin
          : '0px 0px -48px 0px',
    }
  }
  return {
    animation: 'fade-in-up',
    delay: 0,
    once: true,
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px',
  }
}

export const reveal: Directive<HTMLElement, RevealBinding | undefined> = {
  mounted(el, binding) {
    const { animation, delay, once, threshold, rootMargin } =
      parse(binding)

    el.classList.add('reveal', `reveal--${animation}`)
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-visible')
            if (once) observer.disconnect()
          } else if (!once) {
            el.classList.remove('reveal-visible')
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    ;(el as HTMLElement & { __revealObserver?: IntersectionObserver }).__revealObserver =
      observer
  },

  unmounted(el) {
    const obs = (el as HTMLElement & { __revealObserver?: IntersectionObserver })
      .__revealObserver
    obs?.disconnect()
    delete (el as HTMLElement & { __revealObserver?: IntersectionObserver })
      .__revealObserver
  },
}
