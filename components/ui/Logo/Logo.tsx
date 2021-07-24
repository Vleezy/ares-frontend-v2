import s from "./Logo.module.scss";

import Image from "next/image";
import React, { FC } from "react";

export type Props = {
    className?: string;
};

export const Logo: FC<Props> = ({ className }: Props) => {
    return (
        <div className={s.aresLogo}>
            <Image
                src="/static/images/logo.png"
                width={104}
                height={59}
                alt="Ares Logo"
            />
        </div>
    );
};
