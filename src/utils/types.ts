import {ReactNode} from "react";

export type RawNote = {
    id: string;
    title: string;
    content: string;
    isFavorite: boolean;
}

export type TNotification = {
    id: number;
    svg: ReactNode;
    text: string;
    type: string;
}