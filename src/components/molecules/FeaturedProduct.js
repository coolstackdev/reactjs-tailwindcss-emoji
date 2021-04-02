import momentPropTypes from "react-moment-proptypes"
import { Button, CountdownTimer } from "../atoms"
import FeaturedEmoji from "../../assets/img/b-2.png"

export const FeaturedProduct = ({ closeDateTime }) => {
  const buyEmoji = () => {
    console.log("buy emoji")
  }
  const viewPastDrops = () => {
    console.log("view past drops")
  }
  return (
    <div className="w-full flex flex-col xl:flex-row items-center">
      <div>
        <img src={FeaturedEmoji} alt="Featured Emoji" />
      </div>
      <div className="-mt-6">
        <CountdownTimer closeDateTime={closeDateTime} />
        <div className="ml-6 mt-10">
          <p className="title-4 xl:title-3 text-red">DAILY DROP</p>
          <p className="heading-4 xl:subheading-2 text-black">
            St. Patrick’s Day emoji®
          </p>
          <p className="body-2 xl:body-1 text-black w-4/5 my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
            commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor
            sed
          </p>
        </div>
        <div className="flex-col xl:flex-row ml-6 mt-6">
          <Button
            primary
            large
            title="Buy Emoji $3"
            onClick={buyEmoji}
            classes="mb-4 xl:mr-8 xl:mb-0"
          />
          <Button large title="View Past Drops" onClick={viewPastDrops} />
        </div>
      </div>
    </div>
  )
}

FeaturedProduct.propTypes = {
  closeDateTime: momentPropTypes.momentObj,
}
