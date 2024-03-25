import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import LogoBattleNet from '../../assets/logo-battle.png'
import googleIcon from '../../assets/googleIcon.png'
import appleIcon from '../../assets/appleIcon.png'
import faceIcon from '../../assets/faceIcon.png'

export function Modal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed z-20 w-screen h-screen inset-0 bg-black bg-opacity-85" />
      <Dialog.Content className="bg-bgModal z-20 rounded p-4 fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[696px] h-[600px]">
        <div className="relative pt-12 flex flex-col items-center justify-center gap-4">
          <Dialog.Close className="absolute right-0 top-0">
            <X
              className="text-[#148eff] hover:text-sky-400 transition-all"
              size={32}
            />
          </Dialog.Close>
          <Dialog.Title>
            <img src={LogoBattleNet} alt="" />
          </Dialog.Title>
          <input
            className="rounded px-4 w-[426px] h-[48px] mt-6"
            type="text"
            placeholder="E-mail ou telefone"
          />
          <input
            className="rounded px-4 w-[426px] h-[48px]"
            type="password"
            placeholder="Senha"
          />
          <button className="rounded mt-4 mb-8 text-white font-semibold w-[426px] h-[48px] bg-[#00aeff] hover:bg-sky-400 transition-all">
            Conectar-se
          </button>
          <p className="text-white">ou conecte-se com</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <a
              className="bg-white rounded p-3 hover:bg-[#00aeff] transition-all"
              href="#"
            >
              <img src={googleIcon} alt="ícone Google" />
            </a>
            <a
              className="bg-white rounded p-3 hover:bg-[#00aeff] transition-all"
              href="#"
            >
              <img src={appleIcon} alt="ícone Apple" />
            </a>
            <a
              className="bg-white rounded p-3 hover:bg-[#00aeff] transition-all"
              href="#"
            >
              <img src={faceIcon} alt="ícone Facebook" />
            </a>
          </div>
          <span className="text-white">
            <a
              className="text-[#00aeff] underline hover:text-sky-400 transition-all"
              href="#"
            >
              Crie uma conta{' '}
            </a>
            Battle.net de graça
          </span>
          <a
            className="text-[#00aeff] underline hover:text-sky-400 transition-all"
            href="#"
          >
            Não consegue logar?
          </a>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
