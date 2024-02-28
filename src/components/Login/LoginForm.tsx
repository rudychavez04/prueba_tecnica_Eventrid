import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/image/logo.png";

export type User = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Dirección de correo electrónico inválida")
        .required("El correo electrónico es requerido"),
      password: Yup.string().required("La contraseña es requerida"),
    }),
    onSubmit: async (values: User) => {
      try {
        const response = await fetch("http://localhost:3001/user");
        const users: User[] = await response.json();

        const user = users.find(
          (user: User) =>
            user.email === values.email && user.password === values.password
        );

        if (user) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/home");
          }, 1000);
        } else {
          formik.setStatus({ error: "Inicio de sesión fallido" });
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      } catch (error) {
        console.error("Error al intentar iniciar sesión:", error);
      }
    },
  });

  return (
    <div className="bg-gray-50 px-12 py-40 opacity-85">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="flex gap-2 p-4 rounded-lg">
            <div className="w-8 h-8 rounded-full animate-bounce bg-red-600"></div>
            <div className="w-8 h-8 rounded-full animate-bounce bg-blue-600"></div>
            <div className="w-8 h-8 rounded-full animate-bounce bg-green-600"></div>
          </div>
        </div>
      )}
      {showToast && (
        <div
          role="alert"
          className="rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 absolute top-4 right-4"
        >
          <div className="flex items-start gap-4">
            <span className="text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            <div className="flex-1">
              <strong className="block font-medium text-gray-900 dark:text-white">
                Error
              </strong>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                Correo y/o pasword incorrectos
              </p>
              <div className="mt-4 flex gap-2"></div>
            </div>

            <button className="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"></button>
          </div>
        </div>
      )}
      <div className="flex justify-center -mt-32">
        <img src={Logo} className="w-2/5" />
      </div>
      <h1 className="text-2xl  justify-center items-center flex font-semibold mt-4">
        Bienvenido!
      </h1>
      <p className="font-medium text-ls justify-center items-center flex text-gray-500 mt-4">
        Por favor ingresa tus credenciales
      </p>
      <form className="mt-8" onSubmit={formik.handleSubmit}>
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-white"
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>

          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-white"
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col gap-y-4">
          <button
            type="submit"
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.02] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
