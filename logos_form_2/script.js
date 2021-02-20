let peopleInfo = [];
function Info(){
var NewName = prompt('New UserName:');
alert('Your nickname changed to: ' + NewName)
}
var allacc = "1"
function tpto(){
location.href = "tof.html"
}
const submitForm = (event) =>{    
    event.preventDefault();

        const person = {
            firsName: document.getElementById('firstName').value,
	    lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            confirmPassword:  document.getElementById('confirm-password').value
        }
	console.log(person)
        if(document.querySelector('.checkbox-input').checked && passCheck(person.password, person.confirmPassword)){
            document.querySelector('#success-registration').innerHTML="You registered! <br><a href=index.html>Logout</a><br><a onclick=Info() href=#>Change Name</a>";
            setTimeout(() =>{
                document.querySelector('#success-registration').style.display='none';
            }, 99999999999999999)
            document.querySelector('#success-registration').style.display='block';
            peopleInfo.push(person);
            
           allacc++
        }
 
  	 if (allacc < 3) {
	 console.log('ok')
	 } else {
	 location.href = "error.html"
  	}
        
        document.querySelector('.checkPolicy').style.display = document.querySelector('.checkbox-input').checked ? 'none' : 'block';
        
        document.querySelector('.confirmPass').style.display = passCheck(person.password, person.confirmPassword) ? 'none' : 'block'; 
        
}

const passCheck = (password, confirmPassword) =>{
    return password === confirmPassword ? true : false;
}