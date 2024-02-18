"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AuthProvider from "./AuthProvider"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default Providers