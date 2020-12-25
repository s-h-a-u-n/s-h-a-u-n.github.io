var bt_home = document.getElementById('bt_home');
var bt_cgi = document.getElementById('bt_cgi');
var bt_furniture = document.getElementById('bt_furniture');
var bt_procedural = document.getElementById('bt_procedural');
var bt_contact = document.getElementById('bt_contact');

var home = document.getElementById('home');
var cgi = document.getElementById('cgi');
var furniture = document.getElementById('furniture');
var procedural = document.getElementById('procedural');
var contact = document.getElementById('contact');

bt_home.onclick = function () {
    home.style.display = 'block';
    cgi.style.display = 'none';
    furniture.style.display = 'none';
    procedural.style.display = 'none';
    contact.style.display = 'none';
};

bt_cgi.onclick = function () {
    home.style.display = 'none';
    cgi.style.display = 'block';
    furniture.style.display = 'none';
    procedural.style.display = 'none';
    contact.style.display = 'none';
};

bt_furniture.onclick = function () {
    home.style.display = 'none';
    cgi.style.display = 'none';
    furniture.style.display = 'block';
    procedural.style.display = 'none';
    contact.style.display = 'none';
};

bt_procedural.onclick = function () {
    home.style.display = 'none';
    cgi.style.display = 'none';
    furniture.style.display = 'none';
    procedural.style.display = 'block';
    contact.style.display = 'none';
};

bt_contact.onclick = function () {
    home.style.display = 'none';
    cgi.style.display = 'none';
    furniture.style.display = 'none';
    procedural.style.display = 'none';
    contact.style.display = 'block';
};