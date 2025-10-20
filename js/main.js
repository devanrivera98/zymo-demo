import { validateField } from "./validationField.js";

const form = document.getElementById("form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const companyInput = document.getElementById("company");
const roleInput = document.getElementById("role");

const firstNameSpan = document.getElementById("first-name-error");
const lastNameSpan = document.getElementById("last-name-error");
const companySpan = document.getElementById("company-error");
const roleSpan = document.getElementById("role-error");

firstNameInput.addEventListener("focusout", () =>
  validateField(firstNameInput, firstNameSpan, "first"),
);

lastNameInput.addEventListener("focusout", () =>
  validateField(lastNameInput, lastNameSpan, "last"),
);

companyInput.addEventListener("focusout", () =>
  validateField(companyInput, companySpan, "company"),
);

roleInput.addEventListener("focusout", () =>
  validateField(roleInput, roleSpan, "role"),
);
