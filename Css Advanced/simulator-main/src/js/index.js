import '../scss/styles.scss'
import imageBuilding from '../assets/owen-lystrup-boLgiM0qwkg-unsplash.jpg'
import imageNotebook from '../assets/mike-tinnion-3ym6i13Y9LU-unsplash.jpg'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')


const elemImageBuilding = new Image()
elemImageBuilding.src = imageBuilding

const elemImageNotebook = new Image()
elemImageNotebook.src = imageNotebook


document.querySelector('#building')
    .appendChild(elemImageBuilding)

document.querySelector('#Notebook')
    .appendChild(elemImageNotebook)