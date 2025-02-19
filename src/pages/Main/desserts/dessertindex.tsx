import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import { SnackTitle } from "../../../components/SnackTitle";
import { getIceCreams } from "../../../services/api";
import { Snacks } from "../../../components/Snacks";

export default function Sobremesas(){
  const [desserts, setDesserts] = useState([])

    useEffect(() => {
      ;(async () => {
        const dessertsRequest = await getIceCreams()
        setDesserts(dessertsRequest.data)
      })()
    }, [])

  return (
    <>
      <Head title="SobreMesas" description="Nossas melhores Sobremesas!"/>
      <SnackTitle>SobreMesas</SnackTitle>
      <Snacks snacks={desserts}/>
    </>
  )
}
