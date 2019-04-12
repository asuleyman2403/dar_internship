let users = [
    {
        login: 'asdf1',
        name: 'name1',
        password: 'asdf',
        age: 14
    },
    {
        login: 'asdf2',
        name: 'name2',
        password: 'asdf',
        age: 18
    },
    {
        login: 'asdf3',
        name: 'name3',
        password: 'asdf',
        age: 19
    }
];
// users.forEach(el => {
//     if (el.age >= 18)
//         console.log(el.login);
// });
// let l = prompt('Enter your login');
// let p = prompt("Password");
// let user = users.filter(el => el.login === l && el.password === p);
// user !== [] ? console.log(user[0].login) : console.log('Wrong!');
let s = prompt();
users.forEach( el => {
    if(el.name[0].toLowerCase() === s.toLowerCase())
        console.log(el.login);
});






