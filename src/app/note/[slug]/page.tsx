import NoteEditorControl from "@/app/components/NoteEditorControl";
import NoteEditorComponent from "@/app/components/NoteEditorComponent";
import {notes} from "@/app/components/NoteListPanel";

export default function NotePage() {
    return <div className="px-4 relative overflow-x-hidden overflow-y-auto">
        <div className="sticky py-4 flex gap-4 justify-between top-0 bg-background">
            <div className="space-x-2">
                <NoteEditorControl>
                    Playfair Display
                </NoteEditorControl>

                <NoteEditorControl>
                    16px
                </NoteEditorControl>

                <NoteEditorControl>
                    B U I S
                </NoteEditorControl>

                <NoteEditorControl>
                    Alignment
                </NoteEditorControl>
            </div>

            <div className="space-x-2">
                <NoteEditorControl>
                    Foto
                </NoteEditorControl>

                <NoteEditorControl>
                    Link
                </NoteEditorControl>
            </div>

            <div className="space-x-2">
                <NoteEditorControl>
                    Share
                </NoteEditorControl>
            </div>
        </div>
        <div className="bg-neutral-100 text-xs text-center text-neutral-500 px-3 py-1.5 rounded-md">Last edited
        </div>
        <div className="space-y-8 py-12 max-w-screen-md mx-auto">
            <div className="bg-neutral-100 rounded-xl h-[35svh] w-full"/>
            {notes[0].body.map((component, index) => <NoteEditorComponent key={index} component={component}/>)}
        </div>
        <div
            className="sticky bottom-0 w-full bg-gradient-to-b from-white/10 to-white h-12 left-0 right-0"/>
    </div>
}