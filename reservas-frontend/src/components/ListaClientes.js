import React, { useEffect, useState } from 'react'
import { ENDPOINT_CLIENTES } from '../config/endpoints'
import axios from 'axios'

export default function ListaClientes( { setselectCliente, selectCliente }  ) {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {

        const getListarSalas = async () => {
            const { data } = await axios.get(ENDPOINT_CLIENTES);
            setClientes(data);
        }
        getListarSalas();

    }, [])

    const handleChange = (newvalue) => {
        setselectCliente(newvalue.target.value)
    };

    return (
        <>
            <select 
                className="form-select form-select-sm form-select-solid"  
                onChange={handleChange} 
                defaultValue={0} 
                value={selectCliente}
                >

                <option value={0} disabled={true}> 
                        Seleccione Cliente 
                </option>

                {clientes.map((value) => (
                    <option 
                        key={value.idCliente } 
                        value={value.idCliente}>
                            {value.nombres}
                    </option>
                ))}

            </select>
        </>
    )

}
