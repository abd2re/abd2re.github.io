function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById('toggler').addEventListener('change', (event) => {
    list.toggle('dark-mode');
  });
}

setModeEventListener();
