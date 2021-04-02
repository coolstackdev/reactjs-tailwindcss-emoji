import moment from "moment"
import { CountdownTimer, ProductCard } from "../components/atoms"
import { FeaturedProduct, HeroSection, Series } from "../components/molecules"

export const Home = () => {
  const closeTime1 = moment().add(7400, "seconds")
  const closeTime2 = moment().add(10000, "seconds")

  const products = [
    {
      name: "common",
      price: 7,
    },
    {
      name: "rare",
      price: 14,
    },
    {
      name: "mind-blowing",
      price: 49,
    },
  ]

  const Products = () => (
    <div className="my-32">
      <div className="flex items-center">
        <div className="flex-col items-center pl-20 mr-10">
          <p className="text-red title-3">CLASSIC GOOD VIBES emoji® SERIES 1</p>
          <p className="heading-4">Next limited edition drop</p>
        </div>
        <div>
          <CountdownTimer closeDateTime={closeTime2} />
        </div>
      </div>
      <div className="flex">
        {products.map((p) => (
          <ProductCard key={p.name} product={p.name} price={p.price} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full px-56 pb-32">
      <HeroSection />
      <FeaturedProduct closeDateTime={closeTime1} />
      <Products />
      <Series />
    </div>
  )
}
