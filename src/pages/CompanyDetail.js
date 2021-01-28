import React from "react";
import {Link, useParams} from "react-router-dom";
import {PageNotFound} from "./index";
import {Companies} from "utils/Mocks";

export default function CompanyDetail() {
    const { companyId } = useParams();
    const validParam = ["fpt", "tma"].includes(companyId);
    const company = validParam && Companies.filter(item => item.id === companyId)[0];
    const {
        companyName,
        schedule,
        projectDescription,
        teamSize,
        tools,
        responsibilities,
        technologies,
    } = company || {};

    return !validParam ? <PageNotFound /> : (
        <>
            <span className="flex flex-row space-x-4 items-center">
                <i className={`fa fa-building fa-lg rounded-sm bg-gradient-to-r from-green-300 to-blue-400`} aria-hidden="true" />
                <h1 className="flex-grow text-2xl font-bold">{companyName}</h1>
                <p className="flex flex-row items-center text-sm text-blue-500 ml-4">
                    <i className="fa fa-clock-o mr-2" aria-hidden="true" />
                    <span className="text-sm font-bold">{schedule}</span>
                </p>
            </span>
            <div className="p-2 mt-8 space-y-1">
                <span className="flex flex-row space-x-2 items-center">
                    <i className={`fa fa-hand-o-right`} aria-hidden="true" />
                    <label className="flex flex-row items-center space-x-4">
                        <span className="font-bold">Project:</span>
                        <h3 className="text-base">{projectDescription}</h3>
                    </label>
                </span>
                <span className="flex flex-row space-x-2 items-center">
                    <i className={`fa fa-hand-o-right`} aria-hidden="true" />
                    <label className="flex flex-row items-center space-x-4">
                        <span className="font-bold">Team size:</span>
                        <h3 className="text-base">{teamSize}</h3>
                    </label>
                </span>
                <>
                    <span className="flex flex-row space-x-2 items-center">
                        <i className={`fa fa-hand-o-right`} aria-hidden="true" />
                        <span className="font-bold">Responsibilities:</span>
                    </span>
                    <ul className="pl-8">
                        {
                            (responsibilities || []).map((r, index) => (
                                <span className="flex flex-row items-center space-x-2" key={index}>
                                    <i className="fa fa-square text-blue-500 " aria-hidden="true" style={{fontSize: "12px"}}/>
                                    <li>{r}</li>
                                </span>
                            ))
                        }
                    </ul>
                </>
                <>
                    <span className="flex flex-row space-x-2 items-center">
                        <i className={`fa fa-hand-o-right`} aria-hidden="true" />
                        <span className="font-bold">Technologies:</span>
                    </span>
                    <ul className="pl-8">
                        {
                            (technologies || []).map((t, index) => (
                                <span className="flex flex-row items-center space-x-2" key={index}>
                                    <i className="fa fa-square text-blue-500 " aria-hidden="true" style={{fontSize: "12px"}}/>
                                    <li>{t}</li>
                                </span>
                            ))
                        }
                    </ul>
                </>
                <span className="flex flex-row space-x-2 items-center">
                    <i className={`fa fa-hand-o-right`} aria-hidden="true" />
                    <label className="flex flex-row items-center space-x-4">
                        <span className="font-bold">Tools:</span>
                        <h3 className="text-base">{tools}</h3>
                    </label>
                </span>
            </div>
            <Link to='/work-at'
                  className="text-2xl text-gray-500 hover:text-blue-500 absolute bottom-8 right-4 font-bold">
                <i className="fa fa-reply mr-2" aria-hidden="true" />
                Go Back
            </Link>
        </>
    )
}