import { axiosInstance } from "./instance";

enum SearchType {
    ALL = "all",
    SONG = "songs",
    ARTIST = "artists",
    ALBUM = "albums",
    PLAYLIST = "playlists"
}
export class ApiHandlers {

    static async homepageData(language: string = "hindi,english") {
        const { data } = await axiosInstance.get("/modules", {
            params: {
                language
            }
        })
        return data
    }
    static async search(type: SearchType, query: string,) {
        const { data } = await axiosInstance.get(`/search/${type}`, {
            params: {
                query
            }
        })
        return data
    }
    static async details(type: SearchType, link: string,) {
        const { data } = await axiosInstance.get(`/${type}`, {
            params: {
                link
            }
        })
        return data
    }
    static async lyrics(type: SearchType, id: string,) {
        const { data } = await axiosInstance.get(`/lyrics/${type}`, {
            params: {
                id
            }
        })
        return data
    }
}