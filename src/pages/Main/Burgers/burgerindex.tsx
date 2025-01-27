import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";

export default function Burgers(){
  const data = [
    {
      id: 1,
      snack: "burguer",
      name: "Mega",
      description: "O artesanal mais lindo e saboroso que você irá ver!",
      price: 10.00,
      image: "https://images.pexels.com/photos/15141034/pexels-photo-15141034/free-photo-of-americano-americana-comida-rapida-fast-food.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    
    {
    id: 2,
      snack: "burguer",
      name: "Mega",
      description: "O artesanal mais lindo e saboroso que você irá ver!",
      price: 10.00,
      image: "https://i.imgur.com/B4J04AJ.jpg",
    },
  ]

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores Hamburgueres!"/>
      <SnackTitle>Hambúrgures</SnackTitle>
      <Snacks snacks={data}/>
    </>
  )
}
