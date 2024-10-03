let player_pts = Math.floor(Math.random() * 6);
let computer_pts = Math.floor(Math.random() * 6);

console.log(player_pts);
console.log(computer_pts);

if (computer_pts > player_pts) {
  alert(`${computer_pts}pts - Computer Win!`);
} else if (player_pts > computer_pts) {
  alert(`${player_pts}pts - Player Win!`);
} else {
  alert("DRAW!");
}
