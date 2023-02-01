import React, { useEffect } from "react"

const Alert = (obj) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      obj.handleAlert()
    }, 2000)
    return () => clearTimeout(timer)
  }, [obj.list.list])

  return <p className={`alert alert-${obj.type}`}>{obj.msg}</p>
}

export default Alert
