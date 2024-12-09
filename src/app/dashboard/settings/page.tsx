import React from 'react';

export interface PageProps {
title: string;
}

export default function Page({}: PageProps) {
    return(
        <main>
            <h1 className="text-xl">Setting Page</h1>
        </main>
    )
}