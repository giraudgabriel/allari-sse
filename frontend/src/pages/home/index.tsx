import { Content } from "@/components/common/content";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { MainContent } from "@/components/common/main-content";
import { ImageContainer } from "@/components/common/main-content/image.container";
import { ImageSlider } from "@/components/image-slider";
import { MousePosition } from "@/components/mouse-position";
import { Developer } from "@/config/developer";
import imageService, { IImage } from "@/services/image.service";
import { useQuery } from "react-query";

const Home = () => {
  const fetchImages = async () => {
    const images = await imageService.getAll();
    return images;
  };

  const { data, isLoading, isError } = useQuery<IImage[]>({
    queryKey: "images",
    queryFn: fetchImages,
    cacheTime: 1000 * 30, // 30 seconds
  });

  return (
    <>
      <Header />
      <main>
        <Content>
          <MousePosition />
        </Content>
        <MainContent
          title={Developer.project.title}
          description={Developer.project.description}
        >
          {isError && <p>Failed to fetch data from API</p>}
          {data && <ImageContainer images={data ?? []} loading={isLoading} />}
        </MainContent>
        <Content>
          {isError && <p>Failed to fetch data from API</p>}
          {!isError && (
            <ImageSlider
              images={data ? data.map((image) => image.Url) : []}
              autoPlay
              autoPlayInterval={5000}
              showArrows
              showFooterNavigation
              loading={isLoading}
            />
          )}
        </Content>
      </main>
      <Footer />
    </>
  );
};

export default Home;
