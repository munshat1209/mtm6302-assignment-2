
const $gallery = document.getElementById('gallery')
const $display = document.getElementById('display')

let photos = []

for (let i = 1; i<=12; i++ ) {
    photos.push( `<img src="/images/image_${i}.jpg" title='${i}'>`);  
}

$gallery.innerHTML = photos.join('')

const listOfDescriptions = [
    `A beautiful ocean-eyes woman is swimming.`,
    `A teacher went for a walk in the fall season.`,
    `A model is posing in a photography session.`,
    `Turquoise scarf matching with the turquoise eyes.`,
    `Saturated effects added on a B/W image.`,
    `Attractive girl in a black and white picture.`,
    `Winter is coming soon.`,
    `"Dark makeup represents my personality"`,
    `'Mac' makeup brand advertisement.`,
    `A model posing for a magazine.`,
    `Makeup brand advertisements.`,
    `Illustration effects on b/w image with colors.`

]

$gallery.addEventListener('click', function(event) {
    let image = event.target; 
    image.classList.toggle('resize');
    $display.textContent = listOfDescriptions[event.target.title-1]
})