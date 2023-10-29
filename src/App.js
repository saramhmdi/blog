import HomePage from './components/home/HomePage';
import Layout from './components/layout/index'
import AuthorPage from './components/author/AuthorPage';
import BlogPage from './components/blog/BlogPage';
import {Routes , Route} from  'react-router-dom'
import ScrollToTop from './components/shared/ScrollToTop';
function App() {

  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/authors/:slug" element={<AuthorPage />}/>
        <Route path="/blogs/:slug" element={<BlogPage />}/>
      </Routes>

    </Layout>
  );
}

export default App;
