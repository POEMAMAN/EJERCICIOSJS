const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  
  let streamerLOL = streamers.filter(function (streamer) {
    const streamerInclude = streamer.gameMorePlayed.includes('Legends');
    if (streamerInclude) {
        if (streamer.age > 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toLocaleUpperCase();
        }
        return true;
    }
    return false;
  })

//Comprobacion//
  console.log(streamerLOL);

  //Otra forma//

