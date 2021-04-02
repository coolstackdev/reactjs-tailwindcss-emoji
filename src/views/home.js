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
    <div className="my-10 xl:my-32">
      <div className="flex flex-col xl:flex-row items-center">
        <div className="flex-col items-center pl-4 mr-4 mb-4 xl:pl-20 xl:mr-10 xl:mb-0">
          <p className="text-red title-5 xl:title-3">
            CLASSIC GOOD VIBES emoji® SERIES 1
          </p>
          <p className="heading-5 xl:heading-4">Next limited edition drop</p>
        </div>
        <div className="flex items-center justify-center xl:block">
          <CountdownTimer closeDateTime={closeTime2} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.name} product={p.name} price={p.price} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="w-full px-10 pb-20 xl:px-56 xl:pb-32">
      <HeroSection />
      <FeaturedProduct closeDateTime={closeTime1} />
      <Products />
      <Series />
    </div>
  )
}
