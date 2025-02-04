import React, { useEffect } from "react";
import Link from "next/link";
import SimpleBar from "simplebar-react";
//import logo
// import logoSm from "@public/assets/images/logo-sm.png";
// import logoDark from "@public/assets/images/logo-dark.png";
// import logoLight from "@public/assets/images/logo-light.png";
import M3logo from "@public/assets/images/logo-m3.png";

//Import Components
import VerticalLayout from "../VerticalLayouts";
import TwoColumnLayout from "../TwoColumnLayout";
import { Container } from "reactstrap";
import HorizontalLayout from "../HorizontalLayout";
import { AuthServices } from "@/api/services";
import { logoutUserSuccess } from "@/slices/auth/login/reducer";
import Cookies from "js-cookie";

const Sidebar = ({ layoutType }) => {

  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  });

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
    } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    } else {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    }
  };

  async function clearAllData() {
    setLoading(true);
    await AuthServices.logout();
    dispatch(logoutUserSuccess());
    persistor.purge();
    Cookies.remove("token");
    router.push("/");
    localStorage.clear();
    setLoading(false);
  }

  return (
    <React.Fragment>
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
          <Link href="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={M3logo.src} alt="" height="40" />
            </span>
            <span className="logo-lg">
              <img src={M3logo.src} alt="" height="60" />
            </span>
          </Link>

          <Link href="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={M3logo.src} alt="" height="40" />
            </span>
            <span className="logo-lg">
              <img src={M3logo.src} alt="" height="60" />
            </span>
          </Link>
          <button
            onClick={addEventListenerOnSmHoverMenu}
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        {layoutType === "horizontal" ? (
          <div id="scrollbar">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <HorizontalLayout />
              </ul>
            </Container>
          </div>
        ) : layoutType === 'twocolumn' ? (
          <React.Fragment>
            <TwoColumnLayout layoutType={layoutType} />
            <div className="sidebar-background"></div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SimpleBar id="scrollbar" className="h-100">
              <Container fluid>
                <div id="two-column-menu"></div>
                <ul className="navbar-nav" id="navbar-nav">
                  <VerticalLayout layoutType={layoutType} />
                </ul>
              </Container>
            </SimpleBar>
            <div className="sidebar-background"></div>
          </React.Fragment>
        )}
      </div>
      <div className="vertical-overlay"></div>
    </React.Fragment>
  );
};

export default Sidebar;
