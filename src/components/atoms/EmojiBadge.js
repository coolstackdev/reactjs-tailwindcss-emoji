import PropTypes from "prop-types"
import emoji1 from "../../assets/img/1.png"
import emoji2 from "../../assets/img/2.png"
import emoji3 from "../../assets/img/3.png"

export const EmojiBadge = ({ emoji, startColor, endColor }) => {
  let selectedEmoji
  switch (emoji) {
    case "star":
      selectedEmoji = emoji1
      break
    case "brain":
      selectedEmoji = emoji2
      break
    case "cool":
      selectedEmoji = emoji3
      break
    default:
      selectedEmoji = emoji1
      break
  }

  return (
    <div className="flex items-center justify-center w-269px h-69px rounded-btn-md shadow-md bg-white pl-5 pr-8">
      <div
        className={`w-full h-7px rounded-md bg-gradient-to-r from-${startColor} to-${endColor}`}
      />
      <img src={selectedEmoji} alt="emoji" className="-ml-4" />
    </div>
  )
}

EmojiBadge.propTypes = {
  emoji: PropTypes.string,
  startColor: PropTypes.string,
  endColor: PropTypes.string,
}
