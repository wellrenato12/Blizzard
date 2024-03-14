import Game1 from '../assets/game-1.png'
import Game2 from '../assets/game-2.png'
import Game3 from '../assets/game-3.png'
import Game4 from '../assets/game-4.png'
import Game5 from '../assets/game-5.png'
import DiabloLogo from '../assets/diablo-logo.png'
import DiabloAnimationCover from '../assets/diablo-animation-cover.png'
import DiabloAnimationGif from '../assets/diablo-animation.gif'
import HearthstoneLogo from '../assets/hearthstone-logo.png'
import HearthstoneAnimationCover from '../assets/hearthstone-animation-cover.png'
import HearthstoneAnimationGif from '../assets/hearthstone-animation.gif'
import WowLogo from '../assets/wow-logo.png'
import WowAnimationCover from '../assets/wow-animation-cover.png'
import WowAnimationGif from '../assets/wow-animation.gif'
import { Menu } from './menu'
import { Button } from './button'
import { Play } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export function Header() {
  const [selectedGame, setSelectedGame] = useState('diablo')
  const games = useMemo(() => ['diablo', 'hearthstone', 'wow'], [])

  function handleChangeGame(game: string) {
    setSelectedGame(game)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = games.indexOf(selectedGame)
      const nextIndex = (currentIndex + 1) % games.length
      setSelectedGame(games[nextIndex])
    }, 8000)

    return () => clearInterval(intervalId)
  }, [games, selectedGame])

  return (
    <div
      className={`${selectedGame === 'diablo' && 'bg-diabloImage'} ${selectedGame === 'hearthstone' && 'bg-hearthstoneImage'} ${selectedGame === 'wow' && 'bg-wowImage'} h-[736px] bg-no-repeat bg-cover`}
    >
      <Menu />
      <div className="flex items-center justify-between max-w-[1280px] my-20 m-auto">
        <div className="flex items-center gap-20">
          <div className="flex flex-col gap-4">
            <img
              src={Game1}
              className={`${selectedGame === 'diablo' ? 'grayscale-0' : 'grayscale'} filter hover:grayscale-0 cursor-pointer`}
              alt="Game 1"
              onClick={() => handleChangeGame('diablo')}
            />
            <img
              src={Game2}
              className={`${selectedGame === 'hearthstone' ? 'grayscale-0' : 'grayscale'} filter hover:grayscale-0 cursor-pointer`}
              alt="Game 2"
              onClick={() => handleChangeGame('hearthstone')}
            />
            <img
              src={Game3}
              className={`${selectedGame === 'wow' ? 'grayscale-0' : 'grayscale'} filter hover:grayscale-0 cursor-pointer`}
              alt="Game 3"
              onClick={() => handleChangeGame('wow')}
            />
            <img
              src={Game4}
              className="grayscale filter hover:grayscale-0 cursor-pointer"
              alt="Game 4"
              onClick={() => handleChangeGame}
            />
            <img
              src={Game5}
              className="grayscale filter hover:grayscale-0 cursor-pointer"
              alt="Game 5"
              onClick={() => handleChangeGame}
            />
          </div>
          <div className="flex flex-col items-start gap-4 w-[600px]">
            {selectedGame === 'diablo' && (
              <h1 className="text-[64px] font-bold leading-tight">
                Retorne à escuridão com o game Diablo IV
              </h1>
            )}
            {selectedGame === 'hearthstone' && (
              <h1 className="text-[64px] font-bold leading-tight">
                Novo pacote de expansão de Hearthstone
              </h1>
            )}
            {selectedGame === 'wow' && (
              <h1 className="text-[64px] font-bold leading-tight">
                Desbrave as Terras Sombrias em Shadowlands!
              </h1>
            )}
            <p className="text-[18px]">
              O retorno de Lilith traz uma era de escuridão e sofrimento
            </p>
            {selectedGame === 'diablo' && (
              <Button
                backgroundColor="#00AEFF"
                content="Jogue agora"
                width={168}
              />
            )}
            {selectedGame === 'hearthstone' && (
              <Button
                backgroundColor="#00AEFF"
                content="Reserve agora na pré-venda"
                width={168}
              />
            )}
            {selectedGame === 'wow' && (
              <Button
                backgroundColor="#00AEFF"
                content="Reserve agora na pré-venda"
                width={168}
              />
            )}
          </div>
        </div>
        <div className="w-[300px] h-[300px] flex items-center justify-between">
          <div className="flex flex-col justify-between gap-32">
            {selectedGame === 'diablo' && (
              <img src={DiabloLogo} alt="Logo Diablo" />
            )}
            {selectedGame === 'hearthstone' && (
              <img src={HearthstoneLogo} alt="Logo Hearthstone" />
            )}
            {selectedGame === 'wow' && <img src={WowLogo} alt="Logo Wow" />}
            <div className="flex items-center justify-center relative w-[280px] h-[173px]">
              <p className="absolute right-0 top-[-32px]">ASSISTA O TRAILER</p>
              {selectedGame === 'diablo' && (
                <>
                  <img
                    src={DiabloAnimationCover}
                    className="w-full h-full absolute inset-0"
                    alt=""
                  />
                  <img
                    src={DiabloAnimationGif}
                    className="w-full h-full absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    alt=""
                  />
                </>
              )}
              {selectedGame === 'hearthstone' && (
                <>
                  <img
                    src={HearthstoneAnimationCover}
                    className="w-full h-full absolute inset-0"
                    alt=""
                  />
                  <img
                    src={HearthstoneAnimationGif}
                    className="w-full h-full absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    alt=""
                  />
                </>
              )}
              {selectedGame === 'wow' && (
                <>
                  <img
                    src={WowAnimationCover}
                    className="w-full h-full absolute inset-0"
                    alt=""
                  />
                  <img
                    src={WowAnimationGif}
                    className="w-full h-full absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    alt=""
                  />
                </>
              )}
              <button className="absolute p-2 rounded-full bg-black z-10 pointer-events-none">
                <Play className="text-[#00aeff] inset-0 z-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
