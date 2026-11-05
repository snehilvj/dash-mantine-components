import {
    Lightbox as MantineLightbox,
    LightboxSlideData,
} from '@mantine/lightbox';
import React from 'react';
import { getLoadingState } from '../../../../utils/dash3';
import { parseFuncProps } from '../../../../utils/prop-functions';
import { LightboxSlide, Props } from '../Lightbox';

/** Lightbox */
const Lightbox = ({
    setProps,
    opened = false,
    slides = [],
    currentIndex,
    children,
    loading_state,
    ...others
}: Props) => {
    // Convert serializable slide data. Dash components passed as children are
    // rendered as the content of slides of type 'custom': if the number of children
    // matches the number of custom slides, each child is rendered in its
    // corresponding slide, otherwise all children are rendered in every custom slide.
    const customChildren = React.Children.toArray(children);
    const customSlideCount = slides.filter((s) => s.type === 'custom').length;
    let customSlideIndex = 0;

    const preparedSlides: LightboxSlideData[] = (slides as LightboxSlide[]).map(
        (slide) => {
            if (slide.type === 'custom') {
                const content =
                    customChildren.length === customSlideCount
                        ? customChildren[customSlideIndex++]
                        : children;
                return { ...slide, render: () => content } as LightboxSlideData;
            }
            return slide as LightboxSlideData;
        }
    );

    return (
        <MantineLightbox
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            opened={opened}
            onClose={() => setProps({ opened: false })}
            slides={preparedSlides}
            currentIndex={currentIndex}
            onIndexChange={(index) => setProps({ currentIndex: index })}
            {...parseFuncProps('Lightbox', others)}
        />
    );
};

export default Lightbox;
