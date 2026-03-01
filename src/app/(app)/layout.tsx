import "../globals.css";
import TitleBar from "@/components/TitleBar";
import { ThemeProvider } from "@/components/ThemeManager";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full">
      <ThemeProvider>
        <TitleBar />
        <div className="pt-8 h-screen w-screen overflow-hidden">
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
}
