import React from "react";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../services/providers/AuthProvider/AuthProvider";

const LoginPage = () => {
    const auth = useAuth();

    const handleSubmit = (result) => {
        if (result.password?.length > 0 && result.username?.length > 0) {
            auth.loginAction({
                data: {
                    password: result.password,
                    username: result.username,
            }});
        };
    };

    return (
        <div className="container h-100 my-3 d-flex justify-content-center align-items-center">
            <LoginForm handleSubmit={handleSubmit} mode="login" />
        </div>
    );
};

export default LoginPage;