"use client";

import { useEffect, useState } from "react";
import { decodeHtmlEntitiesSSR } from "@/utils/htmlUtils";

interface SafeTextProps {
  children: string;
  className?: string;
  as?: React.ElementType;
}

export default function SafeText({
  children,
  className,
  as: Component = "span",
}: SafeTextProps) {
  const [decodedText, setDecodedText] = useState(children);

  useEffect(() => {
    // For client-side, we can use the DOM method
    const textarea = document.createElement("textarea");
    textarea.innerHTML = children;
    setDecodedText(textarea.value);
  }, [children]);

  // For SSR, use the regex method
  const ssrDecodedText = decodeHtmlEntitiesSSR(children);

  return (
    <Component className={className}>
      {typeof window !== "undefined" ? decodedText : ssrDecodedText}
    </Component>
  );
}
