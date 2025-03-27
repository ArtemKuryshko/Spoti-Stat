export interface Artist {
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string | null;
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: Array<{
        url: string;
        height: number;
        width: number;
    }>;
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface ArtistsResponse {
    items: Artist[];
    total: number;
    limit: number;
    offset: number;
}

export interface ArtistsFollowingResponse {
    artists: ArtistsResponse;
}