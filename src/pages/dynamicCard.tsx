import { AlbumArtwork } from '@/components/album-artwork'
import { HomePageData } from '@/lib/types'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Separator } from '@radix-ui/react-separator'
import { Charts } from './charts'
import { Playlists } from './playlists'

const DynamicCard = ({ tabs, title, label, type }: { tabs: HomePageData, title: string, label: string, type: keyof HomePageData }) => {


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
            <div className="relative ">
                <ScrollArea >
                    <div className="flex flex-row flex-wrap gap-4 pb-28">
                        {tabs !== null && type === "albums" &&
                            tabs["albums"].map((album) => {
                                return (
                                    <AlbumArtwork album={album} key={album.id} />
                                )
                            })
                        }
                        {tabs !== null && type === "playlists" &&
                            tabs["playlists"].map((playlists) => {
                                return (
                                    <Playlists playlist={playlists} key={playlists.id} />
                                )
                            })
                        }
                        {tabs !== null && type === "charts" &&
                            tabs["charts"].map((charts) => {

                                return (
                                    <Charts charts={charts} key={charts.id} />
                                )
                            })
                        }

                    </div>


                </ScrollArea>
            </div>
        </>
    )
}

export default DynamicCard