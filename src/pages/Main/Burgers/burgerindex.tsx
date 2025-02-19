import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { getBurgers } from "../../../services/api";

export default function Burgers(){
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    ;(async () => {
      const burgerRequest = await getBurgers()
      setBurgers(burgerRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores Hamburgueres!"/>
      <SnackTitle>Hambúrgures</SnackTitle>
      <Snacks snacks={burgers}/>
    </>
  )
}
