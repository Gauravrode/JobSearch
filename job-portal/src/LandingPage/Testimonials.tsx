import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";


const Testimonials = () => {

return (
    <>
      <div className="text-4xl font-semibold text-yellow-100 mb-3 text-center">
        What <span className="text-yellow-500">Users</span> say about us?
      </div>

      <div className="flex gap-5 mt-10 flex-wrap">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border-2 border-yellow-500 w-[23%] p-3 rounded-xl bg-gray-900"
          >
            <div className="flex gap-2 items-center mb-3">
              <Avatar className="!h-14 !w-14" src={item.avatar} alt={item.name} />
              <div>
                <div className="text-lg text-gray-200 font-semibold">{item.name}</div>
                <Rating defaultValue={item.rating} readOnly />
              </div>
            </div>
            <div className="text-gray-400 text-sm">{item.message}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
