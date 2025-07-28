
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testimonials from "../LandingPage/Testimonials";
import Working from "../LandingPage/Working";

const HomePage = () => {
    return (
        <div className="pb-20 bg-zinc-950 font-['poppins']">
            <DreamJob></DreamJob>
            <Companies></Companies>
            <JobCategory></JobCategory>
            <Working></Working>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>

        </div>

    );
}

export default HomePage;