import React from 'react'

export default function AsideApp() {
    return (
        <div>
            <div id="kt_aside" className="aside pb-5 pt-5 pt-lg-0" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'80px', '300px': '100px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
                <div className="aside-logo py-8" id="kt_aside_logo">
                    <a href="/#" className="d-flex align-items-center">
                        <img alt="Logo" src="assets/media/logo-demo-6.svg" className="h-45px logo" />
                    </a>
                </div>
                <div className="aside-menu flex-column-fluid" id="kt_aside_menu">
                    <div className="hover-scroll-overlay-y my-2 my-lg-5 pe-lg-n1" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu" data-kt-scroll-offset="5px">
                        <div className="menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold" id="#kt_aside_menu" data-kt-menu="true">
                            <div className="menu-item py-2">
                                <a className="menu-link menu-center" href="/#" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                    <span className="menu-icon me-0">
                                        <i className="bi bi-house fs-2"></i>
                                    </span>
                                    <span className="menu-title">Inicio</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
