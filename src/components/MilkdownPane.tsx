import React from 'react';
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react';
import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { gfm } from '@milkdown/preset-gfm';
import { diagram } from '@xiangfa/milkdown-plugin-diagram';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { replaceAll } from '@milkdown/utils';
import { nord } from '@milkdown/theme-nord';

interface MilkdownPaneProps {
    markdown: string;
    onChange: (value: string) => void;
}

const MilkdownEditor = ({ markdown, onChange }: MilkdownPaneProps) => {
    const isInternalUpdate = React.useRef(false);
    const isExternalUpdate = React.useRef(false);

    const latestMarkdown = React.useRef(markdown);
    const latestOnChange = React.useRef(onChange);

    React.useEffect(() => {
        latestMarkdown.current = markdown;
        latestOnChange.current = onChange;
    }, [markdown, onChange]);

    const { get } = useEditor((root) => {
        return Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, root);
                ctx.set(defaultValueCtx, markdown);
                nord(ctx);
                ctx.get(listenerCtx).markdownUpdated((ctx, newMarkdown, prevMarkdown) => {
                    if (isExternalUpdate.current) return;
                    if (newMarkdown !== latestMarkdown.current) {
                        isInternalUpdate.current = true;
                        latestOnChange.current(newMarkdown);
                    }
                });
            })
            .use(commonmark)
            .use(gfm)
            .use(diagram)
            .use(listener);
    }, []); // Initialize once

    React.useEffect(() => {
        if (!isInternalUpdate.current) {
            const editor = get();
            if (editor) {
                isExternalUpdate.current = true;
                editor.action(replaceAll(markdown));
                isExternalUpdate.current = false;
            }
        }
        isInternalUpdate.current = false;
    }, [markdown, get]);

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
