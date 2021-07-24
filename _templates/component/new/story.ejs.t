---
to: components/<%= h.path.dirname(name) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>/<%= h.changeCase.pascal(h.path.basename(name)) %>.stories.tsx
unless_exists: true
---

import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import { <%= h.changeCase.pascal(h.path.basename(name)) %> as <%= h.changeCase.pascal(h.path.basename(name)) %>Component, Props } from './<%= h.changeCase.pascal(h.path.basename(name)) %>';

// This default export determines where your story goes in the story list
const Component = {
  title: 'Components/<%= h.changeCase.pascal(h.path.basename(name)) %>',
  component: <%= h.changeCase.pascal(h.path.basename(name)) %>Component,
  argTypes: {
    onClick: { action: 'clicked' }
  }
};

const Template: Story<ComponentProps<typeof <%= h.changeCase.pascal(h.path.basename(name)) %>Component>> = (args) => <<%= h.changeCase.pascal(h.path.basename(name)) %>Component {...args} />;

export const <%= h.changeCase.pascal(h.path.basename(name)) %> = Template.bind({});
export default Component;

<%= h.changeCase.pascal(h.path.basename(name)) %>.args = {
  group: 'admin'
} as Props;
