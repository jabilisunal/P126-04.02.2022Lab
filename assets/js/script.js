// Task-1 START

// let color = document.getElementById("color");
// let width = document.getElementById("width");
// let btn = document.getElementById("change-btn");
// let figure = document.querySelector(".figure");

// btn.addEventListener("click", function () {
// //   if (color.value == "" || width.value == "") {
// //     alert("Agilli ol");
// //     return;
// //   }
//   figure.style.backgroundColor = color.value;
//   figure.style.width = width.value + "px";
// });

// Task-1 END

let filters = document.querySelector(".filters");
let galleryItem = document.querySelectorAll(".gallery-item");

filters.addEventListener("click", function (e) {
  if (e.target.classList.contains("filter-item")) {
    filters.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    let filtervalue = e.target.getAttribute("data-filter")
    galleryItem.forEach((item)=>{
        if(item.classList.contains(filtervalue) || filtervalue=="all"){
            item.classList.remove("hide")
            item.classList.add("show")
        }else{
            item.classList.remove("show")

            item.classList.add("hide")
        }
    })
  }
});
