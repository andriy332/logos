// const personEmail = document.getElementById('login-password').value;
// const personPassword = document.getElementById('login-email').value;
let peopleInfo = [];
document.querySelector('.login-done-form').style.display = 'none';
document.querySelector('.login-form').style.display = 'none';
function Info(){
var NewName = prompt('New UserName:');
alert('Your nickname changed to: ' + NewName)
}
var allacc = "1"
function tpto(){
location.href = "tof.html"
}
const submitRegistrationForm = (event) =>{    
    event.preventDefault();

        const person = {
            firsName: document.getElementById('firstName').value,
			lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmPassword:  document.getElementById('confirm-password').value
} 
       if (document.getElementById('password').value === "") {
			alert("Registration Error: Password cannot be empty!");
			location.href = "index.html"
       } else {
        console.log("Ok");
	   if (document.getElementById('firstName').value === "") {
			alert("Registration Error: First Name cannot be empty!");
			location.href = "index.html"
       } else {
        console.log("Ok");
	   if (document.getElementById('email').value === "") {
			alert("Registration Error: Email cannot be empty!");
			location.href = "index.html"
       } else {
        console.log("Ok");
	   }
}

var isSuccessullyRegistered = document.querySelector('.checkbox-input').checked
       
        if(isSuccessullyRegistered){
            document.querySelector('#success-registration').innerHTML="You registered! <br><a href=index.html>Logout</a><br><a onclick=Info() href=#>Change Name</a>";
            setTimeout(() =>{
                document.querySelector('#success-registration').style.display='none';
            }, 99999999999999999)
			var login2 = "tr"
            document.querySelector('#success-registration').style.display='block';
            peopleInfo.push(person);
           allacc++
        }
        // document.querySelector('.checkPolicy').style.display = document.querySelector('.checkbox-input').checked ? 'none' : 'block';
        
        // document.querySelector('.confirmPass').style.display = passCheck(person.password, person.confirmPassword) ? 'none' : 'block'; 

		if(login2 === "tr")
				document.querySelector('.registration-form').style.display = 'none';
				document.querySelector('.login-form').style.display = 'block';
		}
		// else{
			// console.error('error')
		// }
		var pass = document.getElementById('password').value
		var cpass = document.getElementById('confirm-password').value
		if(pass === cpass){
		console.log('ok')
		}
		else{
		alert('Registration error: You passwords cannot be math')
		location.href = "index.html"
		}
}

const loginform = (event) =>{    

	const personEmail = document.getElementById('login-email').value;
	const personPassword = document.getElementById('login-password').value;
	const isExist = checkPerson(personEmail, personPassword)

	if(isExist){

	
	setTimeout(() =>{
			document.querySelector('#success-logined').style.display='none';
	}, 5000);	
		document.querySelector('#success-logined').style.display='block';
	}
		document.querySelector('.incorectPassword').style.display = checkPerson(personEmail, personPassword) ? 'none' : 'block';
		{ifExist &&
			showWelcomePage();
		}

}


const WelcomePage = () => {
	document.querySelector('.login-done-form').style.display = 'block';
	document.querySelector('.login-form').style.display = 'none';
}

const passCheck = (password, confirmPassword) =>{
    return password === confirmPassword ? true : false;
}
const checkPerson = (personEmail, personPassword) =>{

	return peopleInfo.map((person) => {
	 return person.email == personEmail && person.password == personPassword;
	})[0];
}


const getPeopleInfo = () => {
	return peopleInfo;
}
const showLoginPage = () => {
	document.querySelector('.registration-form').style.display = 'none';
	document.querySelector('.login-form').style.display = 'block';
}














































//86   - 89
  // return peopleInfo.filter( (personEmail) => {
			// return peopleInfo['email'] == personEmail && peopleInfo['emai'].password == personPassword;
	// });
	// return isChecked ? true : false;



// 73 // const checkPerson = (i, person, person1)