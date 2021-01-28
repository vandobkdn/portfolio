import React, {useState, useEffect} from "react";
import {useRouteMatch, Route} from "react-router-dom";
import {Title, ExperienceCard} from "components";
import {Companies} from "utils/Mocks";
import {CompanyDetail} from "./index";

export default function Experience() {
    const { path, url } = useRouteMatch();
    const [currentUrl, setCurrentUrl] = useState(window.location.pathname);
    const handleCardSelect = (key) => setCurrentUrl(`${url}${key}`);
    useEffect(() => {
        setCurrentUrl(window.location.pathname);
    }, [window.location.pathname]);

    return (
        <div className="p-8 h-full flex flex-col">
            <Title title="Experience" />
            <section className="h-full">
                {currentUrl === '/portfolio/work-at' ? (
                    <nav className="flex flex-col h-4/5 mt-8 pt-4">
                        {
                            Companies.map((item, index) => (
                                <ExperienceCard
                                    handleCardSelect={handleCardSelect}
                                    id={item.id}
                                    key={index}
                                    url={url}
                                    icon={item.icon}
                                    title={item.companyName}
                                    linkTo={item.linkTo}
                                    schedule={item.schedule}
                                />
                            ))
                        }
                    </nav>
                ) : (
                    <div className="mt-4 h-full relative text-gray-500">
                        <Route exact path={`${path}/:companyId`} component={CompanyDetail} />
                    </div>
                ) }
            </section>
        </div>
    )
}