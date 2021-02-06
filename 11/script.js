let peopleinfo = [];

const submit1 = (event) =>{
	event.preventDefault()
	const person ={
		firstname : document.getElementById('firstname').value,
		lastname :  document.getElementById('lastname').value,
		email : document. getElementById('email').value,
		pass : document. getElementById('pass').value,
		confirmpass:  document.getElementById('pass1').value,
	}
	peopleinfo.push(person);
	console.log(peopleinfo);
document.write(peopleinfo)	
 }
