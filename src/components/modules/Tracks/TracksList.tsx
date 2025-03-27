import { FC } from 'react';

interface ITracksList {
    tracks: any[];
}

const TracksList: FC<ITracksList> = ({ tracks }) => {
    return (
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
    );
};

export default TracksList;