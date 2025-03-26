import { auth } from '@/auth';
import { getSavedTracks } from '@/services/tracks.service';
import { redirect } from 'next/navigation';
import { PathEnum } from '@/types/path.enum';

export default async function TracksPage() {
    const session = await auth();

    const response = await getSavedTracks(session?.accessToken as string);
    console.log(response);

    const tracks = response.data.items;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Your Saved Tracks</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tracks.map((item: any) => (
                    <div
                        key={item.track.id}
                        className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-start space-x-4">
                            <img
                                src={item.track.album.images[0].url}
                                alt={item.track.name}
                                className="w-24 h-24 object-cover rounded"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-white truncate">
                                    {item.track.name}
                                </h2>
                                <p className="text-zinc-400">
                                    {item.track.artists.map((artist: any) => artist.name).join(', ')}
                                </p>
                                <p className="text-sm text-zinc-500 mt-1">
                                    {item.track.album.name}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
