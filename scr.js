document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();

    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;


    if (user == '' && pass == '') {
        alert("You didn't even put anything in it")
        return
    }

    if (user == '') {
        alert('Please Enter user name ')
        return
    }

    if (pass == '') {
        alert('Please Enter password ')
        return
    }


    if (user == 'Jose' && pass == '8562') {
        document.getElementById('Display').textContent = 'Loading'
        return
    }

    else {
        document.getElementById('Display').textContent = 'Wrong'
        return
    }


})