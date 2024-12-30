document.getElementById('userform').addEventListener('submit', 
    function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const confirmpass = document.getElementById('confirmpass').value;
    const terms = document.getElementById('terms').checked;

    if(!terms){
        alert('you need to accept the terms.');
        return;
    }
    if(pass !== confirmpass){
        alert('passwords do not match.');
        return;
    }

    alert(`Welcome, ${name}!`);


});

    