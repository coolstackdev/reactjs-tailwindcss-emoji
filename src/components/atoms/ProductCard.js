import PropTypes from "prop-types"
import { Button } from "./Button"
import Product1 from "../../assets/img/p-1.png"
import Product2 from "../../assets/img/p-2.png"
import Product3 from "../../assets/img/p-3.png"

export const ProductCard = ({ product, price }) => {
  let selectedProduct
  switch (product) {
    case "common":
      selectedProduct = Product1
      break
    case "rare":
      selectedProduct = Product2
      break
    case "mind-blowing":
      selectedProduct = Product3
      break
    default:
      selectedProduct = Product1
      break
  }

  const buy = () => {
    console.log("buy: ", product)
  }

  return (
    <div className="inline-block">
      <div className="flex-col items-center justify-center">
        <div className="flex justify-center">
          <img src={selectedProduct} alt="Emoji Product" />
        </div>
        <div className="flex justify-center">
          <Button onClick={buy} primary large title={`Buy Now $${price}`} />
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.string,
  price: PropTypes.number,
}
