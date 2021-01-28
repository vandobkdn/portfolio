import React from "react";
import {Title} from "components";
import {SocialCards} from "utils/Mocks";
import {SocialCard} from "components";

export default function SocialNetwork() {
    return (
        <div className="p-8 h-full">
            <Title title="Social Network" />
            <section className="flex flex-col h-4/5 mt-8 pt-4">
                {
                    SocialCards.map((item, index) => (
                        <SocialCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            linkTo={item.linkTo}
                        />
                    ))
                }
            </section>
        </div>
    )
}