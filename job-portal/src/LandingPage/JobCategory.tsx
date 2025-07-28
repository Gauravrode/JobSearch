import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <>
      <div className="text-4xl font-semibold text-yellow-100 mb-3 text-center ">
        Browse <span className="text-yellow-500">Job</span> Category
      </div>
      <div className="text-lg text-center text-gray-600">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      <Carousel
        withIndicators
        height={240}
        slideSize="22%"
        slideGap="md"
        emblaOptions={{ loop: true, align: "start", slidesToScroll: 3 }}
        nextControlIcon={<IconArrowRight size={16} color="black" />}
        previousControlIcon={<IconArrowLeft size={16} color="black" />}
        styles={{
          control: {
            backgroundColor: '#facc15',
            color: 'black',
            borderRadius: '50%',
            width: 36,
            height: 36,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: '#fbbf24',
            },
          },
        }}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center text-gray-300 w-64 border-2 border-yellow-500 m-3 p-3 rounded-lg shadow-md mt-10 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] transition duration-300 ease-in-out !shadow-yellow-300  ">
              <div className="bg-yellow-400 p-2 rounded-full h-10 w-10 mb-2">
                <img src={category.icon} alt={category.title} className="h-full w-full object-contain" />
              </div>
              <div className="text-gray-300 text-xl font-semibold">{category.title}</div>
              <div className="text-gray-500 text-sm text-center px-2 mt-1">{category.description}</div>
              <div className="text-gray-400 text-lg mt-2">{category.jobs}</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default JobCategory;
