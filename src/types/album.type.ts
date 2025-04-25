export type AlbumType = {
        "album_type": string,
        "total_tracks": number,
        "external_urls": {
          "spotify": string
        },
        "id": string,
        "images": [
          {
            "url": string,
            "height": number,
            "width": number
          }
        ],
        "name": string,
        "release_date": string,
        "release_date_precision": string,
        "artists": [
          {
            "external_urls": {
              "spotify": string
            },
            "href": string,
            "id": string,
            "name": string,
            "type": string,
            "uri": string
          }
        ],
}

export interface AlbumsResponse {
    items: AlbumType[],
    total: number,
    limit: number,
    offset: number
}