var button = document.querySelector('#enterButton')
var vowelCount = 0
var input = document.querySelector('#input')

/*function to show response to click
reply_click = (clicked_id) => {
   // alert("Enter!")
    alert('clicked')
} */

button.addEventListener('click', () => {
   var input = document.querySelector('#input').value.toLowerCase();
   var split = input.split('')
   //alert(split)
   //loop to check each each element
   for (var i = 0; i <split.length; i++) {
        if (split[i] == 'a' || split[i] == 'e' || split[i] == 'i' || split[i] == 'o' || split[i] == 'u' || split[i] == 'y') {
            vowelCount++
        }
    }
    alert(`${input} has ${vowelCount} vowels!`)
    vowelCount = 0
})
