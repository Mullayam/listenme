import { ApiHandlers } from '@/lib/api/handlers'
import { slugify } from '@/lib/helpers'
import { AlbumSearchRequest } from '@/lib/types/album.interface'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DisplayAlbum = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [albumData, setAlbumData] = React.useState<AlbumSearchRequest>()
    const fetchAlbum = React.useCallback(async () => {       
        const { data } = await ApiHandlers.search("albums",`${params.albumName}`)
        setAlbumData(data)
    }, [])
    React.useEffect(() => {
        if (params.albumName) {
            fetchAlbum()
        }
    }, [params.albumName])
    if (params.albumName === undefined || params.albumName === null) {
        return navigate('/albums')
    }
 

    return (
        <div>{slugify(params.albumName, { inverse: true, replacement: " " })}</div>
    )
}

export default DisplayAlbum