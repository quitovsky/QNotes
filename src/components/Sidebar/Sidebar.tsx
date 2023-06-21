"use client";

import "@/styles/Sidebar.scss"
import NoteListItem from "@/components/Sidebar/NoteListItem";
import {useState} from "react";
import { useStore } from "@nanostores/react";
import {
    $isSidebar,
    $notes,
    $selectedNote,
    createNote,
    getNoteById,
    markAsFavorite,
    saveData,
    saveNote
} from "@/utils/Store";
import MainActions from "@/components/MainActions";

export default function Sidebar() {

    const isSidebar = useStore($isSidebar);
    const selectedNote = useStore($selectedNote);
    const notes = useStore($notes);
    // const [notes, setNotes] = useState(_notes)

    return <>
        <div className={`sidebar ${isSidebar ? "active" : ""}`}>
            <MainActions/>
            <div className="sidebar-content">
                <div className="sidebar-title">Notes</div>
                <div className="sidebar-separator"/>
                <div className="sidebar-list">
                    {notes.length === 0 && <>
                        <div className={"sidebar-list-no_items"}>No notes yet.</div>
                    </>}
                    {notes.length > 0 && notes.map((note, index) => {
                        return <NoteListItem key={index} name={note.title} isFavorite={note.isFavorite} isSelected={note.id === selectedNote?.id} onClick={() => {
                            $selectedNote.set(getNoteById(note.id));
                            $isSidebar.set(false);
                        }} onFavoriteClick={() => {
                            markAsFavorite(note.id)
                        }}/>
                    })}
                    <div onClick={createNote} className="sidebar-list-create"><svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z"/></svg>Create</div>

                    {/*<NoteListItem name={"Note 1"} isFavorite={true} isSelected={true}/>*/}
                </div>
            </div>
            <div className="sidebar-bottom">{notes.length} notes</div>
        </div>
        <div onClick={() => $isSidebar.set(false)} className="sidebar-overlay"></div>
        </>;
}