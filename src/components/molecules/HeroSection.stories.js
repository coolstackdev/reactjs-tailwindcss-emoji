import { HeroSection } from "./HeroSection"

export default {
  title: "Molecules/HeroSection",
  component: HeroSection,
}

const Template = (args) => <HeroSection {...args} />

export const HeroSectionComponent = Template.bind({})
HeroSectionComponent.args = {}
