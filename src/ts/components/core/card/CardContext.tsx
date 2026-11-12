import React from 'react';

export type CardOrientation = 'horizontal' | 'vertical';

const CardContext = React.createContext<CardOrientation>('vertical');

export default CardContext