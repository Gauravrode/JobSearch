import Marquee from "react-fast-marquee";

const companyLogos = [
    "icons8-google-logo-480",
    "icons8-amazon-500",
    "icons8-flipkart-500",
    "—Pngtree—bird and fly company logo_3777052",
    "icons8-tata-motors-96",
];

const Companies = () => {
    return (
        <div className="mb-5 text-center">
            <div className="text-4xl font-semibold text-yellow-100 mb-4">
                Trusted by <span className="text-yellow-500">1000+</span> companies
            </div>

            <Marquee speed={50} pauseOnHover={true}>
                {companyLogos.map((company, index) => (
                    <div key={index} className="flex items-center justify-center mx-20 h-20-6 hover:bg-gray-500 rounded-xl cursor-pointer ">
                        <img
                            src={`/Companies/${company}.png`}
                            alt={company}
                            className="h-16 object-contain"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Companies;
