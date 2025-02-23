import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { getPizzas } from "../../../services/api";
import { Snacks } from "../../../components/Snacks";
import { SnackData } from "../../../interfaces/SnackDatas";

export default function Pizzas(){
  const [pizzas, setPizzas] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      const pizzasRequest = await getPizzas()
      setPizzas(pizzasRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title="Pizzas" description="Nossas melhores Massas!"/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}/>
    </>
  )
}
