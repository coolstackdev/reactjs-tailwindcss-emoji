import PropTypes from "prop-types"
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
    <div className="w-full flex items-center">
      <div>
        <img src={FeaturedEmoji} alt="Featured Emoji" />
      </div>
      <div className="-mt-6">
        <CountdownTimer closeDateTime={closeDateTime} />
        <div className="ml-6 mt-10">
          <p className="title-3 text-red">DAILY DROP</p>
          <p className="subheading-2 text-black">St. Patrick’s Day emoji®</p>
          <p className="body-1 text-black w-4/5 my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
            commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor
            sed
          </p>
        </div>
        <div className="flex ml-6 mt-6">
          <Button
            primary
            large
            title="Buy Emoji $3"
            onClick={buyEmoji}
            classes="mr-8"
          />
          <Button large title="View Past Drops" onClick={viewPastDrops} />
        </div>
      </div>
    </div>
  )
}

FeaturedProduct.propTypes = {
  closeDateTime: PropTypes.instanceOf(Date),
}
