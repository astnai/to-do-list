// Get references to DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to create new tasks
function addTask() {
   // Check if there is any text entered
   if (!inputBox.value) {
      alert("You must enter something!");
   } else {
      const li = document.createElement("li");
      li.innerText = inputBox.value;
      listContainer.append(li);
      const span = document.createElement("span");
      span.innerText = "\u00D7";
      li.append(span);
   }
   inputBox.value = "";
}

// Event listener for clicks on the list container
listContainer.addEventListener("click", function (event) {
   // Check the clicked element's nodeName
   console.log(event.target.nodeName);
   if (event.target.nodeName == "LI") {
      // Toggle the 'checked' class for the clicked LI
      event.target.classList.toggle("checked");
   } else if (event.target.nodeName == "SPAN") {
      // Remove the closest LI when the SPAN inside it is clicked
      event.target.closest("li").remove();
   }
});

// Event listener for keydown events
window.onload = () => {
   window.addEventListener('keydown', function (event) {
      var keyCode = event.which || event.keyCode;
      // Check if the Enter key is pressed (keyCode 13)
      if ((keyCode === 13)) {
         // Call the addTask function when Enter key is pressed
         addTask();
      };
   });
};
