import { FC } from 'react';

interface ITracksList {
    tracks: any[];
}

const TracksList: FC<ITracksList> = ({ tracks }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-28 mr-28">
            {tracks.map((item: any) => (
                <a
                    href={item.track.external_urls.spotify}
                    target="_blank"
                    key={item.track.id}
                    className="bg-dark_grey from-zinc-800 to-zinc-900 p-3 rounded-lg shadow-soft hover:shadow-deep hover:scale-105 transition-all w-102 flex items-center gap-4"
                >
                    <img
                        src={item.track.album.images[0]?.url}
                        alt={item.track.name}
                        className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex flex-col justify-center">
                        <h1 className="text-lg font-bold text-white truncate w-[14rem]">
                            {item.track.name}
                        </h1>
                        <h2 className="text-sm font-medium text-light_grey truncate w-[14rem]">
                            {item.track.artists.map((artist: any) => artist.name).join(', ')}
                        </h2>
                        <h3 className="text-xs font-light text-light_grey truncate w-[14rem] mt-1">
                            {item.track.album.name}
                        </h3>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default TracksList;