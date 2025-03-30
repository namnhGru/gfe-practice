import React from 'react';

export default function Button({children, clasName }) {
    return <button className={`
        ${clasName}
        flex items-center justify-center 
        rounded-sm 
        p-[0.625em]
        font-medium text-base/[24px]`}>
        {children}
    </button>
}