import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "./store/index.js";
import Layout from "./components/layout/Layout";
import Main from "./components/elements/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <Home />
              </Main>
            }
          />
          <Route
            path="/about"
            element={
              <Main pageTitle="About">
                <About />
              </Main>
            }
          />
          <Route
            path="/works"
            element={
              <Main pageTitle="Works">
                <Works />
              </Main>
            }
          />
          <Route
            path="works/:id"
            element={
              <Main>
                <WorkDetail />
              </Main>
            }
          />
          <Route
            path="/blog"
            element={
              <Main pageTitle="Blog">
                <Blog />
              </Main>
            }
          />
          <Route
            path="/contact"
            element={
              <Main pageTitle="Contact Me">
                <Contact />
              </Main>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Main>
                <BlogDetail />
              </Main>
            }
          />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
