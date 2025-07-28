const certi = {
  title: "Full Stack Web Development",
  company: "Coursera",
  location: "Online",
  date: "Jan 2023 - Apr 2023",
  logo: "./coursera-logo.png",
  id: "CRS-2023-001"
};

const CertiCard = () => {
  return (
    <div className="my-3 ">
      <div className="flex items-center gap-3 justify-between my-2">
        <img
          src={certi.logo}
          alt="Company Logo"
          className="w-10 h-10 object-contain ml-5 mx-2"
        />
        <div className="flex flex-col justify-center w-full">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-200 truncate whitespace-nowrap overflow-hidden max-w-[160px]">
              {certi.title}
            </div>
            <div>
              <div className="text-sm text-gray-400">{certi.date}</div>
              <div className="text-xs text-gray-400 mt-1">{certi.id}</div>
            </div>
          </div>
          <div className="text-xs text-gray-300">
            {certi.company} · {certi.location}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CertiCard;
