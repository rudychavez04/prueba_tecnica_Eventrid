import RegisterForm from "../components/Main/RegisterForm";
import Sidebar from "../components/Navigation/Sidebar";

const Register = () => {
  return (
    <div className="bg-[#222327] w-full min-h-screen">
      <Sidebar />

      <RegisterForm />
    </div>
  );
};

export default Register;
