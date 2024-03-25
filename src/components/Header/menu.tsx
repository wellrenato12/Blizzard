import { MenuWeb } from './menu-web'
import { MenuMobile } from './menu-mobile'
import { useCalcWidth } from '../../hooks/useCalcWidth'

export function Menu() {
  const windowWidth = useCalcWidth()
  const componentRender = windowWidth > 1100 ? <MenuWeb /> : <MenuMobile />

  return (
    <div className="relative z-20">
      {componentRender}
      <hr className="w-full border-t border-white/25 mt-4" />{' '}
    </div>
  )
}
