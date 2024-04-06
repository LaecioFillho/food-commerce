import { useState } from "react"
import { Container } from "./sidebarstyles"

import { ReactComponent as BurgerIcon} from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon} from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon} from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon} from '../../assets/ice-cream.svg'
import menu from '../../assets/menu.svg'

export function SideBar() {

  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu(){
    setMenuOpen(!menuOpen)
  }

  return (

    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={toggleMenu}>
        <img src={menu} alt="Icone de Menu" />
      </button>
      <nav>
        <ul>
          <li>
            <a href="#" className="active">
              <BurgerIcon></BurgerIcon>
              <span>Hambúrgueres</span>
            </a>
            <a href="#">
              <PizzaIcon></PizzaIcon>
              <span>Pizzas</span>
            </a>
            <a href="#">
              <SodaPopIcon></SodaPopIcon>
              <span>Bebidas</span>
            </a>
            <a href="#">
              <IceCreamIcon></IceCreamIcon>
              <span>Sobremesas</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>

  )
}
