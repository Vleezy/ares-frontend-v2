import s from "./TestComponent.module.scss";

import React, { FC } from "react";

export type Props = {};

export const TestComponent: FC<Props> = ({}) => {
    return <div className="test-component">TestComponent Works!</div>;
};
