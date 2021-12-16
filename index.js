export default { createObject, getInputValues, getNames, createTemplateObject };



const user = {

    name: "Sandra",
    phone: "068 483 0148",
    email: "manell@ukr.net",
    pass: "1212",
    confirmPass: "1212",
};
// console.log(user);
// console.log({});

// spread
const student = { status: "active", ...user };
// console.log(student);

//доступ к свойствам
// user.age = 30;

// console.log(user.name);
// console.log(user["age"]);
user["age"] = 18;
// console.log(user["age"]);

// delete user.age;
// delete user["age"];
// function createObject(name,phone,email,pass,confirmPass) {
    // const obj = {
    //     name: name,
    //     phone: phone,
    //     email: email,
    //     pass: pass,
    //     confirmPass: confirmPass,
    // };
    // return obj;
//}


function createObject(name,phone,email,pass,confirmPass) {
    const obj = {
        name,
        phone,
        email,
        pass,
        confirmPass,
    };
    return obj;
}
