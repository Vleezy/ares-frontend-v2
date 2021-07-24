import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";
import { Layout as LayoutComponent, Props } from "./Layout";

// This default export determines where your story goes in the story list
const Component = {
    title: "Common/Components/Layout",
    component: LayoutComponent,
    argTypes: {
        onClick: { action: "clicked" },
    },
};

const Template: Story<ComponentProps<typeof LayoutComponent>> = (args) => (
    <LayoutComponent {...args} />
);

export const Layout = Template.bind({});
export default Component;

Layout.args = {
    children: "<p>Test</p>>",
} as Props;
