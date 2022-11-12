import React  from 'react'
import FormRegistro from './FormRegistro'

export default function Modal( { getListadoReservas, reserva, setReserva}) {

    return (
        <>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registrar Reserva</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <FormRegistro  getListadoReservas={getListadoReservas} reserva={reserva} setReserva={setReserva}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
