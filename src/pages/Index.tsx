import theme from '../data/config.json'
import Hero from "../components/Hero"
import Histories from "../components/Histories"
import Houses from "../components/Houses"
import data from "../data/houses.json"
import dataInmobiliaria from "../data/inmobiliaria.json"
import { useEffect, useState } from "react"
import type { House } from "../types/House"
import { getInitialHouses } from '../utils/getInitialHouses'

export default function Index() {
  const [houses, setHouses] = useState<House[]>([]);

useEffect(() => {
  setHouses(getInitialHouses());
}, []);

  useEffect(() => {
    const stored = localStorage.getItem("houses")
    setHouses(stored ? JSON.parse(stored) : data)
  }, [])

  return (
    <section
      className="w-full h-full"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        fontFamily: theme.fontBody
      }}
    >
      <Hero  settings={dataInmobiliaria}  />
      <Histories />
      <Houses houses={houses} />
    </section>
  )
}
