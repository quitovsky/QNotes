import React, {HTMLAttributes, ReactNode} from "react";

interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
    svg: ReactNode;
    text: string;
    type: string;
}

export default function Notification({svg, text, type, ...props}: NotificationProps) {
    return <>
        <div className={`notification ${type}`} {...props}>
            {svg}
            {text}
        </div>
    </>
}