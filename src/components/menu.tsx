import { useEffect, useState } from 'react'
import { MenuWeb } from './menu-web'
import { MenuMobile } from './menu-mobile'

export function Menu() {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
  })
  const componentRender = pageSize.width > 1280 ? <MenuWeb /> : <MenuMobile />

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

  return (
    <>
      {componentRender}
      <hr className="w-full border-t border-white/25 mt-4" />{' '}
    </>
  )
}
