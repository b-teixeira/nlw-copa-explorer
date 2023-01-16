function createGame(team1, hour, team2) {
  return `
    <li>
      <img src="./assets/bnd_${team1}.svg" alt="Bandeira do ${team1}" />
      <strong>${hour}</strong>
      <img src="./assets/bnd_${team2}.svg" alt="Bandeira da ${team2}" />
    </li>
  `
}

let delay = 0.8
function creatCard(date, day, games) {
  delay = delay + 0.8
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  creatCard("24/11", "quinta-feira", createGame("brasil", "16:00", "servia")) +
  creatCard("28/11", "segunda-feira", createGame("brasil", "13:00", "suica")) +
  creatCard("04/11", "sábado", createGame("brasil", "16:00", "camaroes"))
