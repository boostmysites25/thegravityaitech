import { GiArrowScope } from "react-icons/gi";

const SubHeading = ({ heading, className }) => {
  return (
    <div className="flex items-center gap-2">
      <GiArrowScope className="w-7 h-7 min-w-7 text-primary" />
      <h2 className={`${className} text-lg`}>{heading}</h2>
    </div>
  );
};

export default SubHeading;
