import { Header } from "./Header"

export default {
  title: "Molecules/HeaderSection",
  component: Header,
}

const Template = (args) => <Header {...args} />

export const HeaderComponent = Template.bind({})
HeaderComponent.args = {}
