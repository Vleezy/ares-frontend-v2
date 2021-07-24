import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";
import { Footer as FooterComponent, Props } from "./Footer";

// This default export determines where your story goes in the story list
const Component = {
    title: "Common/Components/Footer",
    component: FooterComponent,
    argTypes: {
        onClick: { action: "clicked" },
    },
};

const Template: Story<ComponentProps<typeof FooterComponent>> = (args) => (
    <FooterComponent {...args} />
);

export const Footer = Template.bind({});
export default Component;

Footer.args = {} as Props;
