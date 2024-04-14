import { useState } from "react"
import { Container } from "./sidebarstyles"
import { NavLink } from "react-router-dom"

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
            <NavLink to="/">
              <BurgerIcon></BurgerIcon>
              <span>Hambúrgueres</span>
            </NavLink>
            <NavLink to="pizzas">
              <PizzaIcon></PizzaIcon>
              <span>Pizzas</span>
            </NavLink>
            <NavLink to="bebidas">
              <SodaPopIcon></SodaPopIcon>
              <span>Bebidas</span>
            </NavLink>
            <NavLink to="sobremesas">
              <IceCreamIcon></IceCreamIcon>
              <span>Sobremesas</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>

  )
}
