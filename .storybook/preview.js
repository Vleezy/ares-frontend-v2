import { addDecorator } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";
import * as nextImage from "next/image";
import "../src/assets/main.scss";

addDecorator(withPerformance);

Object.defineProperty(nextImage, "default", {
    configurable: true,
    value: (props) => {
        return <img {...props} />;
    },
});

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
};
