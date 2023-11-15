import React from 'react'
import { Sidebar } from './sidebar'
import { playlists } from '@/lib/data/playlists'
import Header from './header'
import Footer from './footer'
import AudioPlayer from './audioPlayer'
import { Outlet } from 'react-router-dom'
import RightSidebar from './rightSidebar'
// import AdBanner from './adBanner'

const Layout = () => {
    return (
        <div className="flex flex-col h-screen relative overflow-y-hidden">
            <header>
                <Header />
            </header>
            <div className="flex-1 flex flex-row overflow-y-hidden pt-16">
                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </main>
                <nav className="order-first w-56">
                    <Sidebar playlists={playlists} className="hidden sm:block border-r dark:border-gray-800 border-gray-200" />
                </nav>
                <aside className="sm:w-16 overflow-y-auto border-l dark:border-gray-800 border-gray-200">
                  <RightSidebar/>
                </aside>
            </div>
            <Footer />
            {/* <AdBanner/> */}
            <AudioPlayer />
        </div>
    )
}

export default Layout