
  function toggleBox() 
  {
    const box = document.getElementById('profile-box');
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }

  document.addEventListener('click', function(e) {
    const profile = document.querySelector('.profile');
    const box = document.getElementById('profile-box');
    if (!profile.contains(e.target) && !box.contains(e.target)) {
      box.style.display = 'none';
    }
  });
