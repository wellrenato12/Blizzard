import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './global.css'

export function App() {
  return (
    <div className="bg-gray-950 text-white font-poppins">
      <Header />
      <Cards />
      <Footer />
    </div>
  )
}
