import React from 'react';

import App from './App';

export default {
  title: 'Components/Button',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <App {...args} />;

export const AppComponent = Template.bind({});
AppComponent.args = {
  primary: true,
  label: 'Button',
};
