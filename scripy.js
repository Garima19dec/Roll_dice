// // person = document.querySelectorALL("input")
// // button = document.querySelectorALL("button")
// // result = document.querySelectorALL("span")

// // for(let t of button){
// //     t.addEventListener("click", diceRoll)
// // }

// // function diceRoll(e){
// //     // console.log(e.target.id)
// //     user_id = e.target.id - 1
// //     dice_values = [1,2,3,4,5,6]
// //     dice_result = dice_values[parseInt(Math.random()*dice_values.length)]
// //     result[user_id].innerText = dice_result
// // }

// person = document.querySelectorAll("input")
// button = document.querySelectorAll(".dice")
// result = document.querySelectorAll("span")
// endButton = document.getElementById("endButton")
// winMessage = document.getElementById("winMessage")

// // disable endButton 
// endButton.disabled = true

// // for(let t of button){
// //   t.addEventListener("click", diceRoll(t.innerText))
// //   t.addEventListener("click", () => {diceRoll("hello")})
// //   t.addEventListener("click", () => {diceRoll(t.innerText)})
// // }

// // function diceRoll(str){
// //   console.log(str)
// // }

// for(let t of button){
//   t.addEventListener("click", diceRoll)
// }

// let count = 0
// function diceRoll(e){
//   count++
//   if(count == 5){
//     endButton.disabled = false
//   }
//   //console.log(e.target.id)
//   user_id = e.target.id - 1
//   button[user_id].disabled = true
//   dice_values = [1,2,3,4,5,6]
//   dice_result = dice_values[parseInt(Math.random()*dice_values.length)]
//   result[user_id].innerText = dice_result
// }
// // diceRoll()
// endButton.addEventListener("click", findWinner)

// function findWinner(){
//   endButton.disabled = true
//   max = result[0].innerText
//   pos = []
//   for( t of result){
//     if(t.innerText > max){
//       max = t.innerText
//     }
//   }
  
//   for( i = 0; i<result.length; i++){
//     if(result[i].innerText == max){
//        pos.push(i)
//     }
//   }

//   // console.log(max, pos)
//   names = ""
//   for(t of pos){
//     names = names + person[t].value + ","
//   }
//   // console.log(names.slice(0, names.length-1))
//   winMessage.innerText = `Winner is ${names} as they scored ${max}`
// }





person = document.querySelectorAll("input")
button = document.querySelectorAll(".dice")
result = document.querySelectorAll("span")
endButton = document.getElementById("endButton")
winMessage = document.getElementById("winMessage")

// disable endButton 
endButton.disabled = true

// for(let t of button){
//   t.addEventListener("click", diceRoll(t.innerText))
//   t.addEventListener("click", () => {diceRoll("hello")})
//   t.addEventListener("click", () => {diceRoll(t.innerText)})
// }

// function diceRoll(str){
//   console.log(str)
// }

for(let t of button){
  t.addEventListener("click", diceRoll)
}

let count = 0
function diceRoll(e){
  count++
  if(count == 5){
    endButton.disabled = false
  }
  //console.log(e.target.id)
  user_id = e.target.id - 1
  button[user_id].disabled = true
  dice_values = [1,2,3,4,5,6]
  dice_result = dice_values[parseInt(Math.random()*dice_values.length)]
  result[user_id].innerText = dice_result
}
// diceRoll()
endButton.addEventListener("click", findWinner)

function findWinner(){
  endButton.disabled = true
  max = result[0].innerText
  pos = []
  for( t of result){
    if(t.innerText > max){
      max = t.innerText
    }
  }
  
  for( i = 0; i<result.length; i++){
    if(result[i].innerText == max){
       pos.push(i)
    }
  }

  // console.log(max, pos)
  names = ""
  for(t of pos){
    names = names + person[t].value + ","
  }
  // console.log(names.slice(0, names.length-1))
  winMessage.innerText = `Winner is ${names} as they scored ${max}`
}
