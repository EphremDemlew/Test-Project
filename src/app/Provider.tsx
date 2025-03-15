"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react' // Import useState

interface Props {
    children: ReactNode
}

const QueryProvider = ({ children }: Props) => {
    // Initialize QueryClient inside the component
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default QueryProvider;