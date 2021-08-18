import { useState } from "react";
import * as S from "./styles";
import * as I from "../../assets/img";

const Upload = ({ onUpload, image }) => {
  const [preview, setPreview] = useState("");
  const [text, setText] = useState("");

  function saveFile(e) {
    setPreview("");
    const file = e.target.files[0];
    if (file.size > 2668799) {
      setText(
        "O arquivo selecionado é muito grande. Selecione um menor (máx 3MB)!"
      );
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      setPreview(`data:image/png;base64,${base64String}`);
      onUpload(`data:image/png;base64,${base64String}`);
      setText("");
    };
    reader.readAsDataURL(file);
  }
  const showImage = preview || image;

  return (
    <S.Container>
      <S.ContainerInput>
        <S.Label>
          <S.Alert>{text}</S.Alert>
          <S.Input
            type="file"
            id="file"
            onChange={(e) => saveFile(e)}
            accept="image/png,image/jpg,image/jpeg"
          />
          {showImage && !text && <S.Img src={preview || image} alt="Image" />}
          {!showImage && !text && <S.Icon src={I.upload} alt="" />}
        </S.Label>
        <S.Text>UPLOAD DA LOGO (máx: 3MB)</S.Text>
      </S.ContainerInput>
    </S.Container>
  );
};

export default Upload;
