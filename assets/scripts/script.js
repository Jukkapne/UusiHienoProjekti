
document.getElementById('btn2').onclick = function() {
    this.style.backgroundColor = 'red';
  };


  document.getElementById('toggleClassButton').onclick = function() {
    this.classList.toggle('active');
  };



 
  

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
  });
    