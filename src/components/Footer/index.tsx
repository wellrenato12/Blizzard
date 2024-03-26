import battleNet from '../../assets/logo-battle.png'
import icone1 from '../../assets/IconesFooter/icone1.png'
import icone2 from '../../assets/IconesFooter/icone2.png'
import icone3 from '../../assets/IconesFooter/icone3.png'
import cel from '../../assets/IconesFooter/cel.png'
import windows from '../../assets/IconesFooter/windows.png'
import appMini from '../../assets/app-mini.png'
import app from '../../assets/app.png'
import { Button } from '../button'

export function Footer() {
  return (
    <footer className="flex flex-col 2xl:flex-row gap-12 items-center justify-center bg-bgFooter bg-no-repeat bg-cover overflow-hidden px-8 py-16">
      <div className="flex flex-col">
        <img className="h-[16px] w-[133px]" src={battleNet} alt="" />
        <h2 className="text-3xl font-bold mt-4">Baixe agora o battle.net</h2>
        <div className="flex flex-col gap-6 py-8">
          <span className="flex gap-2">
            <img className="w-[18px] h-[18px]" src={icone1} alt="" />
            Seus jogos em um só lugar
          </span>
          <span className="flex gap-2">
            <img className="w-[18px] h-[18px]" src={icone2} alt="" />
            Conecte-se aos seus amigos
          </span>
          <span className="flex gap-2">
            <img className="w-[18px] h-[18px]" src={icone3} alt="" />
            Compre jogos e itens digitais
          </span>
        </div>
        <Button
          backgroundColor="#00AEFF"
          content="Baixar para o MacOS"
          width={280}
          icon={windows}
        />
        <span className="flex mt-12">
          <img className="pr-3" src={cel} alt="" />
          <div>
            Também disponível como <br />
            <a href="#">
              <u className="hover:text-[#00aeff] transition-all">
                aplicativo móvel
              </u>
            </a>
          </div>
        </span>
      </div>
      <div className="relative">
        <img src={app} alt="" />
        <img className="absolute top-1/2 left-1/4" src={appMini} alt="" />
      </div>
    </footer>
  )
}
