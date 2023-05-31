import { createContext, useState } from "react";
import { obtenerDiferencia, calcularMarca, calcularPlan, formatearDinero } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

    //State para el formulario
    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: ""
    })

    //Subir al state
    const handleChangeDatos = e => {
        setDatos({
            //Creamos una copia
            ...datos,
            //escribimos lo nuevo
            [e.target.name]: e.target.value
        })
    }

    //error
    const [error, setError] = useState("")

    //resultado final
    const [resultado, setResultado] = useState(0)

    //state del tiempo de espera para mostrar el resultado
    const [cargando, setCargando] = useState(false)

    //Cotizar seguro
    const cotizarSeguro = () => {
        //Base
        let resultado = 2000

        //Obtener diferencia de años
        const diferencia = obtenerDiferencia(datos.year)

        //Restar 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100

        //americano 15%
        //Europeo 30%
        //Asiatico 5%
        resultado *= calcularMarca(datos.marca)

        //Básico 20%
        //Completo 50%
        resultado *= calcularPlan(datos.plan)

        //Formatear dinero
        resultado = formatearDinero(resultado)


        //Añandimos tiempo de espera
        setCargando(true)

        setTimeout(() => {
            //Subimos al state el resultado
            setResultado(resultado)
            setCargando(false)
        }, 2000);


    }



    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext