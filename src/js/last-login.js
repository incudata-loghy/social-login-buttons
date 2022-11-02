window.addEventListener('load', () => {
  const lastLoginProvider = getLastLoginProvider();
  if (lastLoginProvider) {
    showLastSocialLoginButton(lastLoginProvider);
    hideSocialLoginButton(lastLoginProvider);
  }

  for (button of socialLoginButtons()) {
    addEventListenerToSaveProviderOnClick(button);
  }
});

function socialLoginButtons() {
  return document.querySelectorAll('a.social-login-button');
}

function addEventListenerToSaveProviderOnClick(button) {
  const provider = button.dataset.provider;
  if (!provider) return;

  button.addEventListener("click", () => setLastLoginProvider(provider));
  button.addEventListener("click", () => console.log('clicked!!'));
}

function setLastLoginProvider(provider) {
  // Please replace xxx with your domain or others to avoid conflict with names used on other sites.
  localStorage.setItem("xxx.socialLogin.lastLogin", provider);
}

function getLastLoginProvider() {
  // Please replace xxx with your domain or others to avoid conflict with names used on other sites.
  return localStorage.getItem("xxx.socialLogin.lastLogin");
}

function showLastSocialLoginButton(provider) {
  const button = document.querySelector('div.last-login.container.' + provider);
  button.style.display = "block";
}

function hideSocialLoginButton(provider) {
  const button = document.querySelector('a.social-login-button:not(.last-login).' + provider);
  button.style.display = "none";
}
