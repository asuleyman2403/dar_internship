let students = [];
let data = document.getElementById('data');
for(let i = 0; i < 7; i++){
  let student = {
    login: 'login' + i,
    password: 'password' + i,
    name: 'name' + i,
    gpa: (Math.random() * 4).toFixed(2),
    grades: []
  };
  for(let j = 0; j < 10; j++){
    student.grades.push(Math.round(Math.random() * 100))
  }
  students.push(student);
}
let isCorrectInfo = false;
let student;
let student_id;
let log  = document.getElementById('log');
let pass = document.getElementById('pass');
let response = document.getElementById('response');
let login = document.getElementById('login');
let password = document.getElementById('password');
let name = document.getElementById('name');
let gpa = document.getElementById('gpa');
let grades = document.getElementById('grades');
let signIn = () => {
  isCorrectInfo = false;
  for(let i = 0; i < students.length; i++) {
    student = students[i];
    student_id = i;
    if (log.value === student.login && pass.value === student.password) {
      isCorrectInfo = true;
      break;
    }
  }
  if(!isCorrectInfo){
    response.innerText = "Wrong login or password!";
  }else{
    data.style.display = "flex";
    login.value = student.login;
    password.value = student.password;
    name.value = student.name;
    gpa.innerText = 'GPA: ' + student.gpa;
    grades.innerHTML = null;
    student.grades.forEach((grade) => {
      let li = document.createElement('li');
      li.innerText = grade;
      grades.appendChild(li);
    });
    response.innerText = "Welcome, " + student.name;
  }
};

let changeLog = () => {
  if(login.value.length > 0)
  students[student_id].login = login.value;
};
let changePass = () => {
  if(password.value.length > 0)
    students[student_id].password = password.value;
};
let changeName = () => {
  if(name.value.length > 0)
    students[student_id].name = name.value;

};
let getAverage = () => {
  document.getElementById('average').innerText = student.grades.reduce( (s, el) => s + el)/student.grades.length.toFixed(2);
};
let exit = () => {
  response.innerText = "";
  isCorrectInfo = false;
  log.value = "";
  pass.value = "";
  data.style.display = "none";
};
let delet = () => {
  students.splice(student_id, 1);
  exit();
};
document.getElementById('submit-btn').addEventListener('click', signIn);
document.getElementById('changeLog').addEventListener('click', changeLog);
document.getElementById('changePass').addEventListener('click', changePass);
document.getElementById('changeName').addEventListener('click', changeName);
document.getElementById('avg').addEventListener('click', getAverage);
document.getElementById('exit').addEventListener('click', exit);
document.getElementById('delete').addEventListener('click', delet);
