function displayPoem(response) {
    new Typewriter("#poem", {
    strings: response.dat,
    autoStart: true,
    delay: 1,
    cursor: "",
});
}

function generatePoem(event) {
    event.preventDefault();
    
let apiKey = "722b06d0447t5a93do6af4432b6d8fb1";
let prompt = "";
let context = "";
let apiURL =
  "https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key=722b06d0447t5a93do6af4432b6d8fb1";

axios.get(apiURL).then(displayPoem);



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
