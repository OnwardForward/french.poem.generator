function generatePoem(event) {
    event.preventDefault();
    
let apiKey = "722b06d0447t5a93do6af4432b6d8fb1";
let apiURL =
  "https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}";

new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 1,
    cursor: "",
});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
