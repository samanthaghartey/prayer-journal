import { FaPencil, FaTrash, FaCheck } from "react-icons/fa6";

const RequestItem = () => {
  return (
    <div className="bg-accent2 px-4 py-3 flex w-11/12 rounded-lg">
      <div className="img w-40">
        <img src="../assets/home.jpg" alt="" />
      </div>
      <div className="text flex flex-col gap-1">
        <div className="heading font-bold text-deepblue">
          Admission into University
        </div>
        <div className="note text-sm pr-2 w-5/6">
          I want to gain admission into the university to pursue a bachelors in
          Law and Sociology
        </div>
        <div className="date-and-icons flex justify-between">
          <p className="text-sm opacity-70">13/11/2025</p>
          <div className="icons flex justify-between w-20 text-deepblue">
            <FaPencil />
            <FaTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
