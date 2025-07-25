
import { jobCategory, work } from "../Data/Data";


const Working = () => {

    return (
        <div className="mt-20 ">

            <div className="text-4xl font-semibold text-yellow-100 mb-3 text-center">
                How it <span className="text-yellow-500">Works!</span>
            </div>
            <div className="text-lg text-center text-gray-600">
                Explore diverse job opportunities tailored to your skills. Start your career journey today!
            </div>

            <div className="flex ">
                <div className="m-10">
                    <img src="workingwomen.png" alt="" />
                </div>

                <div className="flex flex-col gap-20 justify-center ml-20">
                    {work.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div>
                                <img src={item.image} alt={item.title} className="h-16 w-16" />
                            </div>
                            <div className="flex flex-col ml-5">
                                <div className="text-gray-200 text-lg font-semibold">{item.title}</div>
                                <div className="text-gray-600">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>




    );




}
export default Working;