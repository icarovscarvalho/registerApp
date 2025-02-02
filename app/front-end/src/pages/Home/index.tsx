import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { Register } from '../../components/Register'
import './style.css'

function Home() {

  const [page, setPage] = useState<String>('Home')

  function changeHandlePage(page:string) {
    setPage(page)
  }

  return (
    <div className="homeContainer">
      <Header page={changeHandlePage} />
      {page === "Home" ?
        <Main /> : <Register  />
      }
      <Footer />
    </div>
  )
}

export default Home