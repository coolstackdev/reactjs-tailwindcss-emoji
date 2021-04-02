import React from "react"
import { Sidebar } from "./Sidebar"

export default {
  title: "Molecules/Sidebar",
  component: Sidebar,
  argTypes: {
    onClose: { action: "clicked" },
  },
}

const Template = (args) => <Sidebar {...args} />

export const SidebarComponent = Template.bind({})
SidebarComponent.args = {
  onClose: () => console.log("onClose"),
}
