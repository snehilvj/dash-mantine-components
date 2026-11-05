import { LightboxLabels as MantineLightboxLabels } from '@mantine/lightbox';
import { DashBaseProps } from 'props/dash';
import React, { Suspense } from 'react';

// eslint-disable-next-line no-inline-comments
const LazyLightbox = React.lazy(
    () => import(/* webpackChunkName: "Lightbox" */ './fragments/Lightbox')
);

/** Slide data. Image slides are used by default, set `type` to `'video'` for video
 * slides or `'custom'` to render the children of the Lightbox component as slide content. */
export type LightboxSlide =
    | {
          /** Slide type, `'image'` by default */
          type?: 'image';
          /** Image URL */
          src: string;
          /** Image alt text, always set it for screen readers */
          alt?: string;
          /** Custom thumbnail URL, `src` is used if not set */
          thumbSrc?: string;
          /** Caption displayed below the slide */
          caption?: string;
          /** Image `srcset` attribute for responsive images */
          srcSet?: string;
          /** Image `sizes` attribute for responsive images */
          sizes?: string;
          /** Image `loading` attribute, `'eager'` for the active slide and `'lazy'` for all other slides by default */
          loading?: 'eager' | 'lazy';
      }
    | {
          /** Slide type, must be `'video'` */
          type: 'video';
          /** Video source URL */
          src: string;
          /** Video accessible label, announced by screen readers */
          label?: string;
          /** Custom thumbnail URL, `poster` is used if not set */
          thumbSrc?: string;
          /** Caption displayed below the slide */
          caption?: string;
          /** Whether the video should auto-play when the slide becomes active */
          autoPlay?: boolean;
          /** Video poster image URL, also used as thumbnail */
          poster?: string;
          /** Subtitle/caption tracks rendered as `<track>` elements */
          tracks?: {
              /** WebVTT track source URL */
              src: string;
              /** Track kind, `'subtitles'` by default */
              kind?: string;
              /** Track language code, for example `'en'` */
              srcLang?: string;
              /** Track label displayed in the video player captions menu */
              label?: string;
              /** Whether the track should be enabled by default */
              default?: boolean;
          }[];
      }
    | {
          /** Slide type, must be `'custom'`. The children of the Lightbox component
           * are rendered as the content of every custom slide. */
          type: 'custom';
          /** Custom thumbnail URL */
          thumbSrc?: string;
          /** Caption displayed below the slide */
          caption?: string;
      };

export interface Props extends DashBaseProps {
    /** Determines whether the lightbox is opened */
    opened?: boolean;
    /** Array of slide data objects */
    slides?: LightboxSlide[];
    /** Index of the currently displayed slide, updated when the user navigates */
    currentIndex?: number;
    /** Enables image zoom on click/pinch, `false` by default */
    withZoom?: boolean;
    /** Maximum zoom scale, `3` by default */
    zoomMaxScale?: number;
    /** Shows bottom thumbnail strip, `false` by default */
    withThumbnails?: boolean;
    /** Adds fullscreen toggle to toolbar, `false` by default */
    withFullscreen?: boolean;
    /** Adds download button to toolbar, `false` by default */
    withDownload?: boolean;
    /** Enables infinite loop navigation, `false` by default */
    loop?: boolean;
    /** Shows previous/next navigation arrows, `true` by default */
    withNavigation?: boolean;
    /** Closes lightbox when the empty space around the slide content is clicked, `false` by default */
    closeOnClickOutside?: boolean;
    /** Closes lightbox when swiping down on mobile, `true` by default */
    closeOnSwipeDown?: boolean;
    /** Determines whether keyboard shortcuts (arrows, `F`/`T`/`Z`) are active, `Escape` always closes the lightbox, `true` by default */
    withKeyboardEvents?: boolean;
    /** Determines whether focus should be returned to the last active element when the lightbox is closed, `true` by default */
    returnFocus?: boolean;
    /** Determines whether the lightbox should be rendered inside `Portal`, `true` by default */
    withinPortal?: boolean;
    /** `z-index` of the overlay and content elements, `400` by default */
    zIndex?: string | number;
    /** Transition duration in milliseconds, `200` by default */
    transitionDuration?: number;
    /** Props passed down to the `Transition` component that animates the content, the overlay always fades */
    transitionProps?: object;
    /** Additional Embla carousel options. `loop` and `startIndex` are controlled by the `loop` and `currentIndex` props and cannot be set here */
    emblaOptions?: object;
    /** Labels used in the component for accessibility and localization. `slideLabel` and `thumbnailLabel` accept a function.
     * See https://www.dash-mantine-components.com/functions-as-props */
    labels?: Partial<MantineLightboxLabels>;
    /** Content to render in slides of type `'custom'`. If the number of children matches
     * the number of custom slides, each child is rendered in its corresponding custom
     * slide; otherwise all children are rendered in every custom slide. */
    children?: React.ReactNode;
    /** CSS styles applied to the root element */
    style?: React.CSSProperties;
    /** CSS classes applied to the root element */
    className?: string;
}

/** Lightbox */
const Lightbox = (props: Props) => {
    return (
        <Suspense fallback={null}>
            <LazyLightbox {...props} />
        </Suspense>
    );
};

export default Lightbox;
