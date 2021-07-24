import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";
import { Sidebar as SidebarComponent } from "./Sidebar";

// This default export determines where your story goes in the story list
const Component = {
    title: "Ui/Components/Sidebar",
    component: SidebarComponent,
    argTypes: {
        onClick: { action: "clicked" },
    },
};

const Template: Story<ComponentProps<typeof SidebarComponent>> = (args) => (
    <SidebarComponent {...args} />
);

export const Sidebar = Template.bind({});
export default Component;
