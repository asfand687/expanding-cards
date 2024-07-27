const imgParents = document.querySelectorAll(".img-parent");

imgParents.forEach(item => {

  // This is referencing click event to expand function for each element
  item.onclick = expand;
})

function removeActiveFromAllElements() {
  imgParents.forEach(item => {

    item.classList.remove("active");
  })
}

function expand(e) {
  
  removeActiveFromAllElements()
  e.target.classList.add("active");
}