"use client";

import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-1 items-center">
            <Logo />
          </div>
      </div>
    </header>
  );
}
