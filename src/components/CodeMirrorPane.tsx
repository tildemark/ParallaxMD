"use client";

import React from 'react';
import ReactCodeMirror from '@uiw/react-codemirror';
import { markdown as markdownLang } from '@codemirror/lang-markdown';

interface CodeMirrorPaneProps {
    markdown: string;
    onChange: (value: string) => void;
}

export default function CodeMirrorPane({ markdown, onChange }: CodeMirrorPaneProps) {
    return (
        <ReactCodeMirror
            value={markdown}
            height="100%"
            className="h-full text-base [&>.cm-editor]:h-full [&>.cm-editor]:outline-none [&>.cm-scroller]:font-mono"
            extensions={[markdownLang()]}
            onChange={onChange}
            theme="dark"
        />
    );
}
