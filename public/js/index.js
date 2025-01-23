async function updateTodo(id) {
  const row = document.getElementById(`todo-${id}`);

  const [title, desc, dueDate] = row.querySelectorAll("td[contenteditable]");

  const data = {
    title: title.innerText,
    desc: desc.innerText,
    dueDate: new Date(dueDate.innerText).toISOString(),
  };

  let inps = document.querySelectorAll(".inp1");
  inps[0].value = data.title;
  inps[1].value = data.desc;
  inps[2].value = new Date(dueDate.innerText).toISOString().split("T")[0];

  deleteTodo(id);
  //   try {
  //     const response = await fetch(`/todo/update/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       alert("Todo updated successfully");
  //     } else {
  //       throw new Error("Failed to update todo");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert(error.message);
  //   }
}
async function deleteTodo(id) {
  try {
    const response = await fetch(`/todo/update/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.getElementById(`todo-${id}`).remove();
    } else {
      throw new Error("Failed to delete todo");
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

function isClicked(id) {
  const row = document.getElementById(`todo-${id}`);
  const cells = row.querySelectorAll("td[contenteditable]");
  const checkBox = document.getElementById(`check-${id}`);
  let audio = new Audio("./sound/notifications-sound-127856.mp3");

  // Add or remove the "line-through" class for all cells
  cells.forEach((cell) => {
    if (checkBox.checked) {
      cell.classList.add("line-through");
      audio.play();
      setTimeout(() => {
        audio.pause();
      }, 1000);
    } else {
      cell.classList.remove("line-through");
    }
  });
}
let prev = document.getElementById("prev_btn");
let next = document.getElementById("next_btn");
let dataPerPage = 4;
let currentPage = 1;
let tbody = document.getElementsByTagName("tbody")[0];
let trData = tbody.getElementsByTagName("tr");

// Convert the HTMLCollection to an array for easier manipulation
let rowsArray = Array.from(trData);

// Function to display rows for the current page
function displayPage(index) {
  let startIndex = (index - 1) * dataPerPage;
  let endIndex = index * dataPerPage;

  // Clear the table body
  tbody.innerHTML = "";

  // Display only the rows for the current page
  rowsArray.slice(startIndex, endIndex).forEach((row) => {
    tbody.appendChild(row);
  });

  // Disable/Enable buttons based on the page index
  prev.disabled = currentPage === 1;
  next.disabled = currentPage === Math.ceil(rowsArray.length / dataPerPage);
}

// Function to handle button click
function changePage(direction) {
  if (direction === "next" && currentPage < Math.ceil(rowsArray.length / dataPerPage)) {
    currentPage++;
  } else if (direction === "prev" && currentPage > 1) {
    currentPage--;
  }
  displayPage(currentPage);
}

// Attach event listeners to buttons
prev.addEventListener("click", () => changePage("prev"));
next.addEventListener("click", () => changePage("next"));

// Initial rendering of the first page
displayPage(currentPage);

