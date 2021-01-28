import React from "react";
import "styles/main.css";
import {NavLink} from "react-router-dom";

export default function MenuItem({linkTo, iconName, itemName}) {
    return (
        <NavLink activeClassName="text-blue-600 font-bold" to={linkTo} className="item flex my-4 mx-0 py-2 px-20 items-center hover:text-blue-600 cursor-pointer">
            <i className={`fa ${iconName} fa-lg`} aria-hidden="true" />
            <h2 className="px-4 py-0 text-lg">{itemName}</h2>
        </NavLink>
    )
}