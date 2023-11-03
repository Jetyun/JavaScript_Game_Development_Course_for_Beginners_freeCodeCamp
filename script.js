const canvas= document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH=canvas.width=600
const CANVAS_HEIGHT=canvas.height=600
const spriteWidth = 575
const spriteHeight = 523
let gameFrame = 0
let staggerFrames =5

const spriteAnimations =[]
const animationStates=[
    {
        name:'idle',
        frames: 7,
    },
    {
        name:'jump',
        frames: 7,
    },
    {
        name:'fall',
        frames: 9,
    },
    {
        name:'run',
        frames: 9,
    },
    {
        name:'dizzy',
        frames: 11,
    },
    {
        name:'sit',
        frames: 7,
    },
    {
        name:'roll',
        frames: 7,
    },
    {
        name:'bite',
        frames: 7,
    },
    {
        name:'ko',
        frames: 12,
    },
    {
        name:'getHit',
        frames: 4,
    },
]
animationStates.forEach((state, index)=>{
    let frames={
        loc:[],
    }
for(let j=0; j<state.frames; j++){
    let positionX=j*spriteWidth;
    let positionY=index*spriteHeight;
    frames.loc.push({x: positionX, y:positionY})

}
spriteAnimations[state.name]=frames

})
console.log(spriteAnimations)
const playerImage =new Image()
playerImage.src='./public/shadow_dog.png'
function animate(){
ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations['idle'].loc.length
let frameX = spriteWidth*position
let frameY = spriteAnimations['idle'].loc[position].y
ctx.drawImage(playerImage, frameX* spriteWidth, frameY, spriteWidth, spriteHeight, 0 ,0, CANVAS_WIDTH, CANVAS_HEIGHT)

gameFrame++
requestAnimationFrame(animate)

}
animate()