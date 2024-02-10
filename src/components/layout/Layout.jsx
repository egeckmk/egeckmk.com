import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTheme, setLoading } from "../../store/siteConfig";
import { setToken } from "../../store/user";
import Loading from "../Loading.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { client } from "../../utils/axios";
import Header from "../Headers/Header";

const Layout = ({ children }) => {
  // Hook definitions
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Global states definitions
  const isLoading = useSelector((state) => state.siteConfig.isLoading);
  const theme = useSelector((state) => state.siteConfig.theme);
  const token = useSelector((state) => state.users.token);

  // Local variables
  const currentPageUrl = location.pathname;

  // Theme configuration
  useEffect(() => {
    dispatch(setTheme(JSON.parse(localStorage.getItem("theme")) || "dark"));
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Token validation
  useEffect(() => {
    if (currentPageUrl.includes("/admin/")) {
      dispatch(setLoading(true));
      const verifyToken = async (token) => {
        return await client.post("/api/v1/users/verifyToken", {
          token: token,
        });
      };
      if (token) {
        verifyToken(token).then((response) => {
          if (response.data.isValid) {
            dispatch(setLoading(false));
          } else {
            dispatch(setToken(""));
            localStorage.removeItem("egeckmk-com-token");
            dispatch(setLoading(false));
            navigate("/admin/login");
          }
        });
      } else {
        var tokenInLocalStorage = JSON.parse(
          localStorage.getItem("egeckmk-com-token")
        );
        if (tokenInLocalStorage) {
          dispatch(setToken(tokenInLocalStorage));

          verifyToken(tokenInLocalStorage)
            .then((response) => {
              if (response.data.isValid) {
                dispatch(setLoading(false));
              }
            })
            .catch(() => {
              dispatch(setToken(""));
              localStorage.removeItem("egeckmk-com-token");
              dispatch(setLoading(false));
              navigate("/admin/login");
            });
        } else {
          dispatch(setLoading(false));
          navigate("/admin/login");
        }
      }
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="h-screen bg-gray-200 dark:bg-black">
          <Header />
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
