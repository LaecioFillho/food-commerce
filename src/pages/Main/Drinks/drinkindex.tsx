import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { getDrinks, getIceCreams } from "../../../services/api";
import { Snacks } from "../../../components/Snacks";
import { SnackData } from "../../../interfaces/SnackDatas";

export default function Drinks(){
  const [drinks, setDrinks] = useState<SnackData[]>([])

      useEffect(() => {
        ;(async () => {
          const drinksRequest = await getDrinks()
          setDrinks(drinksRequest.data)
        })()
      }, [])

  return (
    <>
      <Head title="Drinks" description="Nossos melhores Drinks!"/>
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks}/>
    </>
  )
}
