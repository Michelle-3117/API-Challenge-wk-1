
const body = document.querySelector('body');
//create my H tag
let heading = document.createElement('h1');
heading.setAttribute('class','heading')
heading.innerText = "Star Wars Characters";
//append child to parent.
body.appendChild(heading);


const charImages = [
    './Images2/Luke.jpeg',
    './Images2/c-3PO.jpeg',
    './Images2/r2-d2.jpeg',
    './Images2/darth-vader.jpeg',
    './Images2/Leia-organa.jpeg',
    './Images2/owen-lars.jpeg',
    './Images2/beru-whiteson.jpeg',
    './Images2/r2-d2.jpeg',
    './Images2/biggs-dark.jpeg',
    './Images2/obi-wan.jpeg'
]


async function main(){
    //fetch data.
let data = await fetch("https://swapi.dev/api/people");
//convert to jSon(Json is an object)
let newData = await data.json();
let characters = newData.results;

let mainDiv= document.createElement('div')
mainDiv.setAttribute('class','main-div');

body.appendChild(mainDiv)


characters.forEach((char, i)=>{
    //loop through each character, create a div and append image and pTag.

    let card = document.createElement('li')
    card.setAttribute('class', "card-items")

    let myImage = document.createElement('img')
    myImage.src =`${charImages[i]}`
    myImage.setAttribute('class','myImage')
    //newDiv.appendChild(myImage);

    let pTag = document.createElement('p');
    pTag.setAttribute('class', 'pTag')
    pTag.innerText = char.name;

    let pTag2 = document.createElement('p');
    pTag2.setAttribute('class', 'pTag2');
    pTag.addEventListener('click', () => {
        if(pTag2.style.display === 'none' || pTag2.style.display === ''){
            pTag2.style.display = 'inline-block';
        }else{
            pTag2.style.display = 'none'
        }
        pTag2.innerHTML = `
            <div>
                <h4>FEATURES</h4>
                <h5>Gender: ${char.gender}</h5>
                <h5>Height: ${char.height}</h5>
            </div>
        `
    })

    card.appendChild(myImage)
    card.appendChild(pTag)
    card.appendChild(pTag2)

    mainDiv.appendChild(card)

})
}
main()

// module.exports = { main }
