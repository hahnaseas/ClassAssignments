// Hahna Seaman, Wk7 Lab, 2/26/24

// loads web content
document.addEventListener('DOMContentLoaded', function() {
  const list = document.querySelector('#song-list ul');
  const forms = document.forms;

  // deletes songs
  list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // add songs
  const addForm = forms['add-songs'];
  addForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const songName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    songName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    songName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(songName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
});
