import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'
import MusicCard from './musicCard'
import { ScrollBar } from './ui/scroll-area'
import { HomePageData } from '@/lib/types'
import { AlbumArtwork } from './album-artwork'

const CardContainer = (
    { tabs ,title,label,type}:{tabs: HomePageData,title:string,label:string,type:keyof HomePageData["trending"]}) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {label}  
                    </p>
                </div>
            </div>
            <Separator className="my-4" />
            <div className="relative">
                <ScrollArea>
                    <div className="flex flex-row flex-wrap gap-4">
                        {/* <div className="flex flex-row flex-wrap gap-4"> */}
                        {/* grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 */}
                        {tabs !== null && type === "songs" &&
                            tabs.trending["songs"].map((song) => {
                                return (
                                    <MusicCard song={song} key={song.id} />
                                )
                            })
                        }
                         {tabs !== null && type === "albums" &&
                            tabs.trending["albums"].map((album) => {
                                return (
                                    <AlbumArtwork album={album} key={album.id} />
                                )
                            })
                        }
                    </div>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </div>
        </>
    )
}

export default CardContainer