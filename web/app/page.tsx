"use client";

import Editor from "@/components/Editor/Editor";
import Sidebar from "@/components/Sidebar/Sidebar";
import {$isSettings, $isSidebar, $notifications, sendNotification} from "@/utils/Store";
import {useStore} from "@nanostores/react";
import Notification from "@/components/Notification";
import React, {useEffect, useState} from "react";
import Settings from "@/components/Settings/Settings";

export default function Index() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isSettings = useStore($isSettings)
    const notifications = useStore($notifications)

    if(mounted) return <>
        <Sidebar/>
        <div className="main-content">
            <Editor/>
        </div>
        {isSettings && <Settings/>}
        {notifications?.length > 0 && <>
            <div className="notifications-overlay">
                {notifications.map((notification, index) => {
                    return <Notification onClick={() => {
                        $notifications.set($notifications.get().filter(n => n.id !== notification.id));
                    }} svg={notification.svg} text={notification.text} type={notification.type} key={index}/>
                })}
            </div>
        </>}
    </>
}