import { getImageProps, type ImageProps } from 'next/image'

// 1×1 transparent GIF: what the <img> falls back to outside `media`, so nothing is downloaded there
const EMPTY_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

/**
 * next/image that only loads at one breakpoint. Use it for images that CSS shows on some screen
 * sizes only (e.g. `md:hidden`): a hidden <Image priority> is still downloaded and preloaded on
 * every device, this is not. Same optimised srcSet, sizes, styles and classes as <Image>.
 */
export default function BreakpointImage({ media, ...props }: Omit<ImageProps, 'priority' | 'preload'> & { media: string }) {
  const { props: { srcSet, sizes, src, ...img } } = getImageProps(props)
  return (
    <picture>
      <source media={media} srcSet={srcSet ?? src} sizes={sizes} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from props */}
      <img {...img} src={EMPTY_PIXEL} />
    </picture>
  )
}
