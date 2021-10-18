import React from 'react';
import { Story } from '@storybook/react';

import Table, { Props } from './Table';
import { generateData } from '../../utils/data';

export default {
    component: Table,
    title: 'Table',
};

const Template = (args: Props) => <Table {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = { data: generateData({ count: 10 }) };
