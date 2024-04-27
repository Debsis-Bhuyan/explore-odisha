import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import {
  PageDetails,
  CategoriesPage,
  Home,
  LoginPage,
  SignupPage,
  WriterPage,
  About,
  ContactPage,
  ExploreOdisha,
} from "./pages";
import Loading from "./components/Loading";
import { Footer, Navbar } from "./components";
import useStore from "./store";

function Layout() {
  return (
    <div className="w-full flex flex-col min-h-screen px-2 md:px-6 2xl:px-14">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const { theme, isLoading } = useStore();

  return (
    <main className={theme}>
      <div
        className={`w-full min-h-sreen  relative dark:bg-[#020b19] bg-white`}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/explore/category" element={<CategoriesPage />} />
              <Route path="/:slug/:id" element={<PageDetails />} />
              <Route path="/writer/:id" element={<WriterPage />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/explore-odisha" element={<ExploreOdisha />} />
            </Route>

            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/sign-in" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>

        {isLoading && <Loading />}
      </div>
    </main>
  );
}

export default App;
