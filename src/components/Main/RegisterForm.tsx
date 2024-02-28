import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../../assets/image/logo.png";
import { useNavigate } from "react-router-dom";

export type FormValues={
  name: string;
  description: string;
  urlImage: string;
  like: number;
  comment: number;
}
const RegisterForm = () => {
  const [successToast, setSuccessToast] = useState<boolean>(false);
  const [errorToast, setErrorToast] = useState<boolean>(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      urlImage: "",
      like: 0,
      comment: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("El titulo es requerido")
        .max(25, "El título debe tener como máximo 25 caracteres"),
      description: Yup.string()
        .required("La descripción es requerido")
        .max(100, "La descripción debe tener como máximo 100 caracteres"),
      urlImage: Yup.string().required("La Url de la imagen es requerido"),
      like: Yup.number().required("El N° de Like es requerido"),
      comment: Yup.number().required("El N° de comentarios es requerido"),
    }),
    onSubmit: async (values: FormValues, { resetForm }) => {
  
      try {
        const response = await fetch("http://localhost:3001/memes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          resetForm();

          setSuccessToast(true);
          setTimeout(() => {
            navigate("/home");
            setSuccessToast(false);
          }, 1000);
        } else {
          setErrorToast(true);
          setTimeout(() => {
            setErrorToast(false);
          }, 3000);
        }
      } catch (error) {
        setErrorToast(true);
        setTimeout(() => {
          setErrorToast(false);
        }, 3000);
      }
    },
  });

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 ">
      <div className="max-w-lg mb-14">
        <div className="">
          {successToast && (
            <div
              role="alert"
              className="rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 absolute top-4 right-4"
            >
              <div className="flex items-start gap-4">
                <span className="text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <div className="flex-1">
                  <strong className="block font-medium text-gray-900 dark:text-white">
                    Meme Creado
                  </strong>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                    Tu meme ha sido creado correctamente
                  </p>
                  <div className="mt-4 flex gap-2"></div>
                </div>

                <button className="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"></button>
              </div>
            </div>
          )}
          {errorToast && (
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
                   Se produjo un error al crear tu meme
                  </p>
                  <div className="mt-4 flex gap-2"></div>
                </div>

                <button className="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"></button>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center -mt-2">
          <img src={Logo} width={128} height={128} />
        </div>
        <div className="bg-[#292D39] w-full rounded-lg p-8 mb-8 mt-4 ">
          <div className="flex flex-col items-center gap-1 mb-8">
            <h1 className="text-xl text-white">Crear Meme</h1>
            <p className="text-gray-400 text-sm">Crea tu meme y disfruta !</p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
            <div className="relative">
              <label htmlFor="name" className="text-white">
                Titulo *
              </label>
              <input
                type="text"
                className="w-full border py-2 px-2 rounded-md outline-none"
                placeholder="Titulo"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="relative">
              <label htmlFor="name" className="text-white">
                Descripción *
              </label>
              <textarea
                className="w-full border py-2 px-2 rounded-md outline-none"
                placeholder="Descripción"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="text-red-500">{formik.errors.description}</div>
              ) : null}
            </div>
            <div className="relative">
              <label htmlFor="name" className="text-white">
                Url Imagen *
              </label>
              <input
                type="text"
                className="w-full border py-2 px-2 rounded-md outline-none"
                placeholder="Url Imagen"
                name="urlImage"
                value={formik.values.urlImage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.urlImage && formik.errors.urlImage ? (
                <div className="text-red-500">{formik.errors.urlImage}</div>
              ) : null}
            </div>
            <div className="relative">
              <label htmlFor="name" className="text-white">
                N° de Like *
              </label>
              <input
                type="number"
                className="w-full border py-2 px-2 rounded-md outline-none"
                placeholder="Cantidad de Like"
                name="like"
                value={formik.values.like}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.like && formik.errors.like ? (
                <div className="text-red-500">{formik.errors.like}</div>
              ) : null}
            </div>
            <div className="relative">
              <label htmlFor="name" className="text-white">
                N° de comentarios *
              </label>
              <input
                type="number"
                className="w-full border py-2 px-2 rounded-md outline-none"
                placeholder="Cantidad de comentarios"
                name="comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.comment && formik.errors.comment ? (
                <div className="text-red-500">{formik.errors.comment}</div>
              ) : null}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#243455] py-2 px-4 text-white rounded-md hover:bg-[#2BBE7A] transition-colors"
              >
                Crear Meme
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
