import React from 'react';

import CustomBotton from './custom-button.component';

export default {
  title: 'Buttons',
  component: CustomBotton,
};

const Template = (args) => <CustomBotton {...args} />;

export const SignInWithGoogle = Template.bind({});
SignInWithGoogle.args = {
  SignWithGoogle: true,
  children : 'Sign with Google',
  isGoogleSignIn:true
};

export const SignIn = Template.bind({});
SignIn.args = {
  SignIn: true,
  children : 'Sign In',
  isGoogleSignIn:false
};