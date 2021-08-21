import { useState } from "react";
import * as S from "./styles";
import * as I from "../../assets/img";

const Upload = ({ onUpload, image, inlineUpload, initialName }) => {
  const [preview, setPreview] = useState("");
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState(initialName || "");
  const [progress, setProgress] = useState("upload");

  function saveFile(e) {
    setFileName("");
    setPreview("");
    setProgress("loading");
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
      onUpload({
        name: file.name,
        url: `data:image/png;base64,${base64String}`,
      });

      setTimeout(() => {
        setText("");
        setProgress("checked");
        setFileName(file.name);
      }, [3000]);
    };
    reader.readAsDataURL(file);
  }

  const cloudStatus = {
    upload: I.uploadCloud,
    loading: I.uploadCloudLoading,
    checked: I.uploadCloudChecked,
  };

  const showImage = (preview || image) && !inlineUpload;

  return (
    <S.Container inlineUpload={inlineUpload}>
      <S.ContainerInput>
        <S.Label inlineUpload={inlineUpload}>
          <S.Alert>{text}</S.Alert>
          <S.Input
            type="file"
            id="file"
            onChange={(e) => saveFile(e)}
            accept="image/png,image/jpg,image/jpeg"
          />
          {showImage && !text && <S.Img src={preview || image} alt="Image" />}
          {!showImage && !text && (
            <S.Icon inlineUpload={inlineUpload} src={I.upload} alt="" />
          )}
          {inlineUpload && (
            <S.MessageBox>
              <S.Message>{fileName || "Selecione um arquivo"}</S.Message>
              <S.UploadStatus
                src={fileName ? I.uploadCloudChecked : cloudStatus[progress]}
                alt=""
              />
            </S.MessageBox>
          )}
        </S.Label>
        {!inlineUpload && <S.Text>UPLOAD DA LOGO (máx: 3MB)</S.Text>}
      </S.ContainerInput>
    </S.Container>
  );
};

export default Upload;
