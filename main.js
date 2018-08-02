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
    this.shown = 0;
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

    //add 1 to shown property
    gifIndex1.shown ++;
    console.log(gifIndex1.name + " shown: " + gifIndex1.shown)

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

    //add 1 to shown property
    gifIndex2.shown ++;
    console.log(gifIndex2.name + " shown: " + gifIndex2.shown)

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

    //add 1 to shown property
    gifIndex3.shown ++;
    console.log(gifIndex3.name + " shown: " + gifIndex3.shown)

    //assign src of gif tag to the random gif
    elGif3.src = gifIndex3.filePath;
    console.log("gif Index 3 = " + gifIndex3)
}

//creating event handler to track number of times random gif 1 is clicked
let gifClick1 = function(e) {
    //accessing clicked property on random image and incrementing by 1 each time clicked
    gifIndex1.clicked += 1;
    console.log(gifIndex1.clicked);

    chart = new Chart(ctx, {
        //setting the type of chart to bar
        type: 'bar',
        //giving data property to chart
        data: {
            //setting the lables as image names
            labels: [gif1.name, gif2.name, gif3.name, gif4.name, gif5.name, gif6.name, gif7.name, gif8.name, gif9.name, gif10.name, gif11.name, gif12.name, gif13.name, gif14.name, gif15.name, gif16.name, gif17.name, gif18.name, gif19.name, gif20.name],
            //passing in array of datasets to populate individual bars, each dataset will create a new bar for our chart
            datasets: [
            {
                label: 'Displayed',
                backgroundColor: 'rgb(99, 99, 99)',
                borderColor: 'rgb(99, 99, 99)',
                //passing in clicked property as data to calculate bars for each label
                data: [gif1.shown, gif2.shown, gif3.shown, gif4.shown, gif5.shown, gif6.shown, gif7.shown, gif8.shown, gif9.shown, gif10.shown, gif11.shown, gif12.shown, gif13.shown, gif14.shown, gif15.shown, gif16.shown, gif17.shown, gif18.shown, gif19.shown, gif20.shown]
            },
            {
                //setting the label of the key to Clicked and giving bars styles
                label: 'Clicked',
                backgroundColor: 'rgb(255, 99, 130)',
                borderColor: 'rgb(255, 99, 130)',
                //passing in clicked property as data to calculate bars for each label
                data: [gif1.clicked, gif2.clicked, gif3.clicked, gif4.clicked, gif5.clicked, gif6.clicked, gif7.clicked, gif8.clicked, gif9.clicked, gif10.clicked, gif11.clicked, gif12.clicked, gif13.clicked, gif14.clicked, gif15.clicked, gif16.clicked, gif17.clicked, gif18.clicked, gif19.clicked, gif20.clicked]
            }
        ],
        options: {
            scaleShowValues: true,
            scales: {
                xAxes: [
                    {
                        stacked: false, 
                        ticks: {
                            stepSize: 1,
                            min: 0,
                            autoSkip: false
                        }
                    }
                ]
            }
            
        }
        }
    })
    console.log("working")

    randomGif1(); 
    randomGif2();
    randomGif3(); 
}

