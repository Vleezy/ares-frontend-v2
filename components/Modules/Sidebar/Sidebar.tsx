import Image from 'next/image'
import { Avatar } from './Avatar'

import s from './sidebar.module.scss';

export function Sidebar() {
    return (
    <>
        <div className="flex flex-col w-64">
            <div className={`${s.ares_sidebar} container flex flex-col h-0 flex-1`}>
                <div className="flex flex-col pt-5 pb-1 overflow-y-auto">
                    <div className="pb-5 flex justify-center">
                        <div className={`${s.ares_logo}`}>
                            <Image
                                src="/static/images/logo.png"
                                width={104}
                                height={59}
                                alt="Ares Logo"
                            />
                        </div>
                    </div>

                    <div className="pt-5 flex justify-center">
                        <Avatar />
                    </div>

                    <div className="pt-5 flex justify-center">
                        <div className="grid grid-cols-1">
                            nav goes here
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
    )
}