import moment from "moment"
import { FeaturedProduct } from "./FeaturedProduct"

export default {
  title: "Molecules/FeaturedProduct",
  component: FeaturedProduct,
}

const Template = (args) => <FeaturedProduct {...args} />

export const FeaturedProductComponent = Template.bind({})
FeaturedProductComponent.args = {
  closeDateTime: moment().add(7400, "seconds"),
}
