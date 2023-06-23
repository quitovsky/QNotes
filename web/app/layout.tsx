"use client";

import React, {useEffect} from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import "@/styles/global.scss";
import {$colorScheme} from "@/utils/Store";
import {useStore} from "@nanostores/react";

export default function Layout({ children }: { children: React.ReactNode }) {

    const colorScheme = useStore($colorScheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem("color-scheme");
        if (savedTheme) {
            $colorScheme.set(savedTheme);
        }
    }, [])

    return (
        <>
            <html>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Document</title>
            </head>
            <body data-cs={colorScheme}>
            <div id="root">
                {children}
            </div>
            </body>
            </html>
        </>
    )
}