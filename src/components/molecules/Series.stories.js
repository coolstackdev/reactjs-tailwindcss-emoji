import React from "react"
import { Series } from "./Series"

export default {
  title: "Molecules/Series",
  component: Series,
}

const Template = (args) => <Series {...args} />

export const SeriesComponent = Template.bind({})
SeriesComponent.args = {
  product: "common",
  price: 7,
}
