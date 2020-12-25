/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { NavLink, useParams } from "react-router-dom";
import "./Header.scss";
import "react-pro-sidebar/dist/css/styles.css";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import logo from "../../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { handleMenu } from "../../store/actions/menuAction";
import collapse from "../../assets/img/collapse.png";
import collapsetwo from "../../assets/img/collapsetwo.png";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const menu = useSelector((state) => state);
  const { menuCollapse } = menu.menu;

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  const menuIconClick = () => {
    menuCollapse ? dispatch(handleMenu(false)) : dispatch(handleMenu(true));
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="logotext">
              <p>{menuCollapse ? "" : "YOUR MUSIC"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <img src={collapsetwo} />
              ) : (
                <img src={collapse} />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                active={location.pathname == "/" ? true : false}
                icon={<FiHome />}
              >
                <NavLink exact={true} to="/">
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem
                icon={<FaList />}
                active={splitLocation[1] == "category" ? true : false}
              >
                <NavLink to="/category">Category</NavLink>
              </MenuItem>
              <MenuItem
                icon={<FaRegHeart />}
                active={location.pathname == "/favourite" ? true : false}
              >
                <NavLink to="/favourite">Favourite</NavLink>
              </MenuItem>
              <MenuItem
                icon={<RiPencilLine />}
                active={location.pathname == "/author" ? true : false}
              >
                {" "}
                <NavLink to="/author">Author</NavLink>
              </MenuItem>
              <MenuItem
                icon={<BiCog />}
                active={location.pathname == "/settings" ? true : false}
              >
                <NavLink to="/settings">Settings</NavLink>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
