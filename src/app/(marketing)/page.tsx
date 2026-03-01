"use client"

import { useEffect, useState } from "react";
import { DownloadIcon, LayoutTemplateIcon, PenToolIcon, RocketIcon } from "lucide-react";

export default function MarketingPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-md z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
                        <img src="/logo.png" alt="ParallaxMD Logo" className="w-8 h-8 rounded-md shadow-sm" />
                        ParallaxMD
                    </div>
                    <div className="flex items-center gap-6 text-sm font-medium">
                        <a href="#features" className="text-zinc-400 hover:text-white transition">Features</a>
                        <a href="https://github.com/tildemark/ParallaxMD/blob/main/architecture.md" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition">Architecture</a>
                        <a href="https://github.com/tildemark/ParallaxMD/blob/main/LICENSE" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition">License</a>
                        <div className="h-4 w-px bg-white/10"></div>
                        <a href="/editor" className="text-zinc-300 hover:text-white transition font-semibold">
                            Try Web Demo
                        </a>
                        <a href="https://github.com/tildemark/ParallaxMD/releases" target="_blank" rel="noreferrer" className="bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition flex items-center gap-2">
                            <DownloadIcon className="w-4 h-4" /> Download
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide mb-8 border border-blue-500/20">
                    <RocketIcon className="w-3 h-3" /> v0.1.1 Open Source Release
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                    The Native Windows <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Markdown Editor.
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 line-clamp-3">
                    A blazing fast, lightweight markdown editor featuring seamless two-way synchronization between your raw code and a beautiful visual preview. Built with Tauri and Next.js.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://github.com/tildemark/ParallaxMD/releases" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                        <DownloadIcon className="w-5 h-5" /> Download for Windows
                    </a>
                    <a href="/editor" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white rounded-full font-semibold transition flex items-center justify-center gap-2">
                        Open Web Demo <span className="text-zinc-500 ml-1">→</span>
                    </a>
                </div>
            </section>

            {/* Screenshot / App Preview Area */}
            <section className="px-6 max-w-6xl mx-auto mb-32">
                <div className="w-full bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden relative group">
                    <img src="/preview.webp" alt="ParallaxMD Interface Preview" className="w-full h-auto object-cover" />
                </div>
            </section>

            {/* Feature Grid */}
            <section id="features" className="py-24 bg-zinc-900/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Everything you need to write.</h2>
                        <p className="text-zinc-400 max-w-xl mx-auto">ParallaxMD combines the power of CodeMirror and Milkdown to give you a flawless editing experience.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-zinc-950 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition">
                            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                                <PenToolIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Two-Way Sync</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Edit in the raw markdown pane or format directly in the rich visual preview. Changes reflect instantly on both sides without cursor jumping.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-zinc-950 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition">
                            <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6">
                                <RocketIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Tauri Performance</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Ditch heavy Electron apps. ParallaxMD runs natively via WebView2 on Windows, resulting in lightning fast startup times and minimal RAM usage.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-zinc-950 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition">
                            <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center mb-6">
                                <LayoutTemplateIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">GitHub Flavored</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Full support for GFM including tables, strikethrough, task checklists, and native Mermaid flowchart rendering built directly into the UI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center text-zinc-500 text-sm">
                <p>Designed and Built by <a href="https://sanchez.ph" className="text-zinc-300 hover:text-white transition">Alfredo Sanchez Jr</a>.</p>
                <p className="mt-2">ParallaxMD is open source syntax released under the free license.</p>
            </footer>
        </div>
    );
}
