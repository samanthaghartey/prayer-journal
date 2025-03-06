import { Link } from "react-router";
import RequestItem from "../components/Request";

const Dashboard = () => {
  return (
    <div className="bg-white px-10 py-10 lg:px-28 flex flex-col gap-8 min-h-full">
      <div className="hero text-black bg-primary rounded-md p-4">
        <div className="text">
          <h1>Hi Sam</h1>
          <p>Do you have any? prayers on your heart</p>
        </div>
      </div>

      <div className="links flex justify-between">
        <Link to="/requests">
          <div className="requests bg-secondary rounded-md lg:px-5 lg:py-3 sm:p-2 sm:text-sm flex items-center  ">
            <span className="font-bold text-2xl mr-1">5 </span> Prayer Requests
          </div>
        </Link>
        <Link to="/answered">
          <div className="answered  bg-accent1 rounded-md lg:px-5 lg:py-3 sm:p-2 sm:text-sm flex items-center ">
            {" "}
            <span className="font-bold text-2xl mr-1">5 </span> Answered Prayers
          </div>
        </Link>
        <Link to="/verses">
          <div className="verses  bg-accent2 rounded-md lg:px-5 lg:py-3 sm:p-2 sm:text-sm flex items-center ">
            {" "}
            <span className="font-bold text-2xl mr-1">5 </span> Favourite Verses
          </div>
        </Link>
      </div>

      <div className="requests-list flex flex-col gap-2">
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
        <RequestItem />
      </div>
    </div>
  );
};

export default Dashboard;
