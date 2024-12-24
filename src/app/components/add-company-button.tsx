'use client';

import React, {useState} from 'react'
import {Button} from "@headlessui/react";
import { useRouter } from 'next/navigation';


export default function AddCompanyButton() {
  const router = useRouter();
    return (
        <>
            <Button onClick={() => router.push('companies/new')}  className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">Add company</Button>
        </>
    );
}