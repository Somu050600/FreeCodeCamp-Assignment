import React from 'react';

function GoogleSignInButton() {
  const handleSignIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then(googleUser => {
      const id_token = googleUser.getAuthResponse().id_token;
      console.log(id_token);
      // TODO: Send the ID token to your server for verification
    });
  };

  return (
    <div className="g-signin2" data-onsuccess={handleSignIn}></div>
  );
}

export default GoogleSignInButton;
