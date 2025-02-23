import { BrowserRouter } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { SnackData } from './interfaces/SnackDatas'
import { getBurgers } from './services/api'

interface SnackContextProps {
  burgers: SnackData[]
  // pizzas: SnackData[]
  // drinks: SnackData[]
  // iceCreams: SnackData[]
}

export const SnackContext = createContext({} as SnackContextProps)

export default function App() {

    const [burgers, setBurgers] = useState<SnackData[]>([])

    useEffect(() => {
      ;(async () => {
        const burgerRequest = await getBurgers()
        setBurgers(burgerRequest.data)
      })()
    }, [])

  return (
    <BrowserRouter>
      <Theme>
        <SnackContext.Provider value={{ burgers}}>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackContext.Provider>
      </Theme>
    </BrowserRouter>
  )
}
