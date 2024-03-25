import Blizzard from '../../assets/blizzard.png'
import icone from '../../assets/IconesJogos/icone1.png'

export function CardAllGames() {
  return (
    <div className="border h-[400px] flex flex-col items-center justify-center gap-12">
      <img className="object-cover" src={Blizzard} alt="" />
      {/* <span className="flex gap-3">
        <img src={icone} alt="" />
        Ver todos jogos
      </span> */}
      <a href="#">
        <span className="flex items-center gap-3 hover:text-blue-400 transition-all">
          <img className="w-3 h-3" src={icone} alt="" />
          Ver todos jogos
        </span>
      </a>
    </div>
  )
}
