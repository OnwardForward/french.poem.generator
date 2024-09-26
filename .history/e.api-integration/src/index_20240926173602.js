function displayPoem(response) {
    console.log("Generating the respective poem.");
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
});
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "722b06d0447t5a93do6af4432b6d8fb1";
let context = "Hi Lover! Generate a 4-line romantic poem. Make sure to follow the instructions below.";
let prompt = 'Instructions: Generate the poem about ${instructionsInput.value}.';
let apiURL =
    "https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key=722b06d0447t5a93do6af4432b6d8fb1";

console.log("Generating the respective poem.");
console.log('Prompt: ${prompt}');
console.log('Context: ${context}');

axios.get(apiURL).then(displayPoem);



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
