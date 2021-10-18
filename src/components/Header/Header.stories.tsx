import React from 'react';
import { Story } from '@storybook/react';

import Header, { Props } from './Header';

export default {
    component: Header,
    title: 'Header',
};

const Template = (args: Props) => <Header {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = { count: 0 };
