document.getElementById('button').addEventListener('click', loadText);
function loadText() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'sample.txt', true);

    xhr.onload = function() {
        if(this.status == 200) {
            document.getElementById('text').innerHTML = this.responseText;
        }
    }
    xhr.send();
}

document.getElementById('button1').addEventListener('click', loadUser);

function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function() {
        if(this.status == 200) {
            document.getElementById('text').innerHTML = this.responseText;
        }
    }
    xhr.send();
}