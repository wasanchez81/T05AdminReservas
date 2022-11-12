import React from 'react'
import AsideApp from '../layout/AsideApp'
import NavbarApp from '../layout/NavbarApp'
import ReservationPage from './ReservationPage'
// import CalendarPage from './CalendarPage'
export default function DashboardPage() {

  return (
    
    <div id="kt_body" className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed">
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          {/* begin::Aside */}
          <AsideApp />
          {/* end::Aside */}
        </div>
        {/* begin::Wrapper */}
        <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
          {/* begin::Header */}
          <NavbarApp />
          {/* end::Header */}
          {/* begin::Content */}
          <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
              <div id="kt_content_container" className="container">
                  {/* <CalendarPage /> */}
                  <ReservationPage />
              </div>
          </div>
          {/* end::Content */}
        </div>
        {/* end::Wrapper */}
      </div>
    </div>
  )
}
