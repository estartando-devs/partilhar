import { registerWithEmailAndPassword } from "./auth.service";
import { fetch, save } from "./firebase/handlers";

const basePath = process.env.REACT_APP_BASE_PATH;

export const getOngs = async () => {
  const response = await fetch(`${basePath}/ongs`);
  return response;
};

export const createOngs = async (body) => {
  const response = await save(`${basePath}/ongs`, body);
  return response;
};

export const registerOng = async (body) => {
  localStorage.removeItem("datas");

  const formatedImages = body.projectImages
    .map((item) => ({
      url: item.url,
      name: item.name,
    }))
    .filter((item) => item.url);

  const { email, password, isGoogleUser } = body;

  if (isGoogleUser) {
    const newBody = {
      ...body,
      projectImages: [],
      logo: "",
    };

    const response = await createOngs(newBody);

    localStorage.setItem(
      "userOng",
      JSON.stringify({ ...body, projectImages: formatedImages })
    );
    return response;
  }

  const responseUser = await registerWithEmailAndPassword({
    email,
    password,
  });
  if (!responseUser) return responseUser;

  const newBody = {
    ...body,
    userId: responseUser.user.id,
    projectImages: [],
    logo: "",
  };

  delete body.password;
  delete body.confirmPassword;

  const response = await createOngs(newBody);
  localStorage.setItem("user", JSON.stringify(responseUser.user));
  localStorage.setItem(
    "userOng",
    JSON.stringify({ ...body, projectImages: formatedImages })
  );
  return response;
};
