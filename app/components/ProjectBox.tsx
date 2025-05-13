import React from 'react';
import Link from 'next/link';

interface ProjectBoxProps{
    name: string;
    link: string;
}
const ProjectBox: React.FC<ProjectBoxProps> = ({name, link}) =>{
    return (
        <Link href={link}>
            <div className="bg-black text-sm text-white hover:bg-gray-700 rounded-2xl shadow-md w-35 aspect-square transition duration-200 cursor-pointer flex items-center justify-center text-center">
                <h2 className="text-lg font-semibold">{name}</h2>
            </div>
        </Link>
    );
};
export default ProjectBox;