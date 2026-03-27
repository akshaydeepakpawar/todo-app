"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { useState } from "react";

const QueryProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return <div>
    <QueryClientProvider client={queryClient}>
        {children}
        <Toaster/>
    </QueryClientProvider>
  </div>;
};

export default QueryProvider;
