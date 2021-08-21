import { useState } from "react";
import Upload from "../../../../components/Upload";
import * as S from "./styles";

const initialValuesPhotos = [
  {
    id: 0,
  },
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

const Photos = ({ values, setValues }) => {
  const [photos, setPhotos] = useState(
    values.projectImages || initialValuesPhotos
  );

  const onUpload = (url, id) => {
    const photosData = photos.map((photo) => {
      if (photo.id === id) return { ...photo, ...url };
      return { ...photo };
    });
    setPhotos(photosData);
    setValues((prev) => ({
      ...prev,
      projectImages: photosData,
    }));
  };

  return (
    <S.Container>
      <S.Title>4. Fotos</S.Title>
      {photos.map((photo) => (
        <Upload
          key={photo.id}
          onUpload={(url) => onUpload(url, photo.id)}
          initialName={photo.name}
          inlineUpload
        />
      ))}
    </S.Container>
  );
};

export default Photos;
