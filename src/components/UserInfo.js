import React from "react";
import "styles/main.css";
import {UserInfo as User} from "utils/Mocks";
import avatar from "images/avatar.jpg";

export default function UserInfo() {
    return (
        <section>
            <img alt="avatar" src={avatar}  className="inline object-cover w-20 h-20 rounded-full ring ring-offset-4"/>
            <h3 className="mt-2 text-lg font-medium">{User.username}</h3>
            <p className="text-sm italic">{User.workAs}</p>
        </section>
    )
}