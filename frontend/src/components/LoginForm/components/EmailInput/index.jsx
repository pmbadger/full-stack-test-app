import React from "react";

const EmailInput = ({ email, setEmail }) => {
    return (
        <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} id="inputEmail" />
        </div>
    );
};

export default EmailInput;