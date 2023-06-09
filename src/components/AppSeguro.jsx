import Formulario from "./Formulario"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import useCotizador from "../hooks/useCotizador"

const AppSeguro = () => {

  const {cargando } = useCotizador()

  return (
    <>
      <header className="my-10">

        <h1 className="text-white text-center text-5xl font-black mx-5">Auto Seguro</h1>
        <p className="text-white mx-5 text-center my-5 capitalize text-2xl">Cotiza el seguro de tu auto</p>
      </header>


      <main className="bg-white w-5/6 md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10 mb-10">

        <Formulario />

        { cargando ? <Spinner /> : <Resultado /> }

      </main>
    </>
  )
}

export default AppSeguro