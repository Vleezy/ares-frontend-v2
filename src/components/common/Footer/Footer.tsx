import s from "./Footer.module.scss";

import react, { FC } from "react";

export type Props = {};

export const Footer: FC<Props> = ({}: Props) => {
    return (
        <div className={s.aresFooter}>
            <h1>Ares</h1>
        </div>
    );
};
