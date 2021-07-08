document.querySelector('button').onclick = function () {
    let fullName = document.querySelector('#input_form').value;
    let date = document.querySelector('#date_form').value;
    let password = document.querySelector('#password_form').value;
    console.log(fullName, date, password)
    if (fullName === 'Rocco De Lutiis' && date === '1996-09-16' && password === 'Angelina') {
        window.location.replace("start.html");
    } else {
        alert('Sorry!It seems that you are not Rocco De Lutiis!')
    }
}