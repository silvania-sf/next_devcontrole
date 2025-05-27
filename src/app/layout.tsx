import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { AuthProvider } from "@/providers/auth";
import { ModalProvider } from "@/providers/modal";

export const metadata: Metadata = {
  title: "Dev Controle - seu sistema de gerenciamento",
  description: "Gerencie seus clientes e atendimentos de forma fácil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ModalProvider>
            <Header/>
            {children}
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
