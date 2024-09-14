import {ReactNode} from "react";
import {H1, H2, P} from '@/app/components/typography'

export interface INote {
    id: number,
    title: string,
    description: ReactNode,
    body: IEditorComponent[],
    lastEdit: string,
    previewImage: string,
    href?: string;
}

export interface IEditorComponent {
    content: string,
    tag: 'h1' | 'h2' | 'p'
}


export default function NoteEditorComponent({component}: { component: IEditorComponent }) {
    switch (component.tag) {
        case 'h1':
            return <H1>{component.content}</H1>
        case "h2":
            return <H2>{component.content}</H2>
        case "p":
            return <P>{component.content}</P>
        default:
            return <P>{component.content}</P>
    }
}