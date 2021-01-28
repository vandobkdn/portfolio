import React from "react";

export default function SocialCard({icon, title, linkTo}) {
    return (
        <a target="_blank" rel="noreferrer" href={linkTo}
           className="flex flex-row items-center p-8 my-4 bg-white card-background
            h-16 w-full rounded-md hover:text-blue-600">
            <i className={`${icon} rounded-sm bg-gradient-to-r from-green-300 to-blue-400`}
               aria-hidden="true" />
            <h2 className="ml-8 text-2xl text-opacity-65">
                {title}
            </h2>
        </a>
    )
}