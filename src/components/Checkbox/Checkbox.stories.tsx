import React from 'react';
import { Story } from '@storybook/react';

import Checkbox, { Props } from './Checkbox';

export default {
    component: Checkbox,
    title: 'Checkbox',
};

const Template = (args: Props) => <Checkbox {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {};

export const Checked: Story<Props> = Template.bind({});
Checked.args = { checked: true };

export const WithLabel: Story<Props> = Template.bind({});
WithLabel.args = { label: 'Label' };
