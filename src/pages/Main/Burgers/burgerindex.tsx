import { useEffect, useState, useContext } from "react";
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { getBurgers } from "../../../services/api";
import { SnackData } from "../../../interfaces/SnackDatas";
import { SnackContext } from "../../../App";

export default function Burgers(){
  // const [burgers, setBurgers] = useState<SnackData[]>([])

  // useEffect(() => {
  //   ;(async () => {
  //     const burgerRequest = await getBurgers()
  //     setBurgers(burgerRequest.data)
  //   })()
  // }, [])

  const {burgers} = useContext(SnackContext)

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores Hamburgueres!"/>
      <SnackTitle>Hambúrgures</SnackTitle>
      <Snacks snacks={burgers}/>
    </>
  )
}
