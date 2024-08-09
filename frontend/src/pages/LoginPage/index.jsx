import React from "react";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../services/providers/AuthProvider/AuthProvider";

const LoginPage = () => {
    const auth = useAuth();

    const handleSubmit = (result) => {
        if (result.email !== '') {
            auth.loginAction({ data: result });
        }
    };

    return (
        <div className="container h-100 my-3 d-flex justify-content-center align-items-center">
            <LoginForm handleSubmit={handleSubmit} />
        </div>
    );
};

export default LoginPage;