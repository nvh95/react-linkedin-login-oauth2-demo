import React from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { GoogleLogin } from 'react-google-login';


function LinkedInPage({typeOfLogin}) {
  const { linkedInLogin } = useLinkedIn({
    clientId: "86vhj2q7ukf83q",
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      console.log(code);
      setCode(code);
      setErrorMessage("");
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log(error);
      setCode("");
      setErrorMessage(error.errorMessage);
    },
  });
  const [code, setCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const responseGoogle = (response) => {
    console.log(response);
  }

  const showGmail=()=>{
    return(
      <GoogleLogin
      clientId="491004959702-3bgqo54pt777f77dgl7cqd6s7e7rii81.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={false}
      cookiePolicy={'single_host_origin'}
    />
    )
  }

  const showLin=() =>{
    return(
      <div style={{margin:"50px"}}>
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Log in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
      />

      {!code && <div>Not Logged In With Linkedin</div>}
      {code && (
        <div>
          <div>Authorization Code: {code}</div>
          {/* <div>
            Follow{" "}
            <Link
              target="_blank"
              href="https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fconsumer%2Fcontext&tabs=HTTPS#step-3-exchange-authorization-code-for-an-access-token"
              rel="noreferrer"
            >
              this
            </Link>{" "}
            to continue
          </div> */}
        </div>
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
    )
  }

  return (
    <>
    <div style={{margin:"50px"}}>
    {typeOfLogin.includes("GMAIL") ? showGmail() : null}
    </div>
    <div style={{ marginTop: "90px" }}>
         {typeOfLogin.includes("LINKEDIN") ? showLin() : null}
      </div>
    </>
   
  );
}


export default LinkedInPage;
