import { fetch, save } from "./firebase/handlers";

const basePath = process.env.REACT_APP_BASE_PATH;

export const fetchOngs = async () => {
  const response = await fetch(`${basePath}/ongs`);
  return response;
};

export const createOngs = async (body) => {
  const response = await save(`${basePath}/ongs`, body);
  return response;
};

export const registerOng = async (body) => {
  const projectImages = body.projectImages
    .map((image) => image.url)
    .filter((item) => item);
  const newBody = { ...body, projectImages };
  const response = await createOngs(newBody);
  return response;
};
