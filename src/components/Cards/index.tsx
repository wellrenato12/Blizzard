import logoCard from '../../assets/IconesCard/iconLogoCard.png'
import gameCard from '../../assets/IconesCard/GameCard.png'
import xboxCard from '../../assets/IconesCard/xBoxCard.png'
import playstationCard from '../../assets/IconesCard/playstationCard.png'
import icone1 from '../../assets/IconesJogos/icone1.png'
import { GridLayout } from './grid-layout'

export function Cards() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex items-center justify-between py-16">
        <span className="text-sm text-[#8F9199]">GAMES</span>
        <span className="text-2xl">Jogos exclusivos</span>
        <div className="flex gap-8">
          <a href="#">
            <img
              className="opacity-60 hover:opacity-100 transition-all"
              src={logoCard}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="opacity-60 hover:opacity-100 transition-all"
              src={gameCard}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="opacity-60 hover:opacity-100 transition-all"
              src={xboxCard}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="opacity-60 hover:opacity-100 transition-all"
              src={playstationCard}
              alt=""
            />
          </a>
        </div>
        <a href="#">
          <span className="flex items-center gap-3 hover:text-blue-400 transition-all">
            <img className="w-3 h-3" src={icone1} alt="" />
            Ver todos jogos
          </span>
        </a>
      </div>
      <GridLayout />
    </div>
  )
}
