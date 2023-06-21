import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import "@/styles/global.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Document</title>
            </head>
            <body>
            {/*<Sidebar/>*/}
            <div id="root">
                {children}
            </div>
            </body>
            </html>
        </>
    )
}