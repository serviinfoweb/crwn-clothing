import React from 'react';

import Header from './header.component';



export default {
    title: 'Header',
    component: Header,
  };

const Template = (args) => <Header {...args} />;

export const Menu = Template.bind({});
Menu.args = {
    currentUser:'kkk'
};