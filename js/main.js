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

function validateAllFields(e) {
  e.preventDefault();
  const allFormFields = [
    { input: firstNameInput, span: firstNameSpan, message: "first" },
    {
      input: lastNameInput,
      span: lastNameSpan,
      message: "last",
    },
    {
      input: companyInput,
      span: companySpan,
      message: "company",
    },
    {
      input: roleInput,
      span: roleSpan,
      message: "role",
    },
  ];

  let isFormValid = true;

  allFormFields.forEach((field) => {
    const validationCheck = validateField(
      field.input,
      field.span,
      field.message,
    );

    if (!validationCheck) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    //display modal and future form functionality here
  }
}

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

form.addEventListener("submit", (e) => validateAllFields(e));
