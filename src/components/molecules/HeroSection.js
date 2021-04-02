import { Button, EmojiBadge } from "../atoms"
import EmojiBag from "../../assets/img/p-1.png"

export const HeroSection = () => {
  const buyFirstPack = () => {
    console.log("buy first pack")
  }
  return (
    <div className="w-full mt-20 lg:mt-36 relative pb-20 lg:pb-60 flex-col">
      <div className="w-full xl:w-2/3">
        <p className="heading-4 xl:subheading-1 text-gray-darkest">
          Own the World’s most iconic emotion: emoji®
        </p>
        <p className="title-4 xl:title-1 text-black-lightest mt-4 mb-6">
          Collect & discover Rare never before seen emoji® icons
        </p>
        <Button
          title="Buy your first pack"
          medium
          primary
          onClick={buyFirstPack}
        />
      </div>
      <div className="relative xl:absolute xl:right-4 xl:top-20 z-20">
        <img src={EmojiBag} alt="Emoji Bag" />
      </div>
      <div className="hidden xl:block absolute right-0 top-16 -ml-10 mt-6 z-10">
        <EmojiBadge emoji="star" startColor="red" endColor="yellow-darkest" />
      </div>
      <div className="hidden xl:block absolute right-80 bottom-30 mr-10 -mt-10 z-30">
        <EmojiBadge emoji="brain" startColor="red" endColor="yellow-darkest" />
      </div>
      <div className="hidden xl:block absolute left-40 bottom-16 z-30">
        <EmojiBadge emoji="cool" startColor="red" endColor="yellow-darkest" />
      </div>
    </div>
  )
}
