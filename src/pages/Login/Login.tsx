import LoginForm from "../../components/Login/LoginForm";
import imagenLogin from "../../assets/image/login-image.jpg";

const Login = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600">
      <div className="lg:w-7/12  flex w-full ">
        <div className="w-full m-4 items-center  lg:w-1/2 lg:m-0 ">
          <LoginForm />
        </div>
        <div className="hidden lg:flex w-1/2 bg-white ">
          <div className="ml-2">
            <img
              className="w-full h-full object-fit"
              src={imagenLogin}
              alt="Login Meme"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
