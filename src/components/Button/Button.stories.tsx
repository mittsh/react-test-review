import React from "react";
import { Story } from "@storybook/react";

import Button, { Props } from "./Button";

export default {
  component: Button,
  title: "Button",
};

const Template = (args: Props) => <Button {...args} />;

export const Primary: Story<Props> = Template.bind({});
Primary.args = { type: "primary", children: "Primary" };

export const Secondary: Story<Props> = Template.bind({});
Secondary.args = { type: "secondary", children: "Secondary" };

export const Disabled: Story<Props> = Template.bind({});
Disabled.args = { type: "primary", children: "Disabled", disabled: true };
