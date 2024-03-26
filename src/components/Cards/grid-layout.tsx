import { useEffect, useState } from 'react'
import { Card } from './card'
import Blizzard from '../../assets/blizzard.png'
import icone from '../../assets/IconesJogos/icone1.png'

interface Data {
  name: string
  category: string
  image: string
  logo: string
}

export function GridLayout() {
  const [data, setData] = useState<Data[]>([])

  function fetchData() {
    fetch('https://api.brchallenges.com/api/blizzard/games')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((item) => {
          return (
            <Card
              key={item.name}
              name={item.name}
              category={item.category}
              image={item.image}
              logo={item.logo}
            />
          )
        })}
        <div className="border h-[400px] flex flex-col items-center justify-center gap-12">
          <img className="object-cover" src={Blizzard} alt="" />
          <a href="#">
            <span className="flex items-center gap-3 hover:text-blue-400 transition-all">
              <img className="w-3 h-3" src={icone} alt="" />
              Ver todos jogos
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
