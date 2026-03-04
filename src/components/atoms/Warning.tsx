import type { PropsWithChildren } from 'react'
import { Box } from '@mui/material'
import { CookiesProvider, useCookies } from 'react-cookie'

export default function WarningWrapper({ children }: PropsWithChildren) {
    return (
        <CookiesProvider>
            <Warning>{children}</Warning>
        </CookiesProvider>
    )
}

function Warning({ children }: PropsWithChildren) {
    const [cookies, setCookie] = useCookies(['accepted'])

    function handleAccept() {
        setCookie('accepted', true, { path: '/', maxAge: 60 * 60 * 24 * 7 })
    }

    return (
        <>
            {children}
            {!cookies.accepted && (
                <Box id="warning">
                    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xs">
                        <div className="bg-neutral-900 rounded-sm p-8 max-w-md mx-4 shadow-lg">
                            <h2 className="text-xl font-bold mb-3 text-white">Warning</h2>
                            <p className="text-white mb-6">
                                Due to uncontrollable factors, I cannot guarantee a 100% accuracy with this calculator, especially with charges. Please note that your shell may not always land directly on your target, this is out of my hands atm so please bare with me as I work on a fix.
                            </p>
                            <button
                                onClick={handleAccept}
                                className="w-full bg-white hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-lg transition-colors"
                            >
                                Understood
                            </button>
                        </div>
                    </div>
                </Box>
                
            )}
        </>
    )
}