//creating event handler to track number of times random gif 2 is clicked
let gifClick2 = function(e) {
    //accessing clicked property on random image and incrementing by 1 each time clicked
    gifIndex2.clicked += 1;
    console.log(gifIndex2.clicked);

    // chart = new Chart(ctx, {
    //     //setting the type of chart to bar
    //     type: 'bar',
    //     //giving data property to chart
    //     data: {
    //         //setting the lables as image names
    //         labels: [gif1.name, gif2.name, gif3.name, gif4.name, gif5.name, gif6.name, gif7.name, gif8.name, gif9.name, gif10.name, gif11.name, gif12.name, gif13.name, gif14.name, gif15.name, gif16.name, gif17.name, gif18.name, gif19.name, gif20.name],
    //         //passing in array of datasets to populate individual bars, each dataset will create a new bar for our chart
    //         datasets: [
    //         {
    //             label: 'Displayed',
    //             backgroundColor: 'rgb(99, 99, 99)',
    //             borderColor: 'rgb(99, 99, 99)',
    //             //passing in clicked property as data to calculate bars for each label
    //             data: [gif1.shown, gif2.shown, gif3.shown, gif4.shown, gif5.shown, gif6.shown, gif7.shown, gif8.shown, gif9.shown, gif10.shown, gif11.shown, gif12.shown, gif13.shown, gif14.shown, gif15.shown, gif16.shown, gif17.shown, gif18.shown, gif19.shown, gif20.shown]
    //         },
    //         {
    //             //setting the label of the key to Clicked and giving bars styles
    //             label: 'Clicked',
    //             backgroundColor: 'rgb(255, 99, 130)',
    //             borderColor: 'rgb(255, 99, 130)',
    //             //passing in clicked property as data to calculate bars for each label
    //             data: [gif1.clicked, gif2.clicked, gif3.clicked, gif4.clicked, gif5.clicked, gif6.clicked, gif7.clicked, gif8.clicked, gif9.clicked, gif10.clicked, gif11.clicked, gif12.clicked, gif13.clicked, gif14.clicked, gif15.clicked, gif16.clicked, gif17.clicked, gif18.clicked, gif19.clicked, gif20.clicked]
    //         }
    //     ]
    //     }
    // })
    console.log("working")
    randomGif1(); 
    randomGif2();
    randomGif3(); 
}

//creating event handler to track number of times random gif 3 is clicked
let gifClick3 = function(e) {
    //accessing clicked property on random image and incrementing by 1 each time clicked
    gifIndex3.clicked += 1;
    console.log(gifIndex3.clicked);

    // chart = new Chart(ctx, {
    //     //setting the type of chart to bar
    //     type: 'bar',
    //     //giving data property to chart
    //     data: {
    //         //setting the lables as image names
    //         labels: [gif1.name, gif2.name, gif3.name, gif4.name, gif5.name, gif6.name, gif7.name, gif8.name, gif9.name, gif10.name, gif11.name, gif12.name, gif13.name, gif14.name, gif15.name, gif16.name, gif17.name, gif18.name, gif19.name, gif20.name],
    //         //passing in array of datasets to populate individual bars, each dataset will create a new bar for our chart
    //         datasets: [
    //         {
    //             label: 'Displayed',
    //             backgroundColor: 'rgb(99, 99, 99)',
    //             borderColor: 'rgb(99, 99, 99)',
    //             //passing in clicked property as data to calculate bars for each label
    //             data: [gif1.shown, gif2.shown, gif3.shown, gif4.shown, gif5.shown, gif6.shown, gif7.shown, gif8.shown, gif9.shown, gif10.shown, gif11.shown, gif12.shown, gif13.shown, gif14.shown, gif15.shown, gif16.shown, gif17.shown, gif18.shown, gif19.shown, gif20.shown]
    //         },
    //         {
    //             //setting the label of the key to Clicked and giving bars styles
    //             label: 'Clicked',
    //             backgroundColor: 'rgb(255, 99, 130)',
    //             borderColor: 'rgb(255, 99, 130)',
    //             //passing in clicked property as data to calculate bars for each label
    //             data: [gif1.clicked, gif2.clicked, gif3.clicked, gif4.clicked, gif5.clicked, gif6.clicked, gif7.clicked, gif8.clicked, gif9.clicked, gif10.clicked, gif11.clicked, gif12.clicked, gif13.clicked, gif14.clicked, gif15.clicked, gif16.clicked, gif17.clicked, gif18.clicked, gif19.clicked, gif20.clicked]
    //         }
    //     ]
    //     }
    // })
    console.log("working")
    randomGif1(); 
    randomGif2();
    randomGif3(); 
}

//get canvas element by ID
let elCanvas = document.getElementById('chart');
//set canvas element context as 2d
let ctx = elCanvas.getContext('2d');

//attaching event listener to image tag
elGif1.addEventListener('click', gifClick1);
elGif2.addEventListener('click', gifClick2);
elGif3.addEventListener('click', gifClick3);

//calling random image function that will display random image
randomGif1();
randomGif2();
randomGif3();



