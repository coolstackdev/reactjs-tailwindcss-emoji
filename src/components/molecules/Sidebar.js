/* eslint-disable */
import PropTypes from "prop-types"
import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg"

export const Sidebar = ({ onClose }) => {
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
    <div className="w-screen h-screen overflow-hidden fixed top-0 left-0 z-50 bg-white">
      <div className="relative">
        <ul className="items-center flex-col pt-10">
          {navs.map((nav) => (
            <li
              key={nav.name}
              className="m-10 font-sans text-2xl text-black cursor-pointer text-center"
            >
              <a href={nav.url}>{nav.name}</a>
            </li>
          ))}
        </ul>
        <div onClick={onClose}>
          <CloseIcon className="text-black absolute right-10 top-10 w-10 h-10" />
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  onClose: PropTypes.func,
}
