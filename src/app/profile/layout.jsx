import NavBar from "../../components/NavBar";
import SideBar from "../../components/profile/SideBar"

const ProfileLayout = ({ children }) => {
  const backgroundImageStyle = {
    backgroundImage: "url('/profilebg.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
  }
  return (
  
      <div style={backgroundImageStyle} className=" text-gray-200 flex flex-row pt-[5rem]">
        <SideBar />
        {children}
      </div>
    

  );
};
export default ProfileLayout;
