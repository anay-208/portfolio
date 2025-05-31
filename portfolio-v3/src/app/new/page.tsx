import Client from "./client";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Anay Paraswani',
}

export default function Page() {
    return (
        <Client />
    )
}