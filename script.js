function togglemode() {
  const html = document.documentElement
  html.classList.toggle("ligth")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("ligth")) {
    img.setAttribute("src", "./assets/profile-ligth.png")
  } else {
    img.setAttribute("src", "./assets/profile-dark.png")
  }
}
