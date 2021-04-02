import React, { useState } from "react"
import moment from "moment"
import momentPropTypes from "react-moment-proptypes"

export const CountdownTimer = ({ closeDateTime }) => {
  const [hours, setHours] = useState(0)
  const [mins, setMins] = useState(0)
  const [secs, setSecs] = useState(0)

  const calcTimeDifference = () => {
    const duration = moment(closeDateTime).diff(moment())
    setHours(moment.utc(duration).format("HH"))
    setMins(moment.utc(duration).format("mm"))
    setSecs(moment.utc(duration).format("ss"))
  }

  setInterval(() => {
    calcTimeDifference()
  }, 1000)

  return (
    <div className="flex items-center">
      <div className="w-20 xl:w-32 flex-col items-center justify-center border-r-4 border-gray-light px-4">
        <p className="heading-4 xl:heading-3 text-red-lightest text-center">
          {hours}
        </p>
        <p className="title-4 xl:title-3 text-black text-center">hours</p>
      </div>
      <div className="w-20 xl:w-32 flex-col items-center justify-center border-r-4 border-gray-light px-4">
        <p className="heading-4 xl:heading-3 text-red-lightest text-center">
          {mins}
        </p>
        <p className="title-4 xl:title-3 text-black text-center">mins</p>
      </div>
      <div className="w-20 xl:w-32 flex-col items-center justify-center px-4">
        <p className="heading-4 xl:heading-3 text-red-lightest text-center">
          {secs}
        </p>
        <p className="title-4 xl:title-3 text-black text-center">secs</p>
      </div>
    </div>
  )
}

CountdownTimer.propTypes = {
  closeDateTime: momentPropTypes.momentObj,
}
