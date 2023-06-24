import { IImage } from "@/services/image.service";
import { ImageContent, Images } from "./styles";

interface ImageContainerProps {
  images: IImage[];
  loading: boolean;
}

export const ImageContainer = ({ images, loading }: ImageContainerProps) => {
  if (loading) return <p>Loading...</p>;

  return (
    <Images>
      {images.map((image) => (
        <ImageContent key={image.Hash} title={image.Name}>
          <img src={image.Url} alt={image.Name} />
        </ImageContent>
      ))}
    </Images>
  );
};
