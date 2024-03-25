import { ChevronDown, UserRound } from 'lucide-react'
import { Button } from '../button'

import { SubMenuJogos } from './sub-menu-jogos'
import { SubMenuEsportes } from './sub-menu-esportes'
import BlizzardLogo from '../../assets/blizzard.png'

export function MenuWeb() {
  return (
    <nav className="flex items-center justify-center gap-16 xl:gap-56 px-8 pt-8 pb-4 w-full m-auto">
      <div className="flex items-center gap-36">
        <a href="#">
          <img src={BlizzardLogo} alt="Logo da Blizzard" />
        </a>
        <ul className="hidden lg:flex gap-8">
          <li className="group">
            <a className="flex gap-2" href="#">
              Jogos
              <span className="transform transition-transform duration-300 group-hover:-rotate-180 group-hover:text-[#00aeff]">
                <ChevronDown />
              </span>
            </a>
            <SubMenuJogos />
          </li>
          <li className="group">
            <a className="flex gap-2" href="#">
              Esportes
              <span className="transform transition-transform duration-300 group-hover:-rotate-180 group-hover:text-[#00aeff]">
                <ChevronDown />
              </span>
            </a>
            <SubMenuEsportes />
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
        </ul>
      </div>
      <div className="flex gap-4">
        <Button
          backgroundColor="transparent"
          content="Criar conta"
          width={116}
        />
        <Button
          backgroundColor="#00AEFF"
          content="Logar"
          width={120}
          icon={<UserRound />}
          modal={true}
        />
      </div>
    </nav>
  )
}
