import { currencyFormat } from "../../helpers/currencyFormat";
import { SkeletonSnacks } from "../SkeletonSnacks";
import { Container } from "./styles"
import { FaCartPlus } from "react-icons/fa";

interface SnacksProps {
  snacks: any[]
}

export function Snacks({snacks}: SnacksProps){

  return(
    <Container>
      {
      !snacks.length ? [1,2,3,4].map((n) => <SkeletonSnacks key={n}/>) :
      (snacks.map((snack) => (
        <div key={snack.id} className="snack">
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name}></img>
          <p>{snack.description}</p>
          <div>
            <strong>{currencyFormat(snack.price)}</strong>
            <button type="button">
              <FaCartPlus fontSize={20}/>
            </button>
          </div>
        </div>
      )))}
    </Container>
  )
}
