import React from 'react';
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react';
import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { listener, listenerCtx } from '@milkdown/plugin-listener';

interface MilkdownPaneProps {
    markdown: string;
    onChange: (value: string) => void;
}

const MilkdownEditor = ({ markdown, onChange }: MilkdownPaneProps) => {
    const isInternalUpdate = React.useRef(false);

    // We should ideally sync back CodeMirror changes to Milkdown.
    // For the sake of simplicity, we initialize with markdown and listen to updates.
    // We can use @milkdown/utils replaceAll, but let's keep it simple for now as requested.

    useEditor((root) => {
        return Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, root);
                ctx.set(defaultValueCtx, markdown);
                ctx.get(listenerCtx).markdownUpdated((ctx, newMarkdown, prevMarkdown) => {
                    if (newMarkdown !== markdown) {
                        isInternalUpdate.current = true;
                        onChange(newMarkdown);
                    }
                });
            })
            .use(commonmark)
            .use(listener);
    }, []); // Initialize once

    return <Milkdown />;
};

export default function MilkdownPane(props: MilkdownPaneProps) {
    return (
        <div className="min-h-full p-4 h-full relative">
            <MilkdownProvider>
                <MilkdownEditor {...props} />
            </MilkdownProvider>
        </div>
    );
}
