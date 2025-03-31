import { FC } from 'react';
interface IUserIcon {
    name: string;
    image: string;
}

const UserIcon: FC<IUserIcon> = ({ name, image }) => {
    return (
        <div>
            <img src={image} alt={name} className="w-[50px] h-[50px] rounded-full mr-12" />
        </div>
    )}
export default UserIcon;