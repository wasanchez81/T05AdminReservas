import React, { useEffect, useState } from 'react';
import axios from 'axios'

//FECHAS
import Moment from 'react-moment';

//COMPONENTES
import Modal from './Modal';

//ENDPOINTS
import { ENDPOINT_LIST_RESERVAS, 
         ENDPOINT_DELETE_RESERVAS } 
from '../config/endpoints'

//ALERTA
import swal from 'sweetalert';

export default function GridReservas() {

    const [listadoReservas, setListadoReservas] = useState([]);
    const [reserva, setReserva] = useState({});

    const getListadoReservas = async () => {
        const { data } = await axios.get(ENDPOINT_LIST_RESERVAS);
        setListadoReservas(data);
    }
    
    useEffect(() => {
        getListadoReservas();
    }, [])
    
    const EliminarRegistro = (idReserva) => {
        swal({
            title: "¿Esta seguro de eliminar reserva ?",
            icon: "error",
            buttons: true,
            dangerMode: true,
          })
          .then((willRegister) => {
            if (willRegister) {

                const URL = ENDPOINT_DELETE_RESERVAS + idReserva + '/';

                axios.delete(URL)
                .then( ({ status, data  })=> {
                  if(status === 200){
                    swal("Eliminado correctamente", {icon: "success"});
                    getListadoReservas();
                  }else {
                    swal("No se pudo eliminar el registro", "", "error");
                  }
                })
                .catch( (error) => {
                    console.error(error)
                })
            }
          });
    }

    const ActualizarRegistro = (reserva) => setReserva(reserva);
    const Registrar = () => setReserva({});

    return (
        <>
            <Modal getListadoReservas={getListadoReservas} reserva={reserva} setReserva={setReserva}/>
            
            <div className="row gy-5 g-xl-8">
                <div className="col">
                    <div className="card card-xxl-stretch mb-5 mb-xl-8">
                        <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bolder fs-3 mb-1">Administración de reservas</span>
                                <span className="text-muted mt-1 fw-bold fs-7">Listado de reservas</span>
                            </h3>
                            <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click para agregar reserva">
                                <button className="btn btn-sm btn-light-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={Registrar}>
                                    Nueva reserva
                                </button>
                            </div>
                        </div>
                        <div className="card-body py-3">
                            <div className="table-responsive">
                                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <thead>
                                        <tr className="text-dark fw-bolder">
                                            <th className="min-w-20px">Id</th>
                                            <th className="min-w-130px">Nombre Sala</th>
                                            <th className="min-w-100px">Fecha</th>
                                            <th className="min-w-90px">Hora Inicio</th>
                                            <th className="min-w-80px">Hora Fin</th>
                                            <th className="min-w-100px">Estado</th>
                                            <th className="min-w-130px">Solicitante</th>
                                            <th className="min-w-120px">Departamento</th>
                                            <th className="min-w-120px">Motivo</th>
                                            <th className="min-w-200px text-end">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {listadoReservas.map((value, index) => (
                                            <tr key={value.idReservas}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="d-flex justify-content-start flex-column">
                                                            <span className="text-dark fw-bolder text-hover-primary fs-6">{value.idReservas}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-muted me-2 fs-7 fw-bold">{value.fk_idSalas.nombres}</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted me-2 fs-7 fw-bold">{value.fecha}</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted me-2 fs-7 fw-bold">{<Moment date={value.horaInicio} format="hh:mm:ss" />}</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted me-2 fs-7 fw-bold">{<Moment date={value.horaFin} format="hh:mm:ss" />}</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted me-2 fs-7 fw-bold">{value.estado}</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted me-2 fs-7 fw-bold">{value.fk_idCliente.nombres}</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted me-2 fs-7 fw-bold">{value.fk_idCliente.departamento}</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted me-2 fs-7 fw-bold">{value.motivo}</span>
                                                </td>
                                                <td className="text-end">
                                                    <div className="d-flex justify-content-end flex-shrink-0">
                                                        <button className="btn btn-sm btn-outline-danger me-1" onClick={() => EliminarRegistro(value.idReservas)}>
                                                            <img alt="Logo" src="assets/media/Eraser.svg"  />
                                                        </button>
                                                        <button className="btn btn-outline-warning btn-sm me-1"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => ActualizarRegistro(value)}>
                                                        <img alt="Logo" src="assets/media/Edit.svg"  />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                        }

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
