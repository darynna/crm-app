import React from 'react';
import {headers} from "next/headers";

export interface ServerComponentCopyProps {
    children?: React.ReactNode
}

export default function ServerComponentCopy({children}: ServerComponentCopyProps) {
    console.log('server component copy')
    console.log(headers())
    return <div>
        <span>Server Component copy</span>
        {children}
    </div>;
}