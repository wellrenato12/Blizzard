import { ChevronDown, UserRound } from 'lucide-react'
import { Button } from './button'
import BlizzardLogo from '../assets/blizzard.png'

export function MenuWeb() {
  return (
    <nav className="flex items-center justify-between px-8 pt-8 pb-4 max-w-[1280px] m-auto">
      <div className="flex items-center gap-36">
        <a href="#">
          <img src={BlizzardLogo} alt="Logo da Blizzard" />
        </a>
        <ul className="flex gap-8">
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
          width={116}
          icon={<UserRound />}
        />
      </div>
    </nav>
  )
}
