const Treecko = () => {
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('body').style.color = 'white'
    document.querySelector('img').src = 'https://c.tenor.com/CRX0Xe6pLzEAAAAC/treecko-pokemon.gif'
}

const Torchic = () => {
    document.querySelector('body').style.backgroundColor = 'orange'
    document.querySelector('body').style.color = 'white'
    document.querySelector('img').src = 'https://c.tenor.com/_wCgU9OoJicAAAAS/torchic-happy.gif'
}

const Mudkip = () => {
    document.querySelector('body').style.backgroundColor = 'skyblue'
    document.querySelector('body').style.color = 'white'
    document.querySelector('img').src = 'https://i.pinimg.com/originals/18/2a/b9/182ab93474da5fa24050304ffece3c25.gif'
}

const Home = () => {
    location.reload();
}

document.getElementById('Green').onclick = Treecko

document.getElementById('Orange').onclick = Torchic

document.getElementById('Blue').onclick = Mudkip

document.getElementById('Black').onclick = Home


const stringToArray = (str) => str.split('a');

console.log(stringToArray('chodes are cool'));