import {Note} from "@/utils/entities";
import {RawNote} from "@/utils/types";

export const loadNotes = (): Note[] => {
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

    // if(!notes) return [];
    // return JSON.parse(notes);
