import React, { useState } from "react"
import { Button } from "../atoms"
import { Sidebar } from "./Sidebar"
import logo from "../../assets/img/logo.png"
import { ReactComponent as MenuIcon } from "../../assets/svg/menu.svg"

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

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full flex mx-auto">
      <div className="w-full xl:w-1600px mx-auto mt-3 flex items-center justify-around xl:justify-between">
        <div className="mr-16 self-start">
          <img src={logo} alt="logo" className="w-24 xl:w-48" />
        </div>
        <ul className="hidden xl:flex items-center">
          {navs.map((nav) => (
            <li key={nav.name} className="mr-12">
              <a href={nav.url}>{nav.name}</a>
            </li>
          ))}
        </ul>
        <div className="hidden xl:flex items-center">
          <Button title="SIGN UP" classes="mr-8 text-red-lightest" small />
          <Button title="LOG IN" classes="text-red-lightest font-semibold" />
        </div>
        <div>
          <MenuIcon
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex xl:hidden w-10 h-10 cursor-pointer"
          />
        </div>
        {menuOpen && <Sidebar onClose={() => setMenuOpen(!menuOpen)} />}
      </div>
    </div>
  )
}
