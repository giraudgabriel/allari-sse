import { Content } from "@/components/common/content";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { MainContent } from "@/components/common/main-content";
import { NavigationMenu } from "@/components/common/navigation-menu";
import { Developer } from "@/config/developer";
import { useState } from "react";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchItems = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.json();

    setTodos(data);
  };

  return (
    <>
      <Header />
      <NavigationMenu name={Developer.name} />
      <main>
        <Content />
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
        <Content />
      </main>
      <Footer />
    </>
  );
};

export default Home;
