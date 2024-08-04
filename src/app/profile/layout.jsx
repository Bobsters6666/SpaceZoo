import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/profile/SideBar"
import ParticlesComponent from "../../components/Particles";

const ProfileLayout = ({ children }) => {

  return (
      <div className=" relative min-h-screen min-w-screen bg-cover bg-ceter " >
        <ParticlesComponent />
 
        <div className="relative z-10 text-gray-200 flex flex-row pt-[5rem]">
    
        <SideBar />
       
        {children}
        </div>
      
      </div>
    

  );
};
export default ProfileLayout;
