
import React, { Suspense } from 'react';
import { Props } from './fragments/Schedule';

// eslint-disable-next-line no-inline-comments
const LazySchedule = React.lazy(
    () =>
        import(/* webpackChunkName: "Schedule" */ './fragments/Schedule')
);

const Schedule = (props: Props) => {
    return (
        <Suspense fallback={null}>
            <LazySchedule {...props} />
        </Suspense>
    );
};

export default Schedule;
