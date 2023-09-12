document.getElementById('btn').onclick = function() {
    this.style.backgroundColor = 'red';
  };
  document.getElementById('toggleClassButton').onclick = function() {
    this.classList.toggle('active');
  };
  document.getElementById('hoverButton').onmouseover = function() {
    this.style.backgroundColor = 'orange';
  };
  
  document.getElementById('hoverButton').onmouseout = function() {
    this.style.backgroundColor = 'yellow';
  };
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
  });
    