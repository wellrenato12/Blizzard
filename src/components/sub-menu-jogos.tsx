import diablo2 from '../assets/IconesJogos/diablo-2.png'
import overwatch from '../assets/IconesJogos/overwatch-2.png'
import worldOfWarcraft from '../assets/IconesJogos/world-of-warcraft.png'
import hearthstone from '../assets/IconesJogos/hearthstone.png'
import heroesTheStorm from '../assets/IconesJogos/heroes-of-the-storm.png'
import warcraft3 from '../assets/IconesJogos/warcraft-3.png'
import diablo4 from '../assets/IconesJogos/diablo-4.png'
import diabloImmortal from '../assets/IconesJogos/diablo-immortal.png'
import diablo3 from '../assets/IconesJogos/diablo-3.png'
import starcraft2 from '../assets/IconesJogos/starcraft-2.png'
import starcraft from '../assets/IconesJogos/starcraft.png'
import arcadeDaBlizzard from '../assets/IconesJogos/arcade-da-blizzard.png'
import icone1 from '../assets/IconesJogos/icone1.png'
import icone2 from '../assets/IconesJogos/icone2.png'
import icone3 from '../assets/IconesJogos/icone3.png'
import icone4 from '../assets/IconesJogos/icone4.png'

export function SubMenuJogos() {
  return (
    <div className="hidden opacity-0 group-hover:opacity-95 group-hover:flex flex-col bg-gradient-to-b from-black to-gray-900 absolute w-screen top-0 pt-36 left-0 p-8 z-20 transition-opacity duration-300 animate-slideIn">
      <ul className="flex flex-col gap-20 items-center">
        <div className="flex gap-20">
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={diablo2} alt="" />
              Diablo&#174; II ressurected
            </a>
          </li>
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={overwatch} alt="" />
              Overwatch&#174; 2
            </a>
          </li>
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={worldOfWarcraft} alt="" />
              World of Warcraft&#174;
            </a>
          </li>
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={hearthstone} alt="" />
              Hearthstone&#174;
            </a>
          </li>
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={heroesTheStorm} alt="" />
              Heroes of the storm&#174;
            </a>
          </li>
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={warcraft3} alt="" />
              Warcraft&#174; III Reforged
            </a>
          </li>
        </div>
        <div className="flex gap-20">
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={diablo4} alt="" />
              Diablo&#174; IV
            </a>
          </li>
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={diabloImmortal} alt="" />
              Diablo&#174; Immortal
            </a>
          </li>
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={diablo3} alt="" />
              Diablo&#174; III
            </a>
          </li>
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={starcraft2} alt="" />
              SratCraft&#174; II
            </a>
          </li>
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={starcraft} alt="" />
              StarCraft&#174; Remastered
            </a>
          </li>
          <li className="w-[96px]">
            <a className="flex flex-col items-center text-center" href="">
              <img src={arcadeDaBlizzard} alt="" />
              Arcade da Blizzard&#174;
            </a>
          </li>
        </div>
      </ul>
      <div className="flex items-center justify-center gap-12 pt-20">
        <span className="flex items-center gap-2">
          <img className="w-3 h-3" src={icone1} alt="" />
          Ver todos jogos
        </span>
        <span className="flex items-center gap-2">
          <img src={icone2} alt="" />
          Aplicativo Battle.net
        </span>
        <span className="flex items-center gap-2">
          <img src={icone3} alt="" />
          Donwloads
        </span>
        <span className="flex items-center gap-2">
          <img src={icone4} alt="" />
          Fóruns dos jogos
        </span>
      </div>
    </div>
  )
}
