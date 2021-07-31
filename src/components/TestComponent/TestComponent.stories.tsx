import { Story } from "@storybook/react/types-6-0";
import React, { ComponentProps } from "react";
import {
    TestComponent as TestComponentComponent,
    Props,
} from "./TestComponent";

// This default export determines where your story goes in the story list
const Component = {
    title: "Components/TestComponent",
    component: TestComponentComponent,
    argTypes: {
        onClick: { action: "clicked" },
    },
};

const Template: Story<ComponentProps<typeof TestComponentComponent>> = (
    args
) => <TestComponentComponent {...args} />;

export const TestComponent = Template.bind({});
export default Component;

TestComponent.args = {
    group: "admin",
} as Props;
