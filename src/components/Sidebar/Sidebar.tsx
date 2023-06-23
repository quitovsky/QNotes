"use client";

import "@/styles/Sidebar.scss"
import NoteListItem from "@/components/Sidebar/NoteListItem";
import {useState} from "react";
import { useStore } from "@nanostores/react";
import {
    $isSettings,
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
                    {notes?.length === 0 && <>
                        <div className={"sidebar-list-no_items"}>No notes yet.</div>
                    </>}
                    {notes?.length > 0 && notes.map((note, index) => {
                        return <NoteListItem key={index} name={note.title} isFavorite={note.isFavorite} isSelected={note.id === selectedNote?.id} onClick={() => {
                            $selectedNote.set(getNoteById(note.id));
                        }} onFavoriteClick={() => {
                            markAsFavorite(note.id)
                        }}/>
                    })}
                    <div onClick={createNote} className="sidebar-list-create"><svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z"/></svg>Create</div>

                    {/*<NoteListItem name={"Note 1"} isFavorite={true} isSelected={true}/>*/}
                </div>
            </div>
            <div className="sidebar-bottom">{notes?.length} notes</div>
            <div onClick={() => $isSettings.set(!$isSettings.get())} className="sidebar-settings"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5047 14.0906L21.0938 13.8531C20.6047 13.5711 20.3125 13.0648 20.3125 12.5C20.3125 11.9352 20.6047 11.4289 21.0938 11.1469L21.5047 10.9094C22.6266 10.2609 23.0102 8.82969 22.3625 7.70781L21.5813 6.35469C20.9352 5.23516 19.4984 4.85078 18.3797 5.49687L17.9688 5.73359C17.4797 6.01641 16.8945 6.01641 16.4063 5.73359C15.9172 5.45078 15.625 4.94531 15.625 4.38047V3.90625C15.625 2.61406 14.5734 1.5625 13.2813 1.5625H11.7188C10.4266 1.5625 9.375 2.61406 9.375 3.90625V4.38125C9.375 4.94609 9.08282 5.45156 8.59375 5.73438C8.10469 6.01641 7.52032 6.01719 7.03125 5.73438L6.62032 5.49687C5.50157 4.85078 4.06485 5.23516 3.41797 6.35469L2.63672 7.70781C1.98907 8.82969 2.37266 10.2617 3.49453 10.9094L3.90625 11.1469C4.39532 11.4289 4.6875 11.9352 4.6875 12.5C4.6875 13.0648 4.39532 13.5711 3.90625 13.8531L3.49532 14.0906C2.37344 14.7383 1.98985 16.1703 2.6375 17.2922L3.41875 18.6453C4.06563 19.7648 5.50235 20.1492 6.62032 19.5031L7.03125 19.2664C7.52032 18.9828 8.10469 18.9844 8.59375 19.2664C9.08282 19.5492 9.375 20.0547 9.375 20.6195V21.0938C9.375 22.3859 10.4266 23.4375 11.7188 23.4375H13.2813C14.5734 23.4375 15.625 22.3859 15.625 21.0938V20.6188C15.625 20.0539 15.9172 19.5484 16.4063 19.2656C16.8945 18.9836 17.4797 18.9828 17.9688 19.2656L18.3797 19.5031C19.4984 20.1484 20.9352 19.7641 21.5813 18.6453L22.3625 17.2922C23.0102 16.1703 22.6266 14.7383 21.5047 14.0906ZM12.5 16.4062C10.3461 16.4062 8.59375 14.6539 8.59375 12.5C8.59375 10.3461 10.3461 8.59375 12.5 8.59375C14.6539 8.59375 16.4063 10.3461 16.4063 12.5C16.4063 14.6539 14.6539 16.4062 12.5 16.4062Z" fill="#9B9B9B"/>
            </svg>
            </div>
        </div>
        <div onClick={() => $isSidebar.set(false)} className="sidebar-overlay"></div>
        </>;
}