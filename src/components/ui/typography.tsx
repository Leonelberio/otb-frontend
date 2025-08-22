"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

// H1 Component - Hero Titles
function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl text-white mb-6 font-semibold leading-[38px] md:leading-[44px] tracking-[-2.1px]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

// H2 Component - Section Titles
function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl text-gray-900 mb-6 font-semibold leading-[26px] md:leading-[40px] tracking-[-1.6px]",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

// H3 Component - Subsection Titles
function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-xl md:text-2xl text-gray-900 mb-4 font-semibold leading-6 md:leading-8 tracking-[-0.5px]",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

// P Component - Body Text
function P({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn("text-lg text-gray-600", className)}
      style={{
        lineHeight: "30px",
        letterSpacing: "-1px",
      }}
      {...props}
    >
      {children}
    </p>
  );
}

export { H1, H2, H3, P };
