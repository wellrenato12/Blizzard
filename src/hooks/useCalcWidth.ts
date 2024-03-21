import { useState, useEffect } from 'react'

export const useCalcWidth = () => {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
  })

  useEffect(() => {
    const handleSize = () => {
      setPageSize({
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleSize)

    handleSize()

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  return pageSize.width
}
