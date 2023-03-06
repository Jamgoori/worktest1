function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function selectItem(item) {
  const dropdownBtn = document.getElementsByClassName("dropbtn")[0];
  dropdownBtn.innerHTML = item;
  document.getElementById("selectedItem").value = item;
  const dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.remove("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// 전체화면

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}
