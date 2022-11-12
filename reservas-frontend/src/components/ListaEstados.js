import React from 'react'

export default function ListaEstados({ setselectEstado, selectEstado }) {

    const handleChange = (newvalue) => {
        setselectEstado(newvalue.target.value);
    };

    return (
        <select className="form-select form-select-sm form-select-solid"  
                onChange={handleChange}
                defaultValue='PENDIENTE'
                value={selectEstado}>
            <option value={'RESERVADO'} >{'RESERVADO'}</option>
            <option value={'PENDIENTE'} >{'PENDIENTE'}</option>
            {/* <option value={'APROBADO'} >{'APROBADO'}</option> */}
            <option value={'OCUPADO'} >{'OCUPADO'}</option>
        </select>
    )
}
