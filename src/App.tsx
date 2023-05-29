import './App.css'
import { Footer } from './components/Footer'
import { FormLogin } from './components/FormLogin'
import { Header } from './components/Header'
import { Context } from './contexts/Context'
import { MainRoutes } from './routes/MainRoutes'
import { useContext } from 'react';
function App() {
  // const {state, dispatch} = useContext(Context);

  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  )
}

export default App
