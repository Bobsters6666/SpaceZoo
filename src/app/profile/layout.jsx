import SideBar from "@/components/profile/SideBar";

const ProfileLayout = ({ children }) => {
  return (

      <div className="flex flex-row bg-[#BCD8C1] min-h-screen pt-[5rem]">
        <SideBar />
        {children}
      </div>

  );
};
export default ProfileLayout;
