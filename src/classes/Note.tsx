import { Component, ReactNode } from 'react';

type NoteProps = {
    id: string;
    title: string;
    content: string;
}

class Note extends Component {
    id: string;
    title: string;
    content: string;


    constructor({ id, title, content }: NoteProps) {
        super({});
        this.id = id;
        this.title = title;
        this.content = content;
    }
}

export default Note;