/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const q1 = prompt(`magaca ?`);
if( q1.toLowerCase() === "nigga"){
correct += 1;
}

const q2 = prompt(`adna ?`);
if( q2.toLowerCase() === "nigga"){
correct += 1;
}

const q3 = prompt(`isagna ?`);
if( q3.toLowerCase() === "nigga"){
correct += 1;
}

const q4 = prompt(`iyadna ?`);
if( q4.toLowerCase() === "nigga"){
correct += 1;
}

const q5 = prompt(`kaa kalena ?`);
if( q5.toLowerCase() === "nigga"){
correct += 1;
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correct == 5){
rank = `Libaxyada 🦁`;
}
else if (correct > 4){
  rank = `Yaxaska 🐊`;
}
else if (correct > 3){
  rank = `Maska 🐍`;
}
else if (correct > 2){
  rank = `Yayga 🐺`;
}
else {
  rank = `Qudhanjada 🐜`;
}


// 6. Output results to the <main> element

main.innerHTML = `<h3>wll waxaad keentay ${correct} ku qanac ama haku qancin</h3>
<h2>taasi waa mid adi kuu taala &#128517 </h2>
 <h3>heerkaad taagantihid waa heerka ${rank}</h3>
 <p>si aad mar labad ugu cesheto refresh garee pageka :D</p>
 `