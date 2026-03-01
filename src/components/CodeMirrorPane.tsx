"use client";

import React, { useState, useEffect, useCallback } from 'react';
import ReactCodeMirror from '@uiw/react-codemirror';
import { markdown as markdownLang } from '@codemirror/lang-markdown';

interface CodeMirrorPaneProps {
    markdown: string;
    onChange: (value: string) => void;
}

export default function CodeMirrorPane({ markdown, onChange }: CodeMirrorPaneProps) {
    const [localMarkdown, setLocalMarkdown] = useState(markdown);

    // Track the last value we broadcasted to prevent circular updates
    const lastBroadcastedValueRef = React.useRef(markdown);

    // Sync from props if it changes externally
    useEffect(() => {
        if (markdown !== lastBroadcastedValueRef.current) {
            setLocalMarkdown(markdown);
            lastBroadcastedValueRef.current = markdown;
        }
    }, [markdown]);

    const handleChange = useCallback((val: string) => {
        setLocalMarkdown(val);
        lastBroadcastedValueRef.current = val;
        onChange(val);
    }, [onChange]);

    return (
        <ReactCodeMirror
            value={localMarkdown}
            height="100%"
            className="h-full text-base [&>.cm-editor]:h-full [&>.cm-editor]:outline-none [&>.cm-scroller]:font-mono"
            extensions={[markdownLang()]}
            onChange={handleChange}
            theme="dark"
        />
    );
}
