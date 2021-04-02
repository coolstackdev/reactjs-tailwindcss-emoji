import React from "react"
import { Button } from "./Button"

export default {
  title: "Atoms/Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const ButtonComponent = Template.bind({})
ButtonComponent.args = {
  classes: "",
  primary: true,
  secondary: false,
  flat: false,
  rounded: false,
  tertiary: false,
  large: true,
  medium: false,
  small: false,
  title: "Button",
  disabled: false,
}
