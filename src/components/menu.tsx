import { ChevronDown, UserRound } from 'lucide-react'
import BlizzardLogo from '../assets/blizzard.png'
import { Button } from './button'

export function Menu() {
  return (
    <>
      <nav className="flex justify-between max-w-[1280px] h-[96px] m-auto">
        <div className="flex items-center gap-12">
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
            height={41}
            width={112}
          />
          <Button
            backgroundColor="#00AEFF"
            content="Logar"
            height={41}
            width={116}
            icon={<UserRound />}
          />
        </div>
      </nav>
      <hr className="w-full border-t border-white/25 mt-4" />{' '}
    </>
  )
}
