
import Formulario from "../components/Formulario"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EditarCliente = () => {

    const[cliente,setCliente] = useState({})
    const[cargando,setCargando] = useState(true)


    const {id} = useParams()
    useEffect(()=>{
        
        const ObtenerClienteAPI = async()=>{
        try {
            const url = `https://my-json-server.typicode.com/Richxdd/Crm-Cliente-Api/clientes/${id}`
            const respuesta = await fetch (url)
            const resultado = await respuesta.json()
            setCliente(resultado);
        } catch (error) {
            console.log(error);
        }
            setTimeout(() => {
                setCargando(!cargando)
            }, 1000);

            
        }
        ObtenerClienteAPI()
    },[])


    return (
        <>
            <h1 className="font-black text-4xl text-blue-900 ">Editar Cliente</h1>
            <p className="mt-3">Utiliza este formulario para actualizar datos de un cliente</p>

            {cliente?.nombre ? (
                <Formulario cliente={cliente} cargando={cargando}/>
            ):<p>Cliente ID no válido</p>} 
        </>
    )
}

export default EditarCliente
