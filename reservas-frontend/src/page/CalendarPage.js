import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


export default function CalendarPage() {

  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }

  return (
    <div className="card">
      {/* <!--begin::Card header--> */}
      <div className="card-header">
        <h2 className="card-title fw-bolder">Calendar</h2>
        <div className="card-toolbar">
          <button className="btn btn-flex btn-primary" data-kt-calendar="add">
            {/* <!--begin::Svg Icon | path: icons/duotone/Navigation/Plus.svg--> */}
            <span className="svg-icon svg-icon-2">

            </span>
            Add Event</button>
        </div>
      </div>

      {/* <!--end::Card header-->
								<!--begin::Card body--> */}
      <div className="card-body">
        {/* <!--begin::Calendar--> */}
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventAdd={handleDateClick}
        />
        {/* <!--end::Calendar--> */}
      </div>
      {/* <!--end::Card body--> */}


      {/* <!--end::Card header--> */}
      {/* <!--begin::Card body--> */}
      <div className="card-body">
        {/* <!--begin::Calendar--> */}
        <div id="kt_calendar_app"></div>
        {/* <!--end::Calendar--> */}
      </div>
      {/* <!--end::Card body--> */}
    </div>
  )
}
