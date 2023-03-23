import { FaAward } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { BiHappyHeartEyes } from "react-icons/bi";
import { PATH } from "../../../constants/path";

const data = [
  { id: 1, icon: <FaAward />, title: "Skils", desc: "", link: "" },
  {
    id: 2,
    icon: <TbBooks />,
    title: "Blogs",
    desc: "operate four blogs.",
    link: PATH.blogs,
  },
  {
    id: 3,
    icon: <BiHappyHeartEyes />,
    title: "Likes",
    desc: "",
    link: "",
  },
];

export default data;
