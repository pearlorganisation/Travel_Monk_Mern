import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const EmailVerification = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  return (
    <div>
      <h1>Email Verification </h1>

      <h3> Token : {token}</h3>
    </div>
  );
};

export default EmailVerification;
