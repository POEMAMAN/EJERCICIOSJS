
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const btn$$ = document.querySelector('[data-function="toFilterStreamers"]')

btn$$.addEventListener("click", updateValue);

function updateValue() {
  const input$$ = document.querySelector('[data-function="toFilterStreamers"]');
  const inputValue = this.value;
   let LOL = streamers.filter(function (streamer) {
return streamer.name.includes(inputValue)});
console.log(LOL);
}


//funciona//
