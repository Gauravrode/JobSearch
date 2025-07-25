import {
    IconAlien,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandX,
} from "@tabler/icons-react";
import { footerlinks } from "../Data/Data";

const Footer = () => {
    return (
        <div className="w-full bg-zinc-900 text-white px-6 mt-10 py-10 justify-around">
            <div className="flex flex-wrap gap-10 max-w-6xl mx-auto">

                <div className="w-full sm:w-1/4 p-4 mr-10">
                    <div className="flex gap-2 items-center pl-2 mb-2">
                        <IconAlien className="h-6 w-6" stroke={2} />
                        <div className="font-semibold text-3xl">iJobs</div>
                    </div>
                    <div className="text-sm text-gray-400 p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsum lorem.
                    </div>
                    <div className="flex gap-3 text-gray-400 p-2">
                        <IconBrandFacebook className="cursor-pointer hover:text-yellow-400" />
                        <IconBrandInstagram className="cursor-pointer hover:text-yellow-400" />
                        <IconBrandX className="cursor-pointer hover:text-yellow-400" />
                    </div>
                </div>


                {footerlinks.map((section, i) => (
                    <div key={i} className="w-full sm:w-1/5 p-4">
                        <div className="text-lg font-semibold mb-4">{section.title}</div>
                        {section.links.map((link, j) => (
                            <div
                                key={j}
                                className="text-gray-300 text-sm hover:text-yellow-400 cursor-pointer mb-2"
                            >
                                {link}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
