import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className="flex flex-grow w-full justify-center dark:bg-neutral-950">
        <div className="max-w-[920px] dark:bg-red-500 flex flex-col flex-grow py-12 px-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
