let user = {
    login: 'asdf',
    password: 'asdhfasdhfjkl',
    name: 'asdf',
    age: 18,
    isAdmin: false
};

user.login = 'asdf';
let key = 'age';
console.log(user[key]);
user[key] = 30;
user['age'] = 20;
for(k in user){
    console.log(k, user[k]);
}

// let { name, login, password} = user;
// console.log(name, login, password);

let login = 'dar';
let password = 'secret';
let user2 = {
    login,
    password
};
function getName({login}){
    return login;
}
console.log(getName(user));

let form = {
    params: {
        height: 100,
        width: 100
    }
};
let { param : p } = form;
let { params: {width} } = form;
console.log(p);
console.log(width);
//console.log(params); error

let arr = [ 132, 212 ,1234 , 2435, 123];
let [,,f,x] = arr;
console.log(f,x);
let arr2 = [123, 123, 124, ...arr];

let student = {
    ...user,
    name: 'DAR'
};











