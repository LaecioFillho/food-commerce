import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers/burgerindex'
import PizzasPage from './pages/Main/Pizzas/pizzaindex'
import BebidasPage from './pages/Main/Drinks/drinkindex'
import SobremesasPage from './pages/Main/desserts/dessertindex'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<BurgersPage />} />
        <Route path='/pizzas' element={<PizzasPage />} />
        <Route path='/bebidas' element={<BebidasPage />} />
        <Route path='/sobremesas' element={<SobremesasPage />} />
      </Route>
    </Routes>
  )
}
