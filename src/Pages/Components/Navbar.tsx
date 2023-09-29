import React, { useState } from "react";
import {
  CNavItem,
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CNavLink,
  CNavbarNav,
  CCollapse,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { useNavigate, Link } from "react-router-dom";
import { LiaUserCircleSolid } from "react-icons/lia";
import "../../css/Navbar.css";
import { toast } from "react-toastify";
import { TbLogout2 } from "react-icons/tb";
export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const logout = () => {
    toast.success("User logged out");
  };
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="navbar">
        TaskManager
        <div className="image-container dropdown" style={{ float: "right" }}>
          <button className="dropbtn   ">
            <LiaUserCircleSolid size={55} color="white"></LiaUserCircleSolid>
          </button>
          <div className="dropdown-content">
            <button
              style={{ border: "0px" }}
              onClick={() => {
                localStorage.setItem("id", "");
                localStorage.setItem("token", "");
                localStorage.setItem("roleId", "");
                logout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div> */}

      <CNavbar expand="lg" colorScheme="light" className="navbar">
        <CContainer
          fluid
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <CNavbarBrand href="#" style={{color:"white"}}>TaskHub</CNavbarBrand>
          </div>
          <div style={{ direction: "rtl"}}>
            <CNavbarNav>
              <CDropdown variant="nav-item" popper={false} >
                <CDropdownToggle>
                  <LiaUserCircleSolid
                    size={55}
                    color="white"
                  ></LiaUserCircleSolid>
                </CDropdownToggle>
                 <CDropdownMenu >
                  <CDropdownItem>
                    <Link
                      to="/EditUser"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Edit
                    </Link>
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem
                    onClick={() => {
                      localStorage.setItem("id", "");
                      localStorage.setItem("token", "");
                      localStorage.setItem("roleId", "");
                      navigate("/");
                    }}
                  >
                    <TbLogout2></TbLogout2>Logout
                  </CDropdownItem>
                </CDropdownMenu> 
               
              </CDropdown>
            </CNavbarNav>
          </div>
        </CContainer>
      </CNavbar>
    </>
  );
}
