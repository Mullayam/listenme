import { AlbumArtwork } from '@/components/album-artwork'
import { ScrollBar } from '@/components/ui/scroll-area'
import { madeForYouAlbums } from '@/lib/data/albums'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Separator } from '@radix-ui/react-separator'
import React from 'react'

const Album = () => {
    return (
        <div>
            <div className="mt-6 space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Made for You
                </h2>
                <p className="text-sm text-muted-foreground">
                    Your personal playlists. Updated daily.
                </p>
            </div>
            <Separator className="my-4" />
            <div className="relative">
                <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                        {madeForYouAlbums.map((album) => (
                            <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"

                            />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    )
}

export default Album