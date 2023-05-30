import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Context } from './contexts/Context'
import { MainRoutes } from './routes/MainRoutes'
import { useContext } from 'react';
import * as C from './styles';

function App() {
  const {state} = useContext(Context);

  return (
    <C.Container state={state.theme}>
      <Header />
      <MainRoutes />
      <Footer />
    </C.Container>
  )
}

export default App
