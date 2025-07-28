interface ExpCardProps {
    title: string;
    company: string;
    location: string;
    date: string;
    logo: string;
    description: string;
}

const ExpCard = ({ title, company, location, date, logo, description }: ExpCardProps) => {
    return (
        <div className="my-3">
        <div className="flex items-center gap-3 justify-between my-2">
            <img
                src={logo}
                alt="Company Logo"
                className="w-10 h-10 object-contain mx-2"
            />
            <div className="flex flex-col justify-center w-full">
                <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-200 truncate whitespace-nowrap overflow-hidden max-w-[160px]">
                        {title}
                    </div>
                    <div className="text-sm text-gray-400">{date}</div>
                </div>
                <div className="text-xs text-gray-300">
                    {company} · {location}
                </div>
            </div>
      </div>
        <div className=" text-gray-400 mt-1">
          {description}
        </div>
        </div>
    );
};

export default ExpCard;
