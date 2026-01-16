import React from 'react';

export default function HorizontalSpacer({ pixels=20 }) {
    return <div style={{ height: `${pixels}px` }}></div>;
}