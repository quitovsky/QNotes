"use client";

import React, {useEffect, useRef, useState} from "react";
import "@/styles/Editor.scss";
import {$isSidebar, $notes, $selectedNote, getNoteById, saveNote} from "@/utils/Store";
import {Note} from "@/utils/entities";
import {useStore} from "@nanostores/react";
import MainActions from "@/components/MainActions";

export default function Editor(
    // {noteName, ...props}: EditorProps
) {

    const selectedNote = useStore($selectedNote);
    const notes = useStore($notes);


    const noteNameInput = useRef<HTMLInputElement>();
    const noteTextarea = useRef<HTMLTextAreaElement>();

    const [words, setWords] = useState(0);
    const [characters, setCharacters] = useState(0);

    const counter = (value: string) => {
        const split = value.split(/\s+/);
        if(split.length === 1 && split[0] === '') {
            setWords(0);
        } else setWords(split.length);
        setCharacters(value.length);
    }

    useEffect(() => {
       if(noteTextarea.current) {
           noteTextarea.current.value = selectedNote.content;
           counter(selectedNote.content);
       }
       if(noteNameInput.current) {
           noteNameInput.current.value = selectedNote.title;
       }
    }, [selectedNote])

    useEffect(() => {
        if(noteTextarea.current) {
            noteTextarea.current.focus();
            noteTextarea.current.addEventListener('keydown', (e) => {
                if(e.key === 'Tab') {
                    e.preventDefault();
                    const start = noteTextarea.current.selectionStart;
                    const end = noteTextarea.current.selectionEnd;
                    const value = noteTextarea.current.value;
                    noteTextarea.current.value = value.substring(0, start) + '    ' + value.substring(end);
                    noteTextarea.current.selectionStart = noteTextarea.current.selectionEnd = start + 4;
                }
                if(e.key === 'Escape') {
                    e.preventDefault();
                    noteTextarea.current.blur();
                }});
            // noteTextarea.current.addEventListener('input', (e) => {
            //
            // })
        }
    }, [noteTextarea.current])

    if(notes.length === 0) return <>
        <div className="editor">
            <div className="editor-header">
                <MainActions/>
                <div className="editor-no_note">Create your first note!</div>
            </div>
        </div>
    </>
    // if(selectedNote === null) return <>Select note</>

    if(selectedNote === null) {
        return <>
        <div className="editor">
            <div className="editor-header">
                <MainActions/>
                <div className="editor-no_note">Select a note to edit...</div>
            </div>
        </div>
        </>
    }

    return <>
        <div className="editor">
            <div className="editor-header">
                <MainActions/>
                <input ref={noteNameInput} type="text" defaultValue={selectedNote.title} className="editor-header-title"/>
                <div className="editor-header-actions"><svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.25C0 0.894445 0.106561 0.597222 0.319683 0.358333C0.537649 0.119444 0.825848 0 1.18428 0C1.54271 0 1.82849 0.119444 2.04161 0.358333C2.25958 0.597222 2.36856 0.894445 2.36856 1.25C2.36856 1.60556 2.25958 1.90278 2.04161 2.14167C1.82849 2.38056 1.54271 2.5 1.18428 2.5C0.825848 2.5 0.537649 2.38056 0.319683 2.14167C0.106561 1.90278 0 1.60556 0 1.25Z" fill="white"/>
                    <path d="M4.31572 1.25C4.31572 0.894445 4.42228 0.597222 4.6354 0.358333C4.85337 0.119444 5.14157 0 5.5 0C5.85843 0 6.14421 0.119444 6.35733 0.358333C6.5753 0.597222 6.68428 0.894445 6.68428 1.25C6.68428 1.60556 6.5753 1.90278 6.35733 2.14167C6.14421 2.38056 5.85843 2.5 5.5 2.5C5.14157 2.5 4.85337 2.38056 4.6354 2.14167C4.42228 1.90278 4.31572 1.60556 4.31572 1.25Z" fill="white"/>
                    <path d="M8.63144 1.25C8.63144 0.894445 8.738 0.597222 8.95112 0.358333C9.16909 0.119444 9.45729 0 9.81572 0C10.1742 0 10.4599 0.119444 10.6731 0.358333C10.891 0.597222 11 0.894445 11 1.25C11 1.60556 10.891 1.90278 10.6731 2.14167C10.4599 2.38056 10.1742 2.5 9.81572 2.5C9.45729 2.5 9.16909 2.38056 8.95112 2.14167C8.738 1.90278 8.63144 1.60556 8.63144 1.25Z" fill="white"/>
                </svg>
                </div>
            </div>
            <div className="editor-header-separator"/>
            <div className="editor-textarea">
                <textarea onInput={() => counter(noteTextarea.current.value)} ref={noteTextarea} defaultValue={selectedNote.content} className="editor-textarea-input" placeholder="Express your thoughts here..."/>
            </div>
            <div className="editor-counter">
                <div className="editor-counter-words">Words: {words}</div>
                <div className="editor-counter-characters">Symbols: {characters}</div>
            </div>
        </div>
        </>;
}