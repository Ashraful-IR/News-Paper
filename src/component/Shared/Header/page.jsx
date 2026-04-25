
import { format, compareAsc } from "date-fns";
import { oldEnglish } from "../../../app/layout";

const HeaderPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-between gap-5 p-4">
      <h1 className={`${oldEnglish.className} text-[60px]`}>The Dragon News</h1>
      <p className="text-[20px]">Journalism Without Fear or Favour</p>
      <p className="text-[18px] font-medium"> {format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default HeaderPage;
