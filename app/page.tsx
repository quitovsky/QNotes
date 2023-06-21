"use client";

import Editor from "@/components/Editor/Editor";
import Sidebar from "@/components/Sidebar/Sidebar";
import {$isSidebar, $notifications, sendNotification} from "@/utils/Store";
import {useStore} from "@nanostores/react";
import Notification from "@/components/Notification";
import React, {useEffect} from "react";
import {savedNotification} from "@/utils/notifications";

export default function Index() {
    const isSidebar = useStore($isSidebar)
    const notifications = useStore($notifications)

    return <>
        <Sidebar/>
        <div className="main-content">
            <Editor/>
        </div>
        {notifications.length > 0 && <>
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