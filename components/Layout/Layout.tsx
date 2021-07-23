import s from "./layout.module.scss";
import Head from 'next/head'
import Image from 'next/image'
import { Sidebar } from '../Modules/Sidebar'
import { Footer } from '../Modules/Footer'

interface Props {
    children: any
}

export function Layout({children}: Props) {
    return (
    <>
        <Head>
            <title>Ares</title>
            <meta name="description" content="Ares CMS" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/static/images/favicon.ico" />
        </Head>
        
        <div className="h-screen flex overflow-hidden">
            <div className="hidden md:flex md:flex-shrink-0">
                <Sidebar />
            </div>
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    {children}
                </main>
            </div>
        </div>
    </>
    )
}