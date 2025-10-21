export function validateField(input, span, message) {
  const value = input.value.trim();
  let pattern;

  if (input.name === "first-name" || input.name === "last-name") {
    pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ'-]{2,50}$/;
  } else {
    pattern = /^[a-zA-Z0-9&.' -]{2,50}$/;
  }

  if (!pattern.test(value)) {
    span.innerText = `Must enter a valid ${message} name.`;
    input.setAttribute("aria-invalid", "true");
    return false;
  } else {
    span.innerText = "";
    input.setAttribute("aria-invalid", "false");
    return true;
  }
}
