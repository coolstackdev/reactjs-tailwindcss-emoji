import React from "react"
import { EmojiBadge } from "./EmojiBadge"

export default {
  title: "Atoms/EmojiBadge",
  component: EmojiBadge,
}

const Template = (args) => <EmojiBadge {...args} />

export const EmojiBadgeComponent = Template.bind({})
EmojiBadgeComponent.args = {
  emoji: "cool",
  startColor: "pink",
  endColor: "yellow-darkest",
}
