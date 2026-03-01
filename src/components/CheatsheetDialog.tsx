import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export function CheatsheetDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-zinc-950 border-zinc-800 text-zinc-300">
                <DialogHeader>
                    <DialogTitle className="text-zinc-100 font-bold tracking-tight">Markdown Cheatsheet</DialogTitle>
                    <DialogDescription className="text-zinc-500">
                        Quick reference for ParallaxMD's supported GitHub Flavored Markdown (GFM).
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">

                    <section>
                        <h3 className="text-zinc-100 font-semibold mb-2">Editor Shortcuts</h3>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-mono bg-zinc-900 border border-zinc-800 p-4 rounded-md">
                            <div className="text-zinc-400">Bold</div><div><kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">Ctrl</kbd> + <kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">B</kbd></div>
                            <div className="text-zinc-400">Italic</div><div><kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">Ctrl</kbd> + <kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">I</kbd></div>
                            <div className="text-zinc-400">Strikethrough</div><div><kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">Ctrl</kbd> + <kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">Shift</kbd> + <kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">X</kbd></div>
                            <div className="text-zinc-400">Inline Code</div><div><kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">Ctrl</kbd> + <kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">E</kbd></div>
                            <div className="text-zinc-400">Link</div><div><kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">Ctrl</kbd> + <kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">K</kbd></div>
                            <div className="text-zinc-400">Quote</div><div><kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">Ctrl</kbd> + <kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">Shift</kbd> + <kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">.</kbd></div>
                            <div className="text-zinc-400">Exit Block</div><div><kbd className="bg-zinc-800 px-1 rounded border border-zinc-700">Enter</kbd> (x2)</div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-zinc-100 font-semibold mb-2">Basic Syntax</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm font-mono bg-zinc-900 border border-zinc-800 p-4 rounded-md">
                            <div># Heading 1</div><div><h1 className="text-xl font-bold font-sans">Heading 1</h1></div>
                            <div>## Heading 2</div><div><h2 className="text-lg font-bold font-sans">Heading 2</h2></div>
                            <div>**Bold Text**</div><div><strong>Bold Text</strong></div>
                            <div>*Italic Text*</div><div><em>Italic Text</em></div>
                            <div>~~Strikethrough~~</div><div><del>Strikethrough</del></div>
                            <div>`Inline Code`</div><div><code className="bg-zinc-800 px-1 rounded">Inline Code</code></div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-zinc-100 font-semibold mb-2">Lists</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm font-mono bg-zinc-900 border border-zinc-800 p-4 rounded-md">
                            <div className="whitespace-pre">
                                - Item 1
                                - Item 2
                                - Nested Item
                            </div>
                            <div className="font-sans">
                                <ul className="list-disc pl-4"><li>Item 1</li><li>Item 2<ul className="list-[circle] pl-4"><li>Nested Item</li></ul></li></ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-zinc-100 font-semibold mb-2">Tables</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm font-mono bg-zinc-900 border border-zinc-800 p-4 rounded-md overflow-x-auto whitespace-pre">
                            <div>
                                | Header 1 | Header 2 |
                                | -------- | -------- |
                                | Cell 1   | Cell 2   |
                            </div>
                            <div className="font-sans pb-4">
                                <table className="min-w-full divide-y border divide-zinc-700 border-zinc-700">
                                    <thead className="bg-zinc-800"><tr><th className="px-3 py-1 text-left">Header 1</th><th className="px-3 py-1 text-left">Header 2</th></tr></thead>
                                    <tbody><tr><td className="px-3 py-1 border-t border-zinc-700">Cell 1</td><td className="px-3 py-1 border-t border-zinc-700">Cell 2</td></tr></tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-zinc-100 font-semibold mb-2">Mermaid Diagrams</h3>
                        <p className="text-sm text-zinc-400 mb-2">Surround diagram definitions with triple backticks and the word `mermaid`.</p>
                        <div className="text-sm font-mono bg-zinc-900 border border-zinc-800 p-4 rounded-md whitespace-pre overflow-x-auto text-blue-400">
                            {`\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\``}
                        </div>
                    </section>

                </div>
            </DialogContent>
        </Dialog>
    )
}
