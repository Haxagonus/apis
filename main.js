import axios from "axios"
const button = document.getElementById("button")

button.addEventListener("click",async(e)=>{
  e.preventDefault()
  const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=100")
  const randomNumber = Math.floor(Math.random()*100)
  document.getElementById("image").src = response.data[randomNumber].download_url
  document.getElementById("imageid").textContent = response.data[randomNumber].id
  document.getElementById("author").textContent = response.data[randomNumber].author
})
