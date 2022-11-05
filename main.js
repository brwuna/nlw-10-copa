function createTeam(team1, hour, team2) {
  return `
    <li>
      <img src="./assets/teams/icon-${team1}.svg" alt="Bandeira do ${team1}" />
      <strong>${hour}</strong>
      <img src="./assets/teams/icon-${team2}.svg" alt="Bandeira de ${team2}"/>
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, group, teams) {
  delay = delay + 0.4;
  return `
    <div class="card swiper-slide" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <strong>${group}</strong>
      <ul>
        ${teams}
      </ul>
    </div>
  `
}

document.querySelector(".cards").innerHTML = `
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      ${createCard(
        "21/11",
        "segunda",
        "grupo A",
        createTeam("brazil", "16:00", "cameroon") +
          createTeam("hungary", "13:00", "argentina") +
          createTeam("colombia", "20:00", "japan")
      )}
      ${createCard(
        "21/11",
        "segunda",
        "grupo B",
        createTeam("england", "10:00", "iran") +
          createTeam("senegal", "13:00", "holanda") +
          createTeam("eua", "16:00", "gales")
      )}
      ${createCard(
        "23/11",
        "quarta",
        "grupo B",
        createTeam("botswana", "10:00", "burundi") +
          createTeam("honduras", "12:00", "antigua") +
          createTeam("islands", "21:00", "kazakhstan")
      )}
      ${createCard(
        "24/11",
        "quinta",
        "grupo C",
        createTeam("switzerland", "07:00", "cameroon") +
          createTeam("portugal", "13:00", "gana") +
          createTeam("brazil", "16:00", "serbia")
      )}
      ${createCard(
        "24/11",
        "quinta",
        "grupo D",
        createTeam("british", "08:00", "cameroon") +
          createTeam("india", "13:00", "armenia") +
          createTeam("comoros", "20:00", "jordan")
      )}
      ${createCard(
        "25/11",
        "sexta",
        "grupo F",
        createTeam("gales", "07:00", "iran") +
          createTeam("qatar", "10:00", "senegal") +
          createTeam("holanda", "13:00", "equador")
      )}
  </div>
  <div class="swiper-button-next">
            <img src="./assets/right.svg">
        </div>
        <div class="swiper-button-prev">
            <img src="./assets/left.svg">
        </div>
    </div>
`