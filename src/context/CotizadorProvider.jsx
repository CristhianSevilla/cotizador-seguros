import { createContext, useState } from "react";

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
        [e.target.name] : e.target.value
    })
    }

    //error
    const [error, setError] = useState("")

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export{
    CotizadorProvider
}

export default CotizadorContext