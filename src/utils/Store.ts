import { atom } from 'nanostores';
import {Note} from "@/utils/entities";
import {loadNotes} from "@/utils/Storage";
import {ReactNode} from "react";
import {TNotification} from "@/utils/types";
import {notifications} from "@/utils/notifications";

export const $notes = atom<Note[]>(loadNotes());
export const $isSidebar = atom(false);
export const $selectedNote = atom<Note | null>(null);

export const $notifications = atom<TNotification[]>([])
export const sendNotification = (
    {
        svg,
        text,
        type
    }
) => {
    const id = Date.now()
    $notifications.set([...$notifications.get(), {
        id: id,
        svg: svg,
        text: text,
        type: type
    }]);
    setTimeout(() => {
        $notifications.set($notifications.get().filter(n => n.id !== id));
    }, 5000);
}


export const getNoteById = (id: string) => {
    return $notes.get().find(note => note.id === id);
}

export const markAsFavorite = (id: string) => {
    const note = getNoteById(id);
    if (note) {
        note.isFavorite = !note.isFavorite;
        $notes.set([...$notes.get()]);
        saveData();
    }
}

export const saveNote = () => {
    $selectedNote.get().content = (document.getElementsByClassName("editor-textarea-input")[0] as HTMLTextAreaElement)?.value;
    $selectedNote.get().title = (document.getElementsByClassName("editor-header-title")[0] as HTMLInputElement)?.value;
    $notes.set([...$notes.get()]);
    console.log("Saved");
    console.log($notes.get());
    saveData();
    sendNotification(notifications.saved)
}

export const createNote = () => {
    const note = new Note(
        "Title",
        "",
        false
    );
    $notes.set([...$notes.get(), note]);
    $selectedNote.set(note);
    $isSidebar.set(false);
}

export const saveData = () => {
    console.log($notes.get());
    console.log("Saving")
    localStorage.setItem("notes", JSON.stringify($notes.get()));
    console.log(localStorage.getItem("notes"))
}
