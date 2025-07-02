import { PiDotsThreeVerticalLight } from "react-icons/pi";

export const Profile = ({isOpen}: {isOpen: boolean}) => {
  return (
    <div>
      {isOpen ? (
        <>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-gray-300 cursor-pointer">
            <img
              src="profile.jpg"
              className="w-8 h-8 rounded-full"
              alt="saubhagya sapkota"
            />
            <div className={`${isOpen ? "opacity-100" : "opacity-0 w-0"}`}>
              <div className="flex justify-between space-x-5">
                <div>
                  <p className="text-sm font-medium">Saubhagya sapkota</p>
                  <p className="text-xs text-gray-500">saubhagya@gmail.com</p>
                </div>
                <PiDotsThreeVerticalLight className="mt-1 text-xl" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <img
          src="profile.jpg"
          className="w-8 h-8 rounded-full"
          alt="saubhagya sapkota"
        />
      )}
    </div>
  );
};
