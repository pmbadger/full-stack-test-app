import { useContext, createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearProfile, setProfile } from "../../state/profile/profileSlice";
// import { authLogin } from "../../api/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const loginAction = async ({ data }) => {
        dispatch(setProfile(data));
        
        setTimeout(() => {
            setToken('123');
            localStorage.setItem("site", '123');
            navigate("/");
        }, 300);

        // try {
        // authLogin({
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data),
        // }).then(res => {
        //     setUser(res.data.user);
        //     setToken(res.token);
        //     localStorage.setItem("site", res.token);
        //     navigate("/");
        //     return;
        // }).catch(err => {
        //     throw new Error(err.message);
        // });
        // } catch (err) {
        // console.error(err);
        // }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        dispatch(clearProfile());
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};