
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testimonials from "../LandingPage/Testimonials";
import Working from "../LandingPage/Working";

const HomePage=()=>{
return(
<div className="bg-zinc-950 font-['poppins']">
<Header></Header>
<DreamJob></DreamJob>
<Companies></Companies>
<JobCategory></JobCategory>
<Working></Working>
<Testimonials></Testimonials>
<Subscribe></Subscribe>
<Footer></Footer>
</div>

);
}

export default HomePage;