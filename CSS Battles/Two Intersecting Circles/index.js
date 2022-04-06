// localStorage.setItem('name', 'CJ');
// localStorage.setItem('lastname','Joshi');

// localStorage.clear();

// // console.log(localStorage.getItem('name'));

// // sessionStorage.setItem('name', 'CJ');

document.cookie = "name=CJJ; expires=" + new Date(2050, 0, 1).toUTCString();
console.log(document.cookie);
// document.cookie.d