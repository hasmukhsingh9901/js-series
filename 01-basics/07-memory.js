// Two types of memory avail 
// Stack and heap ->

// Stack Primitive Copy , heap (Non Primitive)  reference 



// 

let my_d = "12inc";

let another_name = my_d;
another_name = "15inc"
console.log(my_d);
console.log(another_name);



let user  = {
    email:"user@gmail.com",
    upi:"386y5rtufbiyrh843ojhrw"
}

let new_user = user;

new_user.email = "hasmukh.singh.meta@gmail.com"

console.log(user.email);
console.log(new_user.email);
