import s from "./Sidebar.module.scss";

import react, { FC } from "react";
import { Logo } from "../Logo";

export type Props = {};

export const Sidebar: FC<Props> = ({}: Props) => {
    return (
        <>
            <div className="flex flex-col w-64">
                <div
                    className={`${s.aresSidebar} container flex flex-col h-0 flex-1`}
                >
                    <div className="flex flex-col pt-5 pb-1 overflow-y-auto">
                        <div className="pb-5 flex justify-center">
                            <Logo />
                        </div>

                        <div className="pt-5 flex justify-center"></div>

                        <div className="pt-5 flex justify-center">
                            <div className="grid grid-cols-1">
                                nav goes here
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
