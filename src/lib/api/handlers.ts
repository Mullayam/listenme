import { axiosInstance } from "./instance";

export class ApiHandlers {

    static async homepageData(language: string = "hindi,english") {
        const { data } = await axiosInstance.get("/modules", {
            params: {
                language
            }
        })
        return data
    }
}