import React from 'react'
import { Sidebar } from './sidebar'
import { playlists } from '@/lib/data/playlists'
import Header from './header'
import Footer from './footer'
import AudioPlayer from './audioPlayer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-[50%] relative">
            <header>
                <Header />
            </header>
            <div className="flex-1 flex flex-row overflow-y-hidden">
                <main className="flex-1 overflow-y-auto p-4">
                    {children}
                </main>
                <nav className="order-first w-56">
                    <Sidebar playlists={playlists} className="hidden sm:block border-r dark:border-gray-800 border-gray-200" />
                </nav>
                <aside className="sm:w-16 overflow-y-auto border-l dark:border-gray-800 border-gray-200">
                </aside>
            </div>
            <Footer />
            <div className="fixed inset-x-0 bottom-24 p-4">
                <div className="rounded-lg bg-orange-500 px-4 py-3 text-white shadow-lg">
                    <p className="text-center text-sm font-medium">
                        Listen Ad Free Music without any subcription or Youtube Music Premium
                        <a href="#" className="inline-block underline">
                            {/* Check out this new course! */}
                        </a>
                    </p>
                </div>
            </div>
            <AudioPlayer />
        </div>
    )
}

export default Layout