import { Content } from "@/components/common/content";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { MainContent } from "@/components/common/main-content";
import { NavigationMenu } from "@/components/common/navigation-menu";

const Home = () => {
  return (
    <>
      <Header />
      <NavigationMenu />
      <main>
        <Content />
        <MainContent />
        <Content />
      </main>
      <Footer />
    </>
  )
};

export default Home;