import React from "react";
import {Link} from "react-router-dom";

export default function ExperienceCard({id, icon, title, linkTo, url, schedule, handleCardSelect}) {
    return (
        <Link to={`${url}${linkTo}`} onClick={() => handleCardSelect(id)}
              className="flex flex-row items-center p-8 my-4 bg-white card-background
            h-16 w-full rounded-md hover:text-blue-600">
            <i className={`${icon} rounded-sm bg-gradient-to-r from-green-300 to-blue-400`} aria-hidden="true" />
            <div className="flex flex-col items-center ml-4">
                <h2 className="text-2xl text-opacity-65">
                    {title}
                </h2>
                <p className="text-sm flex flex-row items-center ml-4">
                    <i className="fa fa-clock-o mr-2" aria-hidden="true" />
                    <span>{schedule}</span>
                </p>
            </div>
        </Link>
    )
}