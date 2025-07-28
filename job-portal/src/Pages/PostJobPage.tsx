import { Button, Divider } from "@mantine/core";
import { IconArrowLeft, IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "../TalentProfile/ExpCard";
import { experienceData } from "../Data/Data";
import CertiCard from "../TalentProfile/CertiCard";
import RecommendTalent from "../TalentProfile/RecommendTalent";
import { Link } from "react-router-dom";
import PostJob from "../PostJob/PostJob";

const PostJobPage = () => {
    return (
        <div>
            <PostJob></PostJob>
        </div>
    );
};

export default PostJobPage;
