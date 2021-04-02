import PropTypes from "prop-types"
import cx from "classnames"

export const Button = ({
  classes,
  primary,
  secondary,
  flat,
  rounded,
  tertiary,
  large,
  medium,
  small,
  title,
  disabled,
  onClick,
}) => (
  <div className="inline-block">
    <button
      className={cx(classes, {
        "flex justify-center items-center focus:outline-none": true,
        "bg-red-lightest text-white": primary,
        "bg-yellow-lightest text-black-dark": secondary,
        "bg-transparent shadow-none": flat, // should define: text-color, text-size
        "rounded-btn-full": rounded,
        "bg-white border": tertiary, // should be given: border-color, text-color, text-size
        "subheading-3 px-4 py-3 min-w-275px rounded-btn-md shadow": large,
        "subheading-6 px-4 py-3 min-w-275px rounded-btn-sm shadow-sm": medium,
        "title-4 px-4 py-2 min-w-128px rounded-md shadow-sm": small,
      })}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  </div>
)

Button.propTypes = {
  classes: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  flat: PropTypes.bool,
  rounded: PropTypes.bool,
  tertiary: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}
