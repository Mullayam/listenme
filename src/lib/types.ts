import exp from "constants"

export interface Album {
    id: string
    name: string
    year: string
    type: string
    playCount: string
    language: string
    explicitContent: string
    songCount: string
    url: string
    primaryArtists: any[]
    featuredArtists: any[]
    artists: Artist[]
    image: Image[]
    songs: any[]
}

export interface Artist {
    id: string
    name: string
    url: string
    image: boolean
    type: string
    role: string
}

export interface Image {
    quality: string
    link: string
}

export interface Chart {
    id: string
    title: string
    subtitle: string
    type: string
    image: Image[]
    url: string
    firstname: string
    explicitContent: string
    language: string
}

export interface Song {
    id: string
    name: string
    type: string
    album: Album
    year: string
    releaseDate: string
    duration: string
    label: string
    primaryArtists: PrimaryArtist[]
    featuredArtists: any[]
    explicitContent: string
    playCount: string
    language: string
    url: string
    image: Image[]
}

export interface Album {
    id: string
    name: string
    url: string
}

export interface PrimaryArtist {
    id: string
    name: string
    url: string
    image: any
    type: string
    role: string
}
export interface Playlist {
    explicitContent: string;
    firstname: string;
    followerCount: string;
    id: string;
    image: Image[];
    lastUpdated: string;
    songCount: string;
    subtitle: string;
    title: string;
    type: string
    url: string;
    userId: string
}
export type HomePageData = {
    albums: Album[]
    charts: Chart[]
    playlists: Playlist[]
    trending: {
        songs: Song[]
        albums: Album[]
    }

}