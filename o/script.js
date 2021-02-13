let game = [


     ['', '', ''],
     ['', '', ''],
     ['', '', '']
]

let counter = 0 ;
let o
const func = (id) => {
   let i = 0;
   let j = 0;
   if(id > 2 && id < 6) i = 1;
   else if( id > 5 ) i = 2; 

   j = id % 3;
   if(counter % 2){
    game[i] [j] = 'o'
    
    document.getElementById("0").value = "o";
    document.getElementById("3").value = "x";
}
   console.log(game);
   counter++;
}

let counter1 = 1 ;
let o1
const func1 = (id) => {
   let i = 0;
   let j = 0;
   if(id > 2 && id < 6) i = 1;
   else if( id > 5 ) i = 2; 

   j = id % 3;
   if(counter1 % 2){
    game[i] [j] = '1'
    document.getElementById("1").value = "o";
    document.getElementById("2").value = "x";
   
}
   console.log(game);
   counter++;
}

let counter2 = 1 ;
let o2
const func2 = (id) => {
   let i = 0;
   let j = 0;
   if(id > 2 && id < 6) i = 1;
   else if( id > 5 ) i = 2; 

   j = id % 3;
   if(counter2 % 2){
    game[i] [j] = '1'
    document.getElementById("2").value = "o";
    document.getElementById("5").value = "x";
   
}
   console.log(game);
   counter++;
}

let counter3 = 1 ;
let o3
const func3 = (id) => {
   let i = 0;
   let j = 0;
   if(id > 2 && id < 6) i = 1;
   else if( id > 5 ) i = 2; 

   j = id % 3;
   if(counter3 % 2){
    game[i] [j] = '1'
    document.getElementById("3").value = "o";
    document.getElementById("7").value = "x";
   
}
   console.log(game);
   counter++;
}
let counter4 = 1 ;
let o4
const func4 = (id) => {
   let i = 0;
   let j = 0;
   if(id > 2 && id < 6) i = 1;
   else if( id > 5 ) i = 2; 

   j = id % 3;
   if(counter4 % 2){
    game[i] [j] = '1'
    document.getElementById("4").value = "o";
    document.getElementById("3").value = "x";
   
}
   console.log(game);
   counter++;
}

let counter5 = 1 ;
let o5
const func5 = (id) => {
   let i = 0;
   let j = 0;
   if(id > 2 && id < 6) i = 1;
   else if( id > 5 ) i = 2; 

   j = id % 3;
   if(counter5 % 2){
    game[i] [j] = '1'
    document.getElementById("6").value = "x";
    document.getElementById("5").value = "o";
}
   console.log(game);
   counter++;
}

let counter6 = 1 ;
let o6
const func6 = (id) => {
   let i = 0;
   let j = 0;
   if(id > 2 && id < 6) i = 1;
   else if( id > 5 ) i = 2; 

   j = id % 3;
   if(counter6 % 2){
    game[i] [j] = '1'
    document.getElementById("6").value = "o";
   
}
   console.log(game);
   counter++;
}

let counter7 = 1 ;
let o7
const func7 = (id) => {
   let i = 0;
   let j = 0;
   if(id > 2 && id < 6) i = 1;
   else if( id > 5 ) i = 2; 

   j = id % 3;
   if(counter7 % 2){
    game[i] [j] = '1'
    document.getElementById("7").value = "o";
   
}
   console.log(game);
   counter++;
}


let counter8 = 1 ;
let o8
const func8 = (id) => {
   let i = 0;
   let j = 0;
   if(id > 2 && id < 6) i = 1;
   else if( id > 5 ) i = 2; 

   j = id % 3;
   if(counter7 % 2){
    game[i] [j] = '1'
    document.getElementById("8").value = "o";
    document.getElementById("7").value = "x";
   
}
   console.log(game);
   counter++;
}