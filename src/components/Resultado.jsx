import { useCallback, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {

    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos
    //useRef evita que el año se renderice si selecciona otro
    const yearRef = useRef(year)

    //Con useCallback evitamos el render hasta que el resultado cambie
    const [nombreMarca] = useCallback(
        MARCAS.filter(m => m.id === Number(marca)),
        [resultado]
    )

    const [nombrePlan] = useCallback(
        PLANES.filter(p => p.id === Number(plan)),
        [resultado]
    )

    if (resultado === 0) {
        return null
    }

    return (
        <div className=" mb bg-gray-200 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>
            <p className="m-2" >
                <span className="font-bold">Marca del Auto: </span>
                {nombreMarca.nombre}
            </p>
            <p className="m-2" >
                <span className="font-bold">Año del Auto: </span>
                {yearRef.current}
            </p>
            <p className="m-2" >
                <span className="font-bold">Plan del seguro: </span>
                {nombrePlan.nombre}
            </p>
            <p className="m-2 text-2xl" >
                <span className="font-bold">Total de la Cotización: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado