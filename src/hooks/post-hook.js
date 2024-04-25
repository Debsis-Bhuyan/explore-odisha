import { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../store";
import { toast } from "sonner";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { updateURL } from "../utils";
import { API_URL } from "../utils/apiCall";
export const usePosts = ({ writerId }) => {
  const { setIsLoading } = useStore();

  const location = useLocation();
  const navigate = useNavigate();

  const [searchparams] = useSearchParams();

  const [page, setPage] = useState(searchparams.get("page") || 1);
  const [category, setCategory] = useState(searchparams.get("cat") || "");

  const [posts, setPosts] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);

  useEffect(() => {
    const fechtPosts = async () => {
      updateURL({ page, navigate, location, cat: category });
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `${API_URL}/posts?cat=${category}&page=${page}&writerId=${
            writerId || ""
          }`
        );
        setPosts(data?.data || []);
        setNumOfPages(data?.numOfPages);
      } catch (error) {
        toast.error("Something went wrong!");
        const err = error?.response?.data || error?.response;
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    fechtPosts();
  }, [page, writerId]);
  return {
    page,
    posts,
    numOfPages,
    setPage,
  };
};

export const usePopularPosts = () => {
  const [popular, setPopular] = useState([]);
// 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/posts/popular`);
        setPopular(data?.data);
      } catch (error) {
        toast.error("Smoething went wrong!");
        const err = error?.response?.data || error?.response;
        console.log(err);
      }
    };

    fetchPosts();
  }, []);

  return popular;
};
