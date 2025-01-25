const contactUsStart = document.getElementById('contact-us-start')
const contactUsInstructor = document.getElementById('contact-us-instructor')
const contactUsStudent = document.getElementById('contact-us-student')

contactUsInstructor.setAttribute('style', 'display: none;')
contactUsStudent.setAttribute('style', 'display: none;')

const instructorButton = document.getElementById('contact-us-nav-instructor')
const studentButton = document.getElementById('contact-us-nav-student')


instructorButton.addEventListener('click', () => {
  contactUsStart.setAttribute('style', 'display: none;')
  contactUsInstructor.setAttribute('style', '')
})

studentButton.addEventListener('click', () => {
  contactUsStart.setAttribute('style', 'display: none;')
  contactUsStudent.setAttribute('style', '')
})

const backButtons = document.querySelectorAll('.go-back');

backButtons.forEach((button) => {
  button.addEventListener('click', () => {
    contactUsInstructor.setAttribute('style', 'display: none;')
    contactUsStudent.setAttribute('style', 'display: none;')
    contactUsStart.setAttribute('style', '');
  })
})