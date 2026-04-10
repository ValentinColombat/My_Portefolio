import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type LoadingContextType = {
    isReady: boolean
    setReady: () => void
}

const LoadingContext = createContext<LoadingContextType>({
    isReady: false,
    setReady: () => {},
})

export const useLoading = () => useContext(LoadingContext)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation()
    const [isReady, setIsReady] = useState(pathname !== '/')

    useEffect(() => {
        if (pathname !== '/') setIsReady(true)
    }, [pathname])

    return (
        <LoadingContext.Provider value={{ isReady, setReady: () => setIsReady(true) }}>
            {/* Overlay spinner */}
            {!isReady && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-100">
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-12 h-12 rounded-full border-2 border-stone-200 border-t-amber-500 animate-spin" />
                        <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">Chargement</span>
                    </div>
                </div>
            )}
            <div className={`transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
        </LoadingContext.Provider>
    )
}
