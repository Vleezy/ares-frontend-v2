import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";
import { Logo as LogoComponent, Props } from "./Logo";

// This default export determines where your story goes in the story list
const Component = {
    title: "Ui/Components/Logo",
    component: LogoComponent,
    argTypes: {
        onClick: { action: "clicked" },
    },
};

const Template: Story<ComponentProps<typeof LogoComponent>> = (args) => (
    <LogoComponent {...args} />
);

export const Logo = Template.bind({});
export default Component;

Logo.args = {
    className: "test",
} as Props;
