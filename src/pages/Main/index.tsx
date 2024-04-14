import { Outlet } from 'react-router-dom'
import { SideBar } from '../../components/SideBar/sidbarindex'
import { Container } from './styles'
import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <SideBar></SideBar>
      <section>
        <img className='logo' src={logoImg} />
        <Outlet></Outlet>
      </section>
    </Container>
  )
}
