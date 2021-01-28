import React from "react";

export default function Title({title}) {
    return (
        <h1 className="font-sans text-gray-500 text-5xl font-medium text-opacity-80 select-none">
            {title}
        </h1>
    )
}