import { Box, Button, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification } from '@mantine/core';


type OverlayContextType = {
    openOverlay: () => void;
    closeOverlay: () => void;
};



const ApplyJob = () => {

    const { state: job } = useLocation();
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();
    const { openOverlay, closeOverlay } = useOutletContext<OverlayContextType>();


    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const handleSubmit = () => {
        setSubmit(true);
        openOverlay();
        let x = 5;


        setInterval(() => {
            setSec(x);
            x--;

            if (x == 0) {
                closeOverlay();
                navigate('/find-jobs');
            }

        }, 800)


    }


    return (



        <div>
            <div className="flex items-center gap-3 justify-between">
                <img src={job.logo} alt="Company Logo" className="w-10 h-10 object-contain" />
                <div className="flex flex-col justify-center w-full ">
                    <div className="flex justify-between items-center mr-10">
                        <div className="text-lg font-semibold text-gray-200 truncate whitespace-nowrap overflow-hidden max-w-[160px]">
                            {job.title}
                            <div className="text-xs text-gray-300">
                                4K+ Employees
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <Button
                                variant="light"
                                size="lg"
                                className="m-3 text-lg font-semibold my-5"
                                style={{ width: "200px", height: "40px" }}
                            >
                                Company page
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
            <Divider my="xl" />

            <div className="m-16 ">
                <div className="text-xl font-semibold mb-5 text-center">Submit Your Application</div>
                <div>
                    <div className="flex gap-10 [&>*]:w-1/2 my-10">
                        <TextInput label="Full Name" readOnly={preview} variant={preview ? "unstyle" : "default"} withAsterisk placeholder="Enter Name " />
                        <TextInput label="Email" readOnly={preview} variant={preview ? "unstyle" : "default"} withAsterisk placeholder="Enter Email " />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2 my-10">
                        <NumberInput label="Phone No" readOnly={preview} variant={preview ? "unstyle" : "default"} withAsterisk hideControls placeholder="Enter No " max={9999999999} clampBehavior="strict" />
                        <TextInput label="Personal Website" readOnly={preview} variant={preview ? "unstyle" : "default"} withAsterisk placeholder="Enter Url " />
                    </div>
                    <FileInput leftSection={<IconPaperclip />} readOnly={preview} variant={preview ? "unstyle" : "default"} label="Attach your cv" placeholder="your cv" leftSectionPointerEvents="none" />
                    <Textarea
                        className="my-10"
                        label="Cover letter"
                        placeholder=""
                        rows={4} readOnly={preview} variant={preview ? "unstyle" : "default"}

                    />
                </div>

                {preview ? <div className="flex justify-center items-center w-full">
                    <Button
                        onClick={handleSubmit}
                        variant="light"
                        size="lg"
                        className="m-3 text-lg font-semibold my-5"
                        style={{ width: "300px", height: "40px" }}
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={handlePreview}
                        variant="light"
                        size="lg"
                        className="m-3 text-lg font-semibold my-5"
                        style={{ width: "300px", height: "40px" }}
                    >
                        Edit
                    </Button>
                </div> : <div className="flex justify-center items-center w-full" >  <Button
                    onClick={handlePreview}
                    variant="light"
                    size="lg"
                    className="m-3 text-lg font-semibold my-5"
                    style={{ width: "300px", height: "40px" }}
                >
                    preview
                </Button></div>}
            </div>

            <div
                className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-[2000] transition-all duration-500 ease-in-out
    ${submit ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}  `}
            >
                <Notification
                    icon={<IconCheck size={20} />}
                    color="teal"
                    title="Submitted Successfully!"
                    withCloseButton={false}
                    withBorder
                    className="bg-white shadow-lg"

                >
                    Redirecting to FindJobs in {sec} seconds...
                </Notification>
            </div>
        </div>

    );

}

export default ApplyJob;