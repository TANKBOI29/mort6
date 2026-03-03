import type { PropsWithChildren } from 'react'

export default function Background({ children }: PropsWithChildren) {
    return (
        <div className='min-h-screen w-screen h-screen flex flex-col'>
            <div id="hero" className="flex flex-1 h-full bg-neutral-900 align-items justify-center">
                {children}
            </div>
        </div>
    )
}