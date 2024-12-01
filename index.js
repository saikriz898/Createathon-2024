function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "0px" || sidebar.style.width === "") {
      sidebar.style.width = "250px";  // Adjust the width of the sidebar when opened
  } else {
      sidebar.style.width = "0px";    // Close the sidebar
  }
}