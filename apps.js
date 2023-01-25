let home = 0
let away = 0
let ThreeH = 0
let ThreeA = 0


form.reset()
document.getElementById("homeTeam,awayTeam")


function Player1Click(){
home+= 1
console.log(home);
let homeTeam=document.getElementById("homePoints")
console.log(homeTeam);
homeTeam.innerText = home
}

function ThreeHClick(){
home+= 3
console.log(ThreeH);
let homeTeam=document.getElementById("homePoints")
console.log(homeTeam);
homeTeam.innerText = home
}

function Player2Click(){
away+= 1
console.log(away);
let awayTeam=document.getElementById("awayPoints")
console.log(away);
awayTeam.innerText = away
}

function ThreeAClick(){
away+= 3
console.log(ThreeA);
let awayTeam=document.getElementById("awayPoints")
console.log(awayTeam);
awayTeam.innerText = away
}

function draw(){
    document.getElementById("homePoints")
}

function draw(){
    document.getElementById("awayPoints")
}

