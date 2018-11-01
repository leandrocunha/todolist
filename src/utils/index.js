const clearCheckeds = () => {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach(ck => (ck.checked = false));
};

export default clearCheckeds;
