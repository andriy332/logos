const password1 = document.getElementById('password').value
let peopleInfo = [];
var blp = ""
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
       var password1 = document.getElementById('password').value;
       if (password1 === "") {
  	alert("Registration Error: Password cannot be empty!");
	location.href = "index.html"
       } else {
        console.log("Ok")
}

const isSuccessullyRegistered = document.querySelector('.checkbox-input').checked && passCheck(person.password, person.confirmPassword)
        if(isSuccessullyRegistered){
            document.querySelector('#success-registration').innerHTML="You registered! <br><a href=index.html>Logout</a><br><a onclick=Info() href=#>Change Name</a>";
            setTimeout(() =>{
                document.querySelector('#success-registration').style.display='none';
            }, 99999999999999999)
            document.querySelector('#success-registration').style.display='block';
            peopleInfo.push(person);
	     console.log(getPeopleInfo());
           allacc++
        }
  	// if (allacc < 3) {
	// console.log('ok')
	// } else {
	// location.href = "error.html"
 // 	}
        
        document.querySelector('.checkPolicy').style.display = document.querySelector('.checkbox-input').checked ? 'none' : 'block';
        
        document.querySelector('.confirmPass').style.display = passCheck(person.password, person.confirmPassword) ? 'none' : 'block'; 

		{isSuccessullyRegistered &&
			showLoginPage();
		}

}

// const loginform = (event) =>{    
    

	// const person = document.GetElementById('login-email').value
	// const person1 = document.GetElementById('login-password').value
	
	// const isExist = peopleInfo.includes(person);
	
		// const isSuccessullyLogin = document.querySelector('.checkbox-input').checked && passCheck(person.password, person.confirmPassword)
        // if(isSuccessullyRegistered){
            // document.querySelector('#success-registration').innerHTML="You registered! <br><a href=index.html>Logout</a><br><a onclick=Info() href=#>Change Name</a>";
            // setTimeout(() =>{
                // document.querySelector('#success-registration').style.display='none';
            // }, 99999999999999999)
            // document.querySelector('#success-registration').style.display='block';
            // peopleInfo.push(person);
	     // console.log(getPeopleInfo());
           // allacc++
        // }
 
		// {isSuccessullyLogin &&
			// showWelcomePage();
		// }

// }
//const checkPerson (i, person, person1)


// const WelcomePage = () => {
	// document.querySelector('.login-done-form').style.display = 'block';
	// document.querySelector('.login-form').style.display = 'none';
// }

const passCheck = (password, confirmPassword) =>{
    return password === confirmPassword ? true : false;
}

const getPeopleInfo = () => {
	return peopleInfo;
}
const showLoginPage = () => {
	document.querySelector('.registration-form').style.display = 'none';
	document.querySelector('.login-form').style.display = 'block';
}

