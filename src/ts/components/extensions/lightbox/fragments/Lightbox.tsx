import {
    Lightbox as MantineLightbox,
    LightboxSlideData,
} from '@mantine/lightbox';
import React from 'react';
import { getLoadingState } from '../../../../utils/dash3';
import { parseFuncProps } from '../../../../utils/prop-functions';
import { Props } from '../Lightbox';

/** Lightbox */
const Lightbox = ({
    setProps,
    opened = false,
    slides = [],
    currentIndex,
    loading_state,
    ...others
}: Props) => {
    return (
        <MantineLightbox
            data-dash-is-loading={getLoadingState(loading_state) || undefined}
            opened={opened}
            onClose={() => setProps({ opened: false })}
            slides={slides as LightboxSlideData[]}
            currentIndex={currentIndex}
            onIndexChange={(index) => setProps({ currentIndex: index })}
            {...parseFuncProps('Lightbox', others)}
        />
    );
};

export default Lightbox;
