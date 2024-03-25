import { useEffect, useState } from 'react'
import { Card } from './card'
import { CardAllGames } from './cardAllGames'

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
    <div className="grid grid-cols-4 gap-8">
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
      <CardAllGames />
    </div>
  )
}
