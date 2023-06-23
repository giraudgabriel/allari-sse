import { Content } from "@/components/common/content";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { MainContent } from "@/components/common/main-content";
import { NavigationMenu } from "@/components/common/navigation-menu";
import { ImageSlider } from "@/components/image-slider";
import { Developer } from "@/config/developer";
import { useEffect, useState } from "react";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const fetchItems = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.json();

    setTodos(data);
  };

  const fetchImages = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    const data = await response.json();
    setImages(data.map((item: any) => item.url));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Content>
          #TODO 
        </Content>
        <MainContent
          description={Developer.projectDescription}
          onReadMoreClick={fetchItems}
        >
          {todos.map((todo) => (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.completed ? "Completed" : "Not Completed"}</p>
            </div>
          ))}
        </MainContent>
        <Content>
          <ImageSlider
            images={images}
            autoPlay={false}
            showArrows
            showFooterNavigation
          />
        </Content>
      </main>
      <Footer />
    </>
  );
};

export default Home;
