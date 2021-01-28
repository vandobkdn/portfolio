import React from "react";
import {Link} from "react-router-dom";

export default function PageNotFound() {
    return (
        <section className="flex flex-col justify-center items-center h-full p-4 text-gray-500 space-y-4 font-semibold text-center">
            <h1 className="text-5xl">OOP! Error.</h1>
            <h1 className="text-5xl text-blue-500 opacity-60">404</h1>
            <p>Sorry, We can't find the page you are looking for.</p>
            <Link to='/profile' className="text-lg hover:text-blue-500 transform">
                <i className="fa fa-reply mr-2" aria-hidden="true" />
                Go Profile
            </Link>
        </section>
    )
}