const canvas = document.getElementById("canvasOne");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 700;
const explosions = []   
let canvasPosition = canvas.getBoundingClientRect()


class Explosion{
    constructor(x, y){

        this.spriteWidth= 200
        this.spriteHeight= 179
        this.width=this.spriteWidth*0.7
        this.height=this.spriteHeight*0.7
        this.x=x -this.width*.5
        this.y=y-this.height*.5
        this.image = new Image()
        this.image.src ='./public/boom.png'
        this.frame=0
        this.timer=0
    }
    update(){
        this.timer++
        if(this.timer%10===0){
            this.frame++
        }
    }
    draw(){
        ctx.drawImage(this.image, this.spriteWidth*this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height )
    }
}
window.addEventListener('click', function(e){
    createAnimation(e)
})

window.addEventListener('mousemove', function(e){
    createAnimation(e)

})

function createAnimation(){
    let positionX =e.x -canvasPosition.left 
    let positionY =e.y-canvasPosition.top 
    explosions.push(new Explosion(positionX, positionY))    


}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i=0; i< explosions.length; i++){
        explosions[i].update()
        explosions[i].draw()
        if(explosions[i].frame>5){
            explosions.splice(i,1)
            i--
        }
    }
    requestAnimationFrame(animate)


}
animate()
// /**@type {HTMLCanvasElement} */

// const canvas = document.getElementById("canvasOne")
// const ctx=canvas.getContext('2d')
// CANVAS_WIDTH=canvas.width=500
// CANVAS_HEIGHT=canvas.height=700
// const explosions=[]
// let canvasPosition = canvas.getBoundingClientRect()
// class Explosion{
//     constructor(x,y){
//         this.x=x -this.width*0.5
//         this.y=y-this.height*0.5
//         this.spriteWidth=200
//         this.spriteHeight=179
//         this.width = this.spriteWidth*0.7
//         this.height = this.spriteHeight*0.7
//         this.image= new Image()
//         this.image.src='./public/boom.png'
//         this.frame=0
//         this.timer=0

//     }
//     update(){
//         this.timer++
//         if(this.timer%10===0){
//             this.frame++

//         }
//     }
//     draw(){
//         ctx.drawImage(this.image, this.spriteWidth*this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height )
//     }

// }

// window.addEventListener('click', function(e){
//     let positionX=e.x -canvasPosition.left
//     let positionY=e.y -canvasPosition.top
//     explosions.push(new Explosion(positionX, positionY))
//     console.log(explosions)

// })
// function animate(){

//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     for(let i =0; i<explosions.length; i++){
//         explosions[i].update()
//         explosions[i].draw()
//     }
//     requestAnimationFrame(animate)
// }
// animate()













// if(rect1.x > rect2.x +rect2.width ||
//     rect1.x + rect1.width<rect2.x ||
//     rect1.y > rect2.y +rect2.height ||
//     rect1.y +rect1.height <rect2.y
//     ){
//         //no collision code
//     }else{
//         //collision code
//     }

// function animate(){
//     ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
//     ctx.fillRect(10, 10 , 200, 200)

// requestAnimationFrame(animate)
// }

// animate()
