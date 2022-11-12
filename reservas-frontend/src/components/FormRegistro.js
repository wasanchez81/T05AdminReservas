import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
//CALENDARIO
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

//COMPONENTES
import ListaClientes from './ListaClientes'
import ListaSalas from './ListaSalas'
import ListaEstados from './ListaEstados'

//ALERTA
import swal from 'sweetalert';

//ENDPOINT
import { ENDPOINT_ADD_RESERVAS, ENDPOINT_UPDATE_RESERVAS } from '../config/endpoints'

//CONVERSION DE FECHAS
import moment from 'moment';
import { getDate } from 'date-fns';

export default function FormRegistro({ getListadoReservas, reserva, setReserva }) {

  const formulario = useRef(null);
  const [selectCliente, setselectCliente] = useState(0);
  const [selectSala, setselectSala] = useState(0);
  const [selectEstado, setselectEstado] = useState('PENDIENTE');
  const [dateReserva, setDateReserva] = useState(dayjs(new Date()));
  const [startTime, setstartTime] = useState(dayjs(new Date()))
  const [finishTime, setfinishTime] = useState(dayjs(new Date()))
  const [motivo, setmotivo] = useState('');
  const [accion, setAccion] = useState(0);


  useEffect(() => {
    setReserva({})
  }, [setReserva])

  useEffect(() => {
    
    if (Object.keys(reserva) == 0) {
      resetearFormulario();
      setAccion(0)
    } else {
      setFormulario(reserva);
      setAccion(1)
    }
  }, [reserva])


  const handleSubmit = (e) => {

    e.preventDefault();
    const fecha = moment(dateReserva).format('YYYY-MM-DD');
    const horaInicio = moment(startTime.toString()).format();
    const horaFin = moment(finishTime.toString()).format();

    const dataRegistro = {
      fk_idCliente: parseInt(selectCliente),
      fk_idSalas: parseInt(selectSala),
      fecha,
      horaInicio,
      horaFin,
      estado: selectEstado,
      motivo: motivo.toUpperCase()
    }

    if (validaFormulario()) {

      const texto = accion === 0 ? 'registrar' : 'actualizar';

      swal({
        title: '¿Esta seguro de ' + texto + ' reserva ?',
        icon: "warning",
        buttons: true,
        dangerMode: false,
      })
        .then((willRegister) => {
          console.log(accion);
          if (willRegister) {

            if (accion === 0) {
              axios.post(ENDPOINT_ADD_RESERVAS, dataRegistro)
                .then(({ status, data }) => {

                  if (status === 200) {

                    getListadoReservas();
                    swal("Registrado Correctamente", { icon: "success" });
                    resetearFormulario();
                  } else {
                    swal("Ocurrio un problema.!", "", "error");
                  }
                })
                .catch((error) => {
                  console.error(error)
                })
            } else if (accion === 1) {
              
              axios.post(ENDPOINT_UPDATE_RESERVAS + '' + reserva.idReservas + '/' , dataRegistro)
              .then(({ status, data }) => {

                if (status === 200) {
                  getListadoReservas();
                  swal("Actualizado Correctamente", { icon: "success" });
                  resetearFormulario();
                } else {
                  swal("Ocurrio un problema.!", "", "error");
                }
              })
              .catch((error) => {
                console.error(error)
              })
            }
          }
        });
    }
  };

  const validaFormulario = () => {
    if (selectCliente === 0) {
      swal("Seleccione cliente válido!", "Formulario incompleto", "error");
    } else if (selectSala === 0) {
      swal("Seleccione sala válida!", "Formulario incompleto", "error");
    } else if (motivo === '') {
      swal("Ingrese un motivo!", "Formulario incompleto", "error");
    } else {
      return true;
    }
    return false;
  }

  const resetearFormulario = () => {
    setselectCliente(0);
    setselectSala(0);
    setselectEstado('PENDIENTE');
    setmotivo('');
    setDateReserva(dayjs(new Date()));
    setstartTime(dayjs(new Date()));
    setfinishTime(dayjs(new Date()));
  }
  
  const setFormulario = (reserva) => {
    
    setselectCliente(reserva.fk_idCliente.idCliente);
    setselectSala(reserva.fk_idSalas.idSalas);
    setselectEstado(reserva.estado);
    setmotivo(reserva.motivo);
    setDateReserva(dayjs(reserva.fecha));
    setstartTime(dayjs(reserva.horaInicio));
    setfinishTime(dayjs(reserva.horaFin));
  }

  return (

    <form onSubmit={handleSubmit} ref={formulario}>
      <div className="fv-row mb-9">
        <label className="fs-12 fw-bold mb-2 required">Seleccione Cliente</label>
        <ListaClientes setselectCliente={setselectCliente} selectCliente={selectCliente} />
      </div>

      <div className="row row-cols-lg-2 g-10">
        <div className="col">
          <div className="fv-row mb-9">
            <label className="fs-6 fw-bold mb-2 required">Seleccione sala</label>
            <ListaSalas setselectSala={setselectSala} selectSala={selectSala} />
          </div>
        </div>
        <div className="col" >
          <div className="fv-row mb-9">
            <label className="fs-6 fw-bold mb-2 required">Seleccione Estado</label>
            <ListaEstados setselectEstado={setselectEstado} selectEstado={selectEstado} />

          </div>
        </div>
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'es'}>
        <div className="row row-cols-lg-2 g-10">
          <div className="col">
            <div className="fv-row mb-9">
              <label className="fs-6 fw-bold mb-2 required">Seleccione fecha</label>
              <DesktopDatePicker
                inputFormat="DD/MM/YYYY"
                value={dateReserva}
                onChange={(v) => setDateReserva(v)}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-2 g-10">
          <div className="col">
            <div className="fv-row mb-9">
              <label className="fs-6 fw-bold mb-2 required">Hora Inicio</label>
              <TimePicker
                value={startTime}
                onChange={(newValue) => setstartTime(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>
          <div className="col" data-kt-calendar="datepicker">
            <div className="fv-row mb-9">
              <label className="fs-6 fw-bold mb-2 required">Hora Fin</label>
              <TimePicker
                value={finishTime}
                onChange={(newValue) => setfinishTime(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>
        </div>
      </LocalizationProvider>
      <div className="fv-row mb-9">
        <label className="fs-6 fw-bold required mb-2">Motivo</label>
        <input
          type="text"
          className="form-control form-control-solid"
          placeholder="Ingrese motivo de reserva"
          value={motivo}
          onChange={(v) => setmotivo(v.target.value)}
        />
      </div>

      <div className="modal-footer">
        <button type="submit" className="btn btn-primary">{ accion === 0 ? 'Registrar' : 'Actualizar'}</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Cerrar</button>
      </div>

    </form>
  )
}
