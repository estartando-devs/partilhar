import { useState } from "react";
import * as S from "./styles";
import * as I from "../../assets/img";

const Upload = () => {
  const [image, setImage] = useState("");
  const [background, setBackground] = useState(I.upload);

  function saveFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      localStorage.setItem("wallpaper", base64String);
      setImage(`url(data:image/png;base64,${base64String})`);
    };
    reader.readAsDataURL(file);
  }

  function removeBackgroundImage() {
    setBackground("");
  }

  return (
    <S.Container>
      <S.ContainerInput>
        <S.Label img={image} onChange={removeBackgroundImage}>
          <S.Input
            type="file"
            id="file"
            onChange={(e) => saveFile(e)}
            accept="image/png,image/jpg,image/jpeg"
          />
          <S.Img src={background} alt="" />
        </S.Label>
        <S.Text>UPLOAD DA LOGO (máx: 3MB)</S.Text>
      </S.ContainerInput>
    </S.Container>
  );
};

export default Upload;
