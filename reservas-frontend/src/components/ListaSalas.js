import React, { useEffect, useState } from 'react'
import { ENDPOINT_SALAS } from '../config/endpoints'
import axios from 'axios'

export default function ListaSalas({ selectSala, setselectSala }) {

    const [salas, setSalas] = useState([]);

    useEffect(() => {

        const getListarSalas = async() => {
            const { data } = await axios.get(ENDPOINT_SALAS);
            setSalas(data);
        }
        getListarSalas();

    }, [])

    const handleChange = (newvalue) => {
        setselectSala(newvalue.target.value);
    };

    return (

        <select 
            className="form-select form-select-sm form-select-solid" 
            onChange={handleChange}
            defaultValue={0}
            value={selectSala}>
            <option value={0} disabled={true}> 
                Seleccione Sala 
            </option>

            { salas.map((value, index) => (
                <option 
                    key={value.idSalas} 
                    value={value.idSalas} >
                        {value.nombres}
                </option>
            ))}
            
        </select>
    )
}
