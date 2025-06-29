"use client";

import { Bar, Progress } from "@bprogress/next";
import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="3px"
      color="#ffc400"
      options={{ showSpinner: false, template: null }}
      shallowRouting
    >
      <div>
        <Progress>
          <Bar className="!absolute !top-[80px] !z-0" />
        </Progress>
      </div>
      {children}
    </ProgressProvider>
  );
};

export default Providers;
