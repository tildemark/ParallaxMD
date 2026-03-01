"use client"

import { useEffect, useState } from "react"
import { Window } from "@tauri-apps/api/window"
import Image from "next/image"
import { MinusIcon, SquareIcon, XIcon, Moon, Sun, HelpCircle } from "lucide-react"
import { useTheme } from "./ThemeManager"
import { AboutDialog } from "./AboutDialog"
import { CheatsheetDialog } from "./CheatsheetDialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function TitleBar() {
    const [appWindow, setAppWindow] = useState<Window | null>(null)
    const [showAbout, setShowAbout] = useState(false);
    const [showCheatsheet, setShowCheatsheet] = useState(false);
    const [isTauri, setIsTauri] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.__TAURI_INTERNALS__) {
            setIsTauri(true);
            import("@tauri-apps/api/window").then((module) => {
                setAppWindow(module.getCurrentWindow())
            })
        }
    }, [])

    const { theme, setTheme } = useTheme();

    return (
        <div
            data-tauri-drag-region
            className="h-8 select-none flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-colors"
            style={{
                background: "transparent",
            }}
        >
            <div
                className="text-xs text-zinc-400 pl-4 font-medium flex items-center h-full flex-1 pointer-events-none gap-2"
                data-tauri-drag-region
            >
                <Image src="/logo.png" alt="ParallaxMD Logo" width={14} height={14} className="opacity-80" />
                <span>ParallaxMD {isTauri ? '' : '- Web Demo'}</span>
            </div>

            <div className="flex h-full items-center">

                <div className="flex px-2 space-x-1 border-r border-white/10 mr-1 h-5 items-center">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="inline-flex justify-center items-center w-11 h-full text-zinc-400 hover:bg-white/10 transition-colors cursor-pointer"
                        title={`Toggle to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                    >
                        {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    </button>
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <button className="inline-flex justify-center items-center w-11 h-full text-zinc-400 hover:bg-white/10 transition-colors cursor-pointer" title="Help">
                                <HelpCircle className="w-4 h-4" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 bg-zinc-950 border-zinc-800 text-zinc-300 shadow-xl">
                            <DropdownMenuItem onClick={() => setShowAbout(true)} className="hover:bg-zinc-800 focus:bg-zinc-800 focus:text-zinc-100 cursor-pointer">
                                About ParallaxMD
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setShowCheatsheet(true)} className="hover:bg-zinc-800 focus:bg-zinc-800 focus:text-zinc-100 cursor-pointer">
                                Markdown Cheatsheet
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <AboutDialog open={showAbout} onOpenChange={setShowAbout} />
                    <CheatsheetDialog open={showCheatsheet} onOpenChange={setShowCheatsheet} />
                </div>

                {!isTauri && (
                    <div className="flex items-center px-4">
                        <a href="https://github.com/derf/parallaxmd/releases" target="_blank" rel="noreferrer" className="text-[11px] bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded transition-colors font-medium">
                            Download for Windows
                        </a>
                    </div>
                )}

                {isTauri && (
                    <>
                        <div
                            className="inline-flex justify-center items-center w-11 h-full text-zinc-400 hover:bg-white/10 transition-colors cursor-pointer"
                            onClick={() => appWindow?.minimize()}
                        >
                            <MinusIcon className="w-4 h-4" />
                        </div>
                        <div
                            className="inline-flex justify-center items-center w-11 h-full text-zinc-400 hover:bg-white/10 transition-colors cursor-pointer"
                            onClick={() => appWindow?.toggleMaximize()}
                        >
                            <SquareIcon className="w-3.5 h-3.5" />
                        </div>
                        <div
                            className="inline-flex justify-center items-center w-11 h-full text-zinc-400 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                            onClick={() => appWindow?.close()}
                        >
                            <XIcon className="w-4 h-4" />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
