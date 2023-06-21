import {Note} from "@/utils/entities";
import {RawNote} from "@/utils/types";
import {$notes} from "@/utils/Store";

export const loadNotes = (): Note[] => {
    if (typeof window === "undefined") return;
    const notesItem = localStorage.getItem('notes');
    if(!notesItem) return [];
    const rawNotes: RawNote[] = JSON.parse(notesItem);
    console.log(rawNotes)
    return rawNotes.map(n => new Note(
        n.title,
        n.content,
        n.isFavorite,
        n.id
    ));
}

export const saveStorage = () => {
    localStorage.setItem("notes", JSON.stringify($notes.get()));
}

    // if(!notes) return [];
    // return JSON.parse(notes);
