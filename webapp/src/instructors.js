import { faker } from '@faker-js/faker';

let instructorNum = 0;
while (instructorNum < 25) {
  const section = document.getElementById('instructors')

  const card = document.createElement('div');
  card.classList.add('instructor-card');
  card.id = `instructor${instructorNum}`

  section.appendChild(card);

  const avatar = document.createElement('img')
  const url = faker.image.avatarGitHub()
  avatar.setAttribute('src', url)
  card.appendChild(avatar);

  const textContainer = document.createElement('div')
  textContainer.classList = 'instructor-card-text-container'
  card.appendChild(textContainer);

  const nameH3 = document.createElement('h3')
  nameH3.innerText = faker.person.fullName()
  textContainer.appendChild(nameH3);

  const schedule = document.createElement('p')
  switch (true) {
    case Math.random() >= 0.6:
      schedule.innerText = 'lesson format: in person'
      break;
    case 0.6 >= Math.random() > 0.3:
      schedule.innerText = 'lesson format: hybrid'
      break;
    case 0.3 >= Math.random():
      schedule.innerText = "lesson format: virtual"
  }
  schedule.setAttribute('style', 'font-weight: bold;')
  textContainer.appendChild(schedule);

  const bio = document.createElement('p')
  bio.innerText = faker.lorem.sentences(Math.random() * 10)
  textContainer.appendChild(bio);

  instructorNum += 1;
}