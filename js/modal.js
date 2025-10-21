const modalWrapper = document.querySelector(".modal-wrapper");
const dialog = document.querySelector("dialog");

export function handleModal() {
  if (!dialog.open) {
    modalWrapper.showModal();
    document.body.style.overflow = 'hidden'
  } else if (dialog.open) {
    modalWrapper.close();
    document.body.style.overflow = ''
    document.querySelector("form").reset();
  }
}
