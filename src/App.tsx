import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder"
import Layout from "./components/layout"
import { HomePageData } from "./lib/types"
import React from "react"
import { ApiHandlers } from "./lib/api/handlers"
import CardContainer from "./components/cardContainer"

export default function Home() {
  const [tabs, setTabs] = React.useState<null | HomePageData>(null)
  const fetchMusic = React.useCallback(async () => {
    const { data } = await ApiHandlers.homepageData()
    setTabs(data)
  }, [])
  React.useEffect(() => {
    fetchMusic()

  }, [])
  return (
    <Layout>
      <Tabs defaultValue="music" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger value="music" className="relative">
              Music
            </TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            <TabsTrigger value="live" disabled>
              Live
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto mr-4">
            <Button>
              <PlusCircledIcon className="mr-2 h-4 w-4" />
              Add music
            </Button>
          </div>
        </div>
        <TabsContent
          value="music"
          className="border-none p-0 outline-none"
        >
          {tabs !== null && <CardContainer title="Listen Now" label="Top picks for you. Updated daily." type="songs" tabs={tabs} />}
          {tabs !== null && <CardContainer title="Made for You" label="Your personal playlists. Updated daily." type="albums" tabs={tabs} />}

        </TabsContent>
        <TabsContent
          value="podcasts"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                New Episodes
              </h2>
              <p className="text-sm text-muted-foreground">
                Your favorite podcasts. Updated daily.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <PodcastEmptyPlaceholder />
        </TabsContent>
      </Tabs>
    </Layout>
  )
}
