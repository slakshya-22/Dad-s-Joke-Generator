const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// Fetch a random joke
async function generateJoke() {
  const con = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch("https://icanhazdadjoke.com/", con);
    const data = await response.json();
    jokeElement.textContent = data.joke;
  } catch (error) {
    jokeElement.textContent = "An error happened, try again later";
  }
}

jokeBtn.addEventListener("click", generateJoke);
