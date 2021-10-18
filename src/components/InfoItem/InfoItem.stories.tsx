import React from 'react';
import { Story } from '@storybook/react';

import InfoItem, { Props } from './InfoItem';

export default {
    component: InfoItem,
    title: 'InfoItem',
};

const Template = (args: Props) => <InfoItem {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
    data: {
        id: 'id',
        name: 'Name',
        description: 'This is a short description',
        link: 'http://localhost',
    },
};

export const Highlighted: Story<Props> = Template.bind({});
Highlighted.args = {
    data: {
        id: 'id',
        name: 'Your name',
        description: "This is a short description, it's for you to claim!",
        link: 'http://localhost',
    },
    highlight: 'you',
};
