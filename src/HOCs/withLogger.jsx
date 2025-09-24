import React, { useEffect, useState } from 'react'

export const withLogger = (WrappedComponent) => {
  console.log('some logic')

  return (props) => {
    const [logged, setLogged] = useState(false)

    console.log(logged)

    useEffect(() => {
      setLogged(true)
    }, [])
    return <WrappedComponent {...props} />
  }
}
