//Data
const playlist = [
    {
        name: "Nick Cave",
        link: "https://www.youtube.com/watch?v=P51IVqf28Hs&ab_channel=NickCaveandtheBadSeeds"
    },
    {
        name: "Kino",
        link: "https://www.youtube.com/watch?v=zumiGPNp9_o&ab_channel=allarich"
    },
    {
        name: "Arctic Monkeys",
        link: "https://www.youtube.com/watch?v=qcI5-nOEsYM&ab_channel=JonJones"
    },
    {
        name: "Joy Division",
        link: "https://www.youtube.com/watch?v=zuuObGsB0No&ab_channel=JoyDivision"
    },
    {
        name: "Zemfira",
        link: "https://www.youtube.com/watch?v=Ap6dCyFTk-Y&ab_channel=zemfira"
    },
    {
        name: "Inola",
        link: "https://www.youtube.com/watch?v=oG8gWGrkjL8&ab_channel=ChristineRobakidze"
    },
    {
        name: "Tame Impala",
        link: "https://www.youtube.com/watch?v=hI1Xe1sAPgY&ab_channel=Haatchii"
    },
    {
        name: "Folamour",
        link: "https://youtu.be/wL-VMOGAhzE?t=1849"
    },
    {
        name: "Kancheli",
        link: "https://www.youtube.com/watch?v=Do17LTb0keQ&ab_channel=FunChannel"
    },
    {
        name: "Bob Dylan",
        link: "https://www.youtube.com/watch?v=90WD_ats6eE&ab_channel=BobDylanVEVO"
    },
    {
        name: "Yanamaste",
        link: "https://www.youtube.com/watch?v=cgcOmFDurTA&ab_channel=HATE"
    },
    {
        name: "Tkivilsaari",
        link: "https://www.youtube.com/watch?v=3BxmqCshZUo&ab_channel=Kerbela"
    },
    {
        name: "Dubyshkin",
        link: "https://www.youtube.com/watch?v=xv0ZrRGPhs4&ab_channel=triprecordings"
    },
    {
        name: "Lagidze",
        link: "https://www.youtube.com/watch?v=x_ceSlL7Txw"
    },
    {
        name: "The Doors",
        link: "https://www.youtube.com/watch?v=aEXoQbxy8sI&ab_channel=RockArtMichal"
    },
    {
        name: "East Flatbush Project",
        link: "https://www.youtube.com/watch?v=ADaoQizLQDA"
    },
    {
        name: "...",
        link: ""
    }
];

//Making boxes

const makeDivs = playlist.forEach((mus) => {
    const div = document.createElement('div');
    const link = document.createElement('a');
    div.classList.add('box');
    link.setAttribute('href', mus.link);
    link.setAttribute('target', "_blank");
    link.innerText = mus.name;
    div.appendChild(link);
    document.getElementById('maindiv').appendChild(div);
})



//Showing and removing boxes

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
checkBoxes(); 

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

//Hidden Search Button stuff

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
input.classList.remove('positive');
input.classList.remove('negative');
search.classList.toggle('active');
input.focus();
})

playlist.forEach(track => {
    if(track.name === input.value){
        alert("good");
    }
})

//Finding out whether or not there is a track in the playlist. Green = match, Red = no match.
input.addEventListener('change', updateValue);

function updateValue(e) {
    var counter = 0;
    playlist.forEach(track => {
    if(track.name.toLowerCase() == e.target.value.toLowerCase()){
        input.classList.remove('negative');
        input.classList.add('positive');
        console.log(input.classList);
    counter++
    }
})
  if(counter === 0){
      input.classList.remove('positive');
    input.classList.add('negative');
  }

}