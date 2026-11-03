import type { ReactNode } from 'react';

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 p-4">
      <div className="relative w-full max-w-[420px] h-[min(900px,calc(100vh-2rem))] bg-neutral-900 rounded-[2.5rem] border-[6px] border-neutral-800 shadow-2xl overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
}