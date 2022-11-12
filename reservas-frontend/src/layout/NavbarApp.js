import React from 'react'

export default function NavbarApp() {
    return (
        <div id="kt_header" className="header align-items-stretch">
            <div className="container-fluid d-flex align-items-stretch justify-content-between">
                <div className="d-flex align-items-center d-lg-none ms-n1 me-2" title="Show aside menu">
                    <div className="btn btn-icon btn-active-color-primary w-30px h-30px w-md-40px h-md-40px" id="kt_aside_mobile_toggle">
                        <span className="svg-icon svg-icon-2x mt-1">
                           <h2>Presentación del Proyecto</h2>
                        </span>
                    </div>
                </div>
                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                    <div className="d-flex align-items-center" id="kt_header_nav">
                    </div>
                    <div className="d-flex align-items-stretch flex-shrink-0">
                        <div className="d-flex align-items-stretch flex-shrink-0">
   
                            <div className="d-flex align-items-center ms-1 ms-lg-3">
                                <div className="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px pulse pulse-success" id="kt_drawer_chat_toggle">
                                    <i className="bi bi-app-indicator fs-2"></i>
                                    <span className="pulse-ring w-45px h-45px"></span>
                                </div>
                            </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
