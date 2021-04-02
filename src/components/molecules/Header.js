import { Button } from "../atoms"
import logo from "../../assets/img/logo.png"

export const Header = () => {
  const navs = [
    {
      name: "PACKS",
      url: "#",
    },
    {
      name: "ARTISE COLLABS",
      url: "#",
    },
    {
      name: "DAILY DROPS",
      url: "#",
    },
    {
      name: "MARKETPLACE",
      url: "#",
    },
    {
      name: "EMOJI® ICONS",
      url: "#",
    },
    {
      name: "TOP COLLECTORS",
      url: "#",
    },
    {
      name: "BINGO",
      url: "#",
    },
  ]
  return (
    <div className="w-full flex justify-center">
      <div className="mt-3 flex items-center">
        <div className="mr-16 self-start">
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex items-center">
          {navs.map((nav) => (
            <li key={nav.name} className="mr-12">
              <a href={nav.url}>{nav.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <Button title="SIGN UP" classes="mr-8 text-red-lightest" small />
          <Button title="LOG IN" classes="text-red-lightest font-semibold" />
        </div>
      </div>
    </div>
  )
}
