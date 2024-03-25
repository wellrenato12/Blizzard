import { Menu, UserRound, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../button'
import { useCalcWidth } from '../../hooks/useCalcWidth'
import BlizzardLogo from '../../assets/blizzard.png'

export function MenuMobile() {
  const [open, setOpen] = useState(false)
  const windowWidth = useCalcWidth()

  return (
    <nav className="flex items-center justify-between relative px-8 pt-8 pb-4 max-w-[1280px] m-auto">
      <a href="">
        <img src={BlizzardLogo} alt="" />
      </a>

      {windowWidth > 768 && (
        <div className="flex gap-4 absolute left-1/2">
          <Button
            backgroundColor="transparent"
            content="Criar conta"
            width={116}
          />
          <Button
            backgroundColor="#00AEFF"
            content="Logar"
            width={116}
            icon={<UserRound />}
            modal={true}
          />
        </div>
      )}

      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-18 cursor-pointer"
      >
        {open ? (
          <X className="w-[32px] h-[32px]" />
        ) : (
          <Menu className="w-[32px] h-[32px]" />
        )}
      </div>

      {/* <ul
        className={`pt-12 pb-4 absolute bg-white z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${
          open ? 'top-0' : 'top-[-490px]'
        }`}
      >
        <li>
          <a className="flex gap-2" href="#">
            Jogos
            <ChevronDown />
          </a>
        </li>
        <li>
          <a className="flex gap-2" href="#">
            Esportes
            <ChevronDown />
          </a>
        </li>
        <li>
          <a href="#">Loja</a>
        </li>
        <li>
          <a href="#">Notícias</a>
        </li>
        <li>
          <a href="#">Suporte</a>
        </li>
      </ul> */}
    </nav>
  )
}
