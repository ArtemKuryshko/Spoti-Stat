import { Artist } from "@/types/artist.types";
import { ArtistsService } from "./artists.service";

export const GenresService = {
    getTopGenres: async () => {
        const artists = await ArtistsService.getTopListenedArtists(50);

        const genres = artists.map((artist: Artist) => artist.genres);

        const uniqueGenres = [...new Set(genres.flat())].splice(0, 5);

        return uniqueGenres;
    },
};
