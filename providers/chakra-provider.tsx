"use client";

import { ChakraProvider } from "@chakra-ui/react";

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      {children}
    </ChakraProvider>
  );
}
