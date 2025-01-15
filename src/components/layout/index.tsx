import { ReactNode } from "react";
import Header from "../header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
