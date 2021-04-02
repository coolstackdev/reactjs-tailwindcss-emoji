import React from "react"
import moment from "moment"
import { CountdownTimer } from "./CountdownTimer"

export default {
  title: "Atoms/CountdownTimer",
  component: CountdownTimer,
}

const Template = (args) => <CountdownTimer {...args} />

export const CountdownComponent = Template.bind({})
CountdownComponent.args = {
  closeDateTime: moment().add(7400, "seconds"),
}
