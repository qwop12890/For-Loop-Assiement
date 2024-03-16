// for loop`s

//    part 1
for(a=1;a<=10;a++){
document.write("Heloo World <br>")
}

//part 2
for (b=0; b<= 12; b++) {
    document.write("I love karachi <br>");
}

//part 3
for ( i = 1; i = 4; i++){
    console.log("how are you <br>");
}

//part 4
for ( counter = 0; counter < 100; counter++) {
    document.write("My Country Name is pakistan <br>")
}
//part 5
for (let i = 3; i > 0; i--) {
    document.write("karachi <br>");
}


//part 5
pets = ["dog", "cat", "rabbit", "Parrot"];
flag = true;
for (let c = 0; c < pets.length; c++){
    document.write("Pets <br>");
}

//part 6
for (let q = 1; q <= 10; q++) {
    if (i === 2) {
        alert("Counter is: blaclist" + (i - 1)); 
        break; 
    }
}

//part 7 
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (!matchFound) {
    alert("No match found");
}


//part 8
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
for (var m = 0; m < firstArr.length; m++) {
    for (var h = 0; h < secondArr.length; h++) {
        console.log(firstArr[m] + secondArr[h]);
    }
}
