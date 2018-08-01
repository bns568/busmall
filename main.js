//declaring empty image array that will store gifs
let gifArray = [];
//find gif tags in html 
let elGif1 = document.getElementById('random-gif1')
let elGif2 = document.getElementById('random-gif2')
let elGif3 = document.getElementById('random-gif3')
//declaring gif index for global access
let gifIndex1;
let gifIndex2;
let gifIndex3;

// new Constructor function for creating gif objects
let Gif = function(name, filePath, clicked) {
    this.name = name;
    this.filePath = filePath;
    this.clicked = clicked;
}

//instanitating new image object
let gif1 = new Gif('Struggs to Func', 'img/1.gif', 0);
let gif2 = new Gif('Mic Drop', 'img/2.gif', 0);
let gif3 = new Gif('Yas', 'img/3.gif', 0);
let gif4 = new Gif('Hello Bear', 'img/4.gif', 0);
let gif5 = new Gif('Oprah Shrug', 'img/5.gif', 0);
let gif6 = new Gif('Andy Dwyer', 'img/6.gif', 0);
let gif7 = new Gif('Elmo Fire', 'img/7.gif', 0);
let gif8 = new Gif('Cat Cloud', 'img/8.gif', 0);
let gif9 = new Gif('Michael Jackson', 'img/9.gif', 0);
let gif10 = new Gif('Homer Simpson', 'img/10.gif', 0);
let gif11 = new Gif('This Is Fine', 'img/11.gif', 0);
let gif12 = new Gif('Halloween', 'img/12.gif', 0);
let gif13 = new Gif('Basketball Eye Roll', 'img/13.gif', 0);
let gif14 = new Gif('Blue Buckets', 'img/14.gif', 0);
let gif15 = new Gif('Nope Squid', 'img/15.gif', 0);
let gif16 = new Gif('Dancing Shaq', 'img/16.gif', 0);
let gif17 = new Gif('Llama Denial', 'img/17.gif', 0);
let gif18 = new Gif('Llama Dance', 'img/18.gif', 0);
let gif19 = new Gif('Penguin Punch', 'img/19.gif', 0);
let gif20 = new Gif('Stop Sign', 'img/20.gif', 0);

//pushing gif objects to array
gifArray.push(gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11, gif12, gif13, gif14, gif15, gif16, gif17, gif18, gif19, gif20);

//select random gif
let randomGif1 = function() {
    let randomIndex = Math.floor(Math.random() * gifArray.length);

    //retrieve random gif from array
    gifIndex1 = gifArray[randomIndex];

    //assign src of gif tag to the random gif
    elGif1.src = gifIndex1.filePath;
}

let randomGif2 = function() {
    let randomIndex = Math.floor(Math.random() * gifArray.length);

    //retrieve random gif from array
    gifIndex2 = gifArray[randomIndex];

    while (gifIndex2 === gifIndex1) {
        randomIndex = Math.floor(Math.random() * gifArray.length);

        gifIndex2 = gifArray[randomIndex];
    }

    //assign src of gif tag to the random gif
    elGif2.src = gifIndex2.filePath;
}

let randomGif3 = function() {
    let randomIndex = Math.floor(Math.random() * gifArray.length);

    //retrieve random gif from array
    gifIndex3 = gifArray[randomIndex];

    while ((gifIndex3 === gifIndex1) || (gifIndex3 === gifIndex2)) {
        randomIndex = Math.floor(Math.random() * gifArray.length);

        gifIndex3 = gifArray[randomIndex];
    }

    //assign src of gif tag to the random gif
    elGif3.src = gifIndex3.filePath;
}

//creating event handler to track number of times random gif 1 is clicked
let gifClick1 = function(e) {
    //accessing clicked property on random image and incrementing by 1 each time clicked
    gifIndex1.clicked += 1;
    console.log(gifIndex1.clicked);
}

//creating event handler to track number of times random gif 2 is clicked
let gifClick2 = function(e) {
    //accessing clicked property on random image and incrementing by 1 each time clicked
    gifIndex2.clicked += 1;
    console.log(gifIndex2.clicked);
}

//creating event handler to track number of times random gif 3 is clicked
let gifClick3 = function(e) {
    //accessing clicked property on random image and incrementing by 1 each time clicked
    gifIndex3.clicked += 1;
    console.log(gifIndex3.clicked);
}

//attaching event listener to image tag
elGif1.addEventListener('click', gifClick1);
elGif2.addEventListener('click', gifClick2);
elGif3.addEventListener('click', gifClick3);

//calling random image function that will display random image
randomGif1();
randomGif2();
randomGif3();



