import '../scss/styles.scss'
import imageItem01 from '../assets/item-01.jpg'
import imageNotebook from '../assets/notebook.jpg'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

const elemImageItem01 = new Image()
elemImageItem01.src = imageItem01

const elemImageNotebook = new Image()
elemImageNotebook.src = imageNotebook

// document.querySelector('#building')
//     .appendChild(elemImageBuilding)

// document.querySelector('#notebook')
    // .appendChild(elemImageNotebook)