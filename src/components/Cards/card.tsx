interface CardProps {
  name: string
  category: string
  image: string
  logo: string
}

export function Card({ name, category, image, logo }: CardProps) {
  return (
    <div className="relative">
      <a href="#">
        <img
          className="rounded transition-all hover:scale-110 h-[400px]"
          src={image}
          alt=""
        />
        <img
          className="absolute bottom-1/4 right-1/2 translate-x-1/2"
          src={logo}
          alt=""
        />
      </a>
      <div className="flex flex-col gap-3 pt-6">
        <h1 className="text-lg">{name}</h1>
        <h1 className="opacity-60 text-sm">{category}</h1>
      </div>
    </div>
  )
}
