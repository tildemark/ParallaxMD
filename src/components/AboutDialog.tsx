import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { HelpCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { getVersion, getTauriVersion } from "@tauri-apps/api/app"
import { platform, arch, version as osVersion } from "@tauri-apps/plugin-os"

declare global {
    interface Window {
        __TAURI_INTERNALS__?: Record<string, unknown>;
    }
}

export function AboutDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    const [appVersion, setAppVersion] = useState<string>("Loading...");
    const [tauriVersion, setTauriVersion] = useState<string>("Loading...");
    const [osInfo, setOsInfo] = useState<string>("Loading...");

    useEffect(() => {
        // Only run in Tauri environment
        if (typeof window !== "undefined" && window.__TAURI_INTERNALS__) {
            getVersion().then(setAppVersion).catch(() => setAppVersion("Unknown"));
            getTauriVersion().then(setTauriVersion).catch(() => setTauriVersion("Unknown"));

            Promise.all([platform(), arch(), osVersion()])
                .then(([p, a, v]) => setOsInfo(`${p} ${a} ${v} `))
                .catch(() => setOsInfo("Unknown"));
        } else {
            setAppVersion("Web Environment");
            setTauriVersion("N/A");
            setOsInfo("N/A");
        }
    }, []);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md bg-zinc-950 border-zinc-800 text-zinc-300">
                <DialogHeader>
                    <DialogTitle className="text-zinc-100 font-bold tracking-tight">ParallaxMD</DialogTitle>
                    <DialogDescription className="text-zinc-500">
                        A native Windows Markdown editor with two-way sync.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-4 py-4">
                    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-md font-mono text-xs text-zinc-400 space-y-2 select-text">
                        <div><span className="text-zinc-500 w-24 inline-block">App Version:</span> {appVersion}</div>
                        <div><span className="text-zinc-500 w-24 inline-block">Tauri Version:</span> {tauriVersion}</div>
                        <div><span className="text-zinc-500 w-24 inline-block">OS Platform:</span> {osInfo}</div>
                        <div><span className="text-zinc-500 w-24 inline-block">Environment:</span> {typeof window !== "undefined" && window.__TAURI_INTERNALS__ ? "Windows Desktop Engine" : "Web Browser"}</div>
                    </div>

                    <div className="text-sm space-y-1">
                        <h4 className="text-zinc-200 font-medium mb-2">Developed By</h4>
                        <p><strong>Name:</strong> Alfredo Sanchez Jr</p>
                        <p><strong>Email:</strong> <a href="mailto:derf@sanchez.ph" className="text-blue-400 hover:underline">derf@sanchez.ph</a></p>
                        <p><strong>Website:</strong> <a href="https://sanchez.ph" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://sanchez.ph</a></p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
