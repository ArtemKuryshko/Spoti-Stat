import { TracksService } from '@/services/tracks.service';
import TracksList from '@/components/modules/Tracks/TracksList';
export default async function TracksPage() {
    const { data } = await TracksService.getSavedTracks();

    const tracks = data.items;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Your Saved Tracks</h1>

            <TracksList tracks={tracks} />
        </div>
    );
}
