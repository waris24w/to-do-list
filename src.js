const userText = document.getElementById('textbox');
const listContainer = document.getElementById('list-container');
const clearBtn = document.getElementById("clear-btn");


function addtask(){
	if (userText.value === ''){
		alert('You must add a task.')
	}
	else{
		let li = document.createElement('li'); //craeting elememnt
		li.innerHTML = userText.value; // adding element
		listContainer.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span);
		clearBtn.style.display = "block"  //Displaying btn on screen
	}
	userText.value = '';
	saveData()
} 
userText.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    addtask();
  }
});

//When someone click on li or x
listContainer.addEventListener('click', function(e){
  const target = e.target;
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');
    saveData()
  } else if (target.tagName === 'SPAN') {
    target.parentElement.remove();
    saveData()
  }
}, false);

// clear all task 
clearBtn.addEventListener("click", function() {
  listContainer.innerHTML = '';
  saveData();
  clearBtn.style.display = "none"; // hide again when empty
});



// saving the data
function saveData(){
	localStorage.setItem('data', listContainer.innerHTML)
}
// showing the data
function showData(){
	listContainer.innerHTML = localStorage.getItem('data');
}

showData()