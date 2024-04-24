import NavBar from "./lovely_petz/components/NavBar"
import ErrorPage from "./lovely_petz/web_pages/ErrorPage"
import HomePage from "./lovely_petz/web_pages/HomePage"
import PetBoughtPage from "./lovely_petz/web_pages/PetBoughtPage"
import PetBuyPage from "./lovely_petz/web_pages/PetBuyPage"
import PetSalesPage from "./lovely_petz/web_pages/PetSalesPage"
import PetsPage from "./lovely_petz/web_pages/PetsPage"
import { createHashRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <HomePage />
    },

    {
      path: "/pets",
      element: <PetsPage />
    },

    {
      path: "/pet/sales/:petId",
      element: <PetSalesPage />
    },

    {
      path: "/pet/buy/:petId",
      element: <PetBuyPage />
    },

    {
      path: "/pet/bought",
      element: <PetBoughtPage />
    },

    {
      path: "*",
      element: <ErrorPage />
    }
  ])

  return (

    <>

      <NavBar />

      <main>

        <RouterProvider router={router} />

      </main>

    </>
  )
}

export default App
