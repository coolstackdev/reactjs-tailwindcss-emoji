import { Button } from "../atoms/Button"
import emoji1 from "../../assets/img/a-1.png"
import emoji2 from "../../assets/img/a-2.png"
import emoji3 from "../../assets/img/a-3.png"

export const Series = () => {
  const discoverMore = () => {
    console.log("discover more")
  }
  return (
    <div className="flex items-center px-6 xl:px-32 py-4 xl:py-10 bg-gradient-to-br from-pink-dark to-yellow-dark rounded-xl">
      <div className="flex-col w-full xl:w-2/3">
        <p className="text-yellow-lightest subheading-4 xl:heading-5 mb-3">
          SERIES 1
        </p>
        <p className="text-white title-3 xl:title-2 mb-6">
          Follow the guide to complete your series. View the complete set for
          series 1.
        </p>
        <div>
          <Button
            secondary
            small
            title="DISCOVER EMOJI ICONS"
            onClick={discoverMore}
          />
        </div>
      </div>
      <div className="hidden xl:block relative h-60 w-96">
        <img
          className="absolute top-0 right-0 -mt-10"
          src={emoji1}
          alt="emoji-1"
        />
        <img
          className="absolute top-0 left-0 -mt-10"
          src={emoji2}
          alt="emoji-1"
        />
        <img
          className="absolute bottom-0 right-16"
          src={emoji3}
          alt="emoji-1"
        />
      </div>
    </div>
  )
}
