import React from "react"
import { ProductCard } from "./ProductCard"

export default {
  title: "Atoms/ProductCard",
  component: ProductCard,
}

const Template = (args) => <ProductCard {...args} />

export const ProductCardComponent = Template.bind({})
ProductCardComponent.args = {
  product: "common",
  price: 7,
}
