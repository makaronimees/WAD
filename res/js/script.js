const profilePic = document.getElementById('profilePic');
const dropdownMenu = document.getElementById('dropdownMenu');

profilePic.addEventListener('click', () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
