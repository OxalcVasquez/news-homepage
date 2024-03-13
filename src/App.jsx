import { MainArticle } from "./components/MainArticle"
import { Header } from "./components/Header"
import { NewContainer } from "./components/NewContainer"
import { ArticleContainer } from "./components/ArticleContainer"

function App() {

  return (
    <main className="px-4 pt-6">
      <Header />
      <div className="sm:flex sm:gap-8">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer />
    </main>
  );
}

export default App
