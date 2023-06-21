import {v4} from 'uuid';

export class Note {
    id: string;
    title: string;
    content: string;
    isFavorite: boolean;
    constructor(
        title: string,
        content: string,
        isFavorite: boolean,
        id?: string) {

        this.id = id ? id : v4().slice(0, 8);
        this.title = title;
        this.content = content;
        this.isFavorite = isFavorite;
    }

}