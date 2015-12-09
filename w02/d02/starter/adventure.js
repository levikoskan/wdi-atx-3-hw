console.log("Your friend has invited you to a party tonight")
var question = (prompt("Do you want to go to the party tonight?")).toLowerCase();

if (question === "yes") {

    var going = (prompt("Do you want to party hard? or take it easy? TYPE HARD OR EASY")).toLowerCase();
    //console.log("yes");
    if (going === "hard") {
        var drinks = parseInt(prompt("How many drinks will you have"), 10);
        if (drinks < 4) {
            console.log("Your friend thought you were going to have fun tonight. He is sad at you and leaves you behind at the party to find some roudy people.");
        } else if (drinks < 9) {
            console.log("You slam some drinks and your head is buzzing. Your drunk but not belligerent. You grab the microphon and scream the lyrics to sweet caroline after some peer pressure. Everyone joins in as you knew they would and you leave with some new best firends.");
        } else if (drinks < 13) {
            console.log("WOW! thats alot of drinks... Your body just can't handle all of that goodness and before you know it your spewing chuncks on the poor person that decided to sit next to you. The firend who invited you is so ashamed they never speak to you again.");
        } else {
            console.log("WAAAAAAAY to many drinks, You die");
        }
    } else {
        var drinks = parseInt(prompt("Taking it nice and sloooow, will you have 0-3 drinks?"), 10);
        if (drinks < 2) {
            console.log("You feel in controle but your self consciousness remains and you end up spending the night sitting in the corner and pretend to be texting someone.");
        } else {
            console.log("You hit the sweet spot. Your social juices are flowing and there's no limit to your charm. By the end of the night your what everyone is talking about.");
        }
      }

} else {
    var no = (prompt("You deside to stay home. Are you going to watch a movie and relax or do your homework? TYPE MOVIE OR HOMEWORK")).toLowerCase();
    //console.log("no");
    if (no === "homework") {
        console.log("Your such a good little student, you go the extra mile and feel great about yourself as you go to sleep.");
    } else {
        console.log("You put in your favorite move and forget about the world. As your relaxing you wonder if your friend is having a good time.");
    }
  }
