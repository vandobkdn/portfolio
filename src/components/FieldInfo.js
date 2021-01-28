import React from "react";

export default function FieldInfo({iconName, label, text}) {
    return (
        <span className="space-x-2 text-gray-700">
            <i className={`${iconName} rounded-md bg-gradient-to-r from-green-300 to-blue-400`} aria-hidden="true" />
            <label className="font-bold text-lg space-x-2">{`${label}:`}</label>
            <span>{text}</span>
        </span>
    )
}