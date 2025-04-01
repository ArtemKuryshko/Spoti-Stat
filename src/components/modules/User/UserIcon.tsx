import { FC } from 'react';

interface IUserIcon {
    name: string;
    image: string;
}

const UserIcon: FC<IUserIcon> = ({ name, image }) => {
    return (
        <div>
            <img src={image} alt={name}  className="w-[50] h-[50] rounded-full mr-12" />
        </div>
    )}
export default UserIcon;