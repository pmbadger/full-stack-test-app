import React, { useCallback, useState } from "react";
import EmailInput from "./components/EmailInput";

const LoginForm = ({ handleSubmit }) => {
    const [email, setEmail] = useState('');

    const submitForm = useCallback(e => {
        e.preventDefault();
        handleSubmit({ email });
    }, [email, handleSubmit]);

    return (
        <form className="card mh-50 p-3 border-primary shadow-lg bg-body-tertiary" style={{ width: '24rem' }}>
            <legend className="h2 text-primary">Login</legend>
            <EmailInput email={email} setEmail={setEmail} />
            <button className="btn btn-primary" onClick={submitForm}>Submit</button>
        </form>
    );
};

export default LoginForm