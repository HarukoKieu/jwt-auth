import { renderTemplate } from "./renderTemplate.js";

export const VERIFICATION_EMAIL_TEMPLATE = (verificationCode) => {
  return renderTemplate("verification-email.html", {
    verificationCode,
  });
};

export const PASSWORD_RESET_REQUEST_TEMPLATE = (resetURL) => {
  return renderTemplate("password-reset-request.html", {
    resetURL,
  });
};

export const PASSWORD_RESET_SUCCESS_TEMPLATE = () => {
  return renderTemplate("password-reset-success.html");
};
