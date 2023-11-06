/**@type {HTMLCanvasElement}*/
const canvas=document.getElementById('canvas1')
const ctx =canvas.getContext('2d')
CANVAS_WIDTH =canvas.width=500
CANVAS_HEIGHT=canvas.height=1000
const numberOfEnemies =100
const enemies=[]
let gameFrame=0

class Enemy{
    constructor(){
        this.image= new Image() 
        this.image.src='./public/enemies/enemy2.png'
        this.speed= Math.random()*4+1
        this.spriteWidth=266
        this.spirteHeight= 188
        this.width = this.spriteWidth/2.5
        this.height= this.spirteHeight/2.5
        this.x=Math.random()*(canvas.width-this.width)
        this.y=Math.random()*(canvas.height-this.height)
        this.frame= 0   
        this.flapSpeed=Math.floor(Math.random()*3+1)
        this.angle= Math.random()*2
    }
    update(){
        this.x-=this.speed
        this.y+=Math.sin(this.angle)
        this.angle+=0.1
        if(this.x+this.width<0) this.x=canvas.width
        if(gameFrame%this.flapSpeed===0){
            this.frame>4?this.frame=0:this.frame++

        }
        

    }
    draw(){
        ctx.drawImage(this.image, this.frame*this.spriteWidth, 0, this.spriteWidth, this.spirteHeight, this.x, this.y, this.width, this.height)


    }

}
for(let i=0; i<numberOfEnemies; i++){
enemies.push(new Enemy())
}
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemies.forEach(enemy=>{
        enemy.update()
        enemy.draw()

    })
    gameFrame++

    requestAnimationFrame(animate)

}

animate()

// code for stationery enemy1

// /**@type {HTMLCanvasElement}*/
// const canvas=document.getElementById('canvas1')
// const ctx =canvas.getContext('2d')
// CANVAS_WIDTH =canvas.width=500
// CANVAS_HEIGHT=canvas.height=1000
// const numberOfEnemies =100
// const enemies=[]
// let gameFrame=0

// class Enemy{
//     constructor(){
//         this.image= new Image() 
//         this.image.src='./public/enemies/enemy1.png'

//         // this.speed= Math.random()*4-2
//         this.spriteWidth=293
//         this.spirteHeight= 155
//         this.width = this.spriteWidth/2.5
//         this.height= this.spirteHeight/2.5
//         this.x=Math.random()*(canvas.width-this.width)
//         this.y=Math.random()*(canvas.height-this.height)
//         this.frame= 0   
//     this.flapSpeed=Math.floor(Math.random()*3+1)

//     }
//     update(){
//         this.x+=Math.random()*5 -2.5
//         this.y+=Math.random()*5 -2.5
//         if(gameFrame%this.flapSpeed===0){
//             this.frame>4?this.frame=0:this.frame++

//         }
        

//     }
//     draw(){
//         ctx.drawImage(this.image, this.frame*this.spriteWidth, 0, this.spriteWidth, this.spirteHeight, this.x, this.y, this.width, this.height)


//     }

// }
// for(let i=0; i<numberOfEnemies; i++){
// enemies.push(new Enemy())
// }
// function animate(){
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
//     enemies.forEach(enemy=>{
//         enemy.update()
//         enemy.draw()

//     })
//     gameFrame++

//     requestAnimationFrame(animate)

// }

// animate()