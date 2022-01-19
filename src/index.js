const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then(res => res.json())
.then(dogs => renderImage(dogs.message))
.catch(error => console.log(error))

function renderImage(dogPics) {
  const container = document.querySelector("#dog-image-container")
  dogPics.forEach(dogUrl => {
    const img = document.createElement('img')
    img.src = dogUrl
    img.alt = "image of dog"
    container.appendChild(img)

  })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then(res => res.json())
.then(breeds => renderBreed(breeds.message))
.catch(error => console.log(error))

function renderBreed(breed) {
  const ul = document.querySelector("#dog-breeds")
  for (dogName in breed) {
    const li = document.createElement("li")
    li.textContent = dogName
    
    ul.appendChild(li); 
    li.addEventListener("click", (e) => e.target.style.color = "green")
  };
    
  
  // })
}



