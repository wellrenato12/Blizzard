import image1 from '../assets/IconesEsportes/image1.png'
import image2 from '../assets/IconesEsportes/image2.png'
import image3 from '../assets/IconesEsportes/image3.png'
import image4 from '../assets/IconesEsportes/image4.png'
import image5 from '../assets/IconesEsportes/image5.png'
import torneio from '../assets/IconesEsportes/icon-torneio.png'

export function SubMenuEsportes() {
  return (
    <div className="hidden opacity-0 group-hover:opacity-95 group-hover:flex flex-col bg-gradient-to-b from-black to-gray-900 absolute w-screen top-0 pt-36 left-0 p-8 z-20 transition-opacity duration-300 animate-slideIn">
      <ul className="flex flex-col gap-20 items-center">
        <div className="flex gap-20">
          <li className="text-center w-[150px]">
            <a href="">
              <img src={image1} alt="" />
              Diablo&#174; II ressurected
            </a>
          </li>
          <li className="text-center w-[150px]">
            <a href="">
              <img src={image2} alt="" />
              Overwatch&#174; 2
            </a>
          </li>
          <li className="text-center w-[150px]">
            <a href="">
              <img src={image3} alt="" />
              World of Warcraft&#174;
            </a>
          </li>
          <li className="text-center w-[150px]">
            <a href="">
              <img src={image4} alt="" />
              Hearthstone&#174;
            </a>
          </li>
          <li className="text-center w-[150px]">
            <a href="">
              <img src={image5} alt="" />
              Heroes of the storm&#174;
            </a>
          </li>
        </div>
      </ul>
      <div className="flex items-center justify-center gap-12 pt-20">
        <span className="flex items-center gap-2">
          <img className="w-3 h-3" src={torneio} alt="" />
          Torneios da comunidade
        </span>
      </div>
    </div>
  )
}
