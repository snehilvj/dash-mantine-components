import {
    Lightbox as MantineLightbox,
    LightboxSlideData,
} from '@mantine/lightbox';
import React from 'react';
import { getLoadingState } from '../../../../utils/dash3';
import { LightboxLabels, LightboxSlide, Props } from '../Lightbox';

/** Replace `{index}` and `{total}` tokens in a label template. */
const replaceTokens = (template: string, index: number, total: number) =>
    template
        .replace(/\{index\}/g, String(index))
        .replace(/\{total\}/g, String(total));

/** Lightbox */
const Lightbox = ({
    setProps,
    opened = false,
    slides = [],
    currentIndex,
    labels,
    children,
    loading_state,
    ...others
}: Props) => {
    // Convert serializable slide data. Dash components passed as children are
    // rendered as the content of every slide of type 'custom'.
    const preparedSlides: LightboxSlideData[] = (slides as LightboxSlide[]).map(
        (slide) => {
            if (slide.type === 'custom') {
                return {
                    ...slide,
                    render: () => children,
                } as LightboxSlideData;
            }
            return slide as LightboxSlideData;
        }
    );

    // Convert label templates (strings containing '{index}'/'{total}') to functions
    const dashLabels = labels as Partial<LightboxLabels> | undefined;
    const preparedLabels = dashLabels
        ? ({
              ...dashLabels,
              ...(dashLabels.slideLabel !== undefined
                  ? {
                        slideLabel: (index: number, total: number) =>
                            replaceTokens(dashLabels.slideLabel!, index, total),
                    }
                  : {}),
              ...(dashLabels.thumbnailLabel !== undefined
                  ? {
                        thumbnailLabel: (index: number, total: number) =>
                            replaceTokens(
                                dashLabels.thumbnailLabel!,
                                index,
                                total
                            ),
                    }
                  : {}),
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any)
        : undefined;

    return (
        <MantineLightbox
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            opened={opened}
            onClose={() => setProps({ opened: false })}
            slides={preparedSlides}
            currentIndex={currentIndex}
            onIndexChange={(index) => setProps({ currentIndex: index })}
            labels={preparedLabels}
            {...others}
        />
    );
};

export default Lightbox;
