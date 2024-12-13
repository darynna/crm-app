'use client';

import React, {useState} from 'react'
import dynamic from 'next/dynamic';
import {Button} from "@headlessui/react";
const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
    ssr: false,
});

export default function AddCompanyButton() {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button onClick={() => setShow(true)}  className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">Add company</Button>
            <CompanyFormModal
                onSubmit={console.log}
                show={show}
                onClose={() => setShow(false)}
            />
        </>
    );
}