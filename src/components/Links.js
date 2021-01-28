import React from "react";
import {MenuItems} from "utils/Mocks";
import {MenuItem} from "./index";

export default function Links() {
    return (
        <section>
            {
                MenuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        linkTo={item.linkTo}
                        iconName={item.iconName}
                        itemName={item.itemName}/>
                ))
            }
        </section>
    )
}