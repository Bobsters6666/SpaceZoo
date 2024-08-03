import NavBar from "../../components/NavBar";
import SideBar from "../../components/profile/SideBar"

const ProfileLayout = ({ children }) => {

  return (
      <div className=" relative min-h-screen min-w-screen bg-cover bg-ceter " style={{ backgroundImage: "url('/profilebg.jpeg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-gray-200 flex flex-row pt-[5rem]">
        <SideBar />
       
        {children}
        </div>
      
      </div>
    

  );
};
export default ProfileLayout;
