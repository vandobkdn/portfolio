import React from "react";
import {FieldInfo, Title} from "components";
import {UserInfo as User} from "utils/Mocks";
import robot from "images/logo.gif";

export default function Introduction() {
    return (
        <div className="p-8 flex flex-col overflow-scroll relative">
            <Title title="Introduction" className=""/>
            <section className="pt-8">
                <div className="flex flex-col justify-between space-y-2">
                    <FieldInfo
                        iconName="fa fa-user"
                        label="Name"
                        text={`${User.surname} ${User.name}`} />

                    <FieldInfo
                        iconName="fa fa-calendar"
                        label="Birthday"
                        text={User.birthday} />

                    <FieldInfo
                        iconName="fa fa-birthday-cake"
                        label="Age"
                        text={User.age} />

                    <FieldInfo
                        iconName="fa fa-mobile fa-lg"
                        label="Phone"
                        text={User.phone} />

                    <FieldInfo
                        iconName="fa fa-envelope-o"
                        label="Email"
                        text={User.email} />

                    <FieldInfo
                        iconName="fa fa-suitcase"
                        label="Major"
                        text={User.major} />

                    <FieldInfo
                        iconName="fa fa-map-marker fa-lg"
                        label="Address"
                        text={User.address} />

                    <FieldInfo
                        iconName="fa fa-graduation-cap"
                        label="Studied"
                        text={User.studiedAt} />
                </div>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    {User.description}
                </p>
                <img alt="robot" src={robot} className="absolute h-52 top-0 right-24 sm:hidden lg:block" />
            </section>
        </div>
    )
}