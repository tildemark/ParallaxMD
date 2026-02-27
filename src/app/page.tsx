"use client";

import { useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import CodeMirrorPane from "@/components/CodeMirrorPane";
import MilkdownPane from "@/components/MilkdownPane";

export default function ParallaxMDEditor() {
  const [markdown, setMarkdown] = useState<string>("# Welcome to ParallaxMD\n\nStart typing on the left or formatting on the right!");

  return (
    <div className="h-screen w-full bg-background text-foreground flex flex-col">
      <header className="h-12 border-b flex items-center px-4 shrink-0 text-sm font-medium">
        ParallaxMD
      </header>
      <main className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50} minSize={20} className="flex flex-col h-full bg-zinc-950">
            <div className="h-8 border-b border-white/10 flex items-center px-4 text-xs font-mono text-zinc-400 shrink-0">
              Raw Markdown
            </div>
            <div className="flex-1 overflow-auto">
              <CodeMirrorPane markdown={markdown} onChange={setMarkdown} />
            </div>
          </ResizablePanel>

          <ResizableHandle className="w-1 bg-border" />

          <ResizablePanel defaultSize={50} minSize={20} className="flex flex-col h-full bg-background">
            <div className="h-8 border-b flex items-center px-4 text-xs font-mono text-muted-foreground shrink-0">
              Visual Editor
            </div>
            <div className="flex-1 overflow-auto p-4 prose prose-zinc dark:prose-invert max-w-none">
              <MilkdownPane markdown={markdown} onChange={setMarkdown} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}
