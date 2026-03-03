import type { PropsWithChildren } from 'react'
export default function ({ children }: PropsWithChildren) {
    return (
        <>
        <div id="footer" className="flex h-full bg-neutral-900">
            {children}
        </div>
        </>
    )
    
}