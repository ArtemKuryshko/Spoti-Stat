import { FC } from 'react';

interface ITracksList {
    tracks: any[];
}

const TracksList: FC<ITracksList> = ({ tracks }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mr-36 ml-36">
            {tracks.map((item: any) => (
                <div
                    key={item.track.id}
                    className="bg-dark_grey from-zinc-800 to-zinc-900 p-2 rounded-lg shadow-soft hover:shadow-deep hover:scale-101 transition-all w-65 h-95"
                >
                    <div className="flex flex-col items-center justify-center ">
                        <div>
                            <img
                                src={item.track.album.images[0].url}
                                alt={item.track.name}
                                className="w-60 h-60 object-cover rounded mb-2 mt-2"
                            />
                        
                            <h1 className="text-2xl font-extrabold text-white truncate w-[12rem] mb-3">
                                {item.track.name}
                            </h1>
                            <h2 className="font-semibold text-light_grey truncate w-[11rem] mb-2">
                                {item.track.artists.map((artist: any) => artist.name).join(', ')}
                            </h2>
                            <h2 className="text-sm font-medium text-light_grey truncate w-[11rem]">
                                {item.track.album.name}
                            </h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TracksList;