import React from 'react';
import { Story } from '@storybook/react';

import TextField, { Props } from './TextField';

export default {
    component: TextField,
    title: 'TextField',
};

const Template = (args: Props) => <TextField {...args} />;

export const Text: Story<Props> = Template.bind({});
Text.args = { type: 'text' };

export const Search: Story<Props> = Template.bind({});
Search.args = { type: 'search' };

export const Number: Story<Props> = Template.bind({});
Number.args = { type: 'number' };
