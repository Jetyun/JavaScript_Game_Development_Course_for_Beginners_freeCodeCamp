//code for enemy4 (each enemy move in random direction)

/**@type {HTMLCanvasElement}*/
const canvas=document.getElementById('canvas1')
const ctx =canvas.getContext('2d')
CANVAS_WIDTH =canvas.width=500
CANVAS_HEIGHT=canvas.height=1000
const numberOfEnemies =20
const enemies=[]
let gameFrame=0

class Enemy{
    constructor(){
        this.image= new Image() 
        this.image.src='./public/enemies/enemy4.png'
        this.speed= Math.random()*4+1
        this.spriteWidth=213
        this.spirteHeight= 213
        this.width = this.spriteWidth/2.5
        this.height= this.spirteHeight/2.5
        this.x=Math.random()*(canvas.width-this.width)
        this.y=Math.random()*(canvas.height-this.height)
        this.newX =Math.random() *(canvas.width- this.width)
        this.newY =Math.random() *(canvas.height- this.height)
        this.frame= 0   
        this.flapSpeed=Math.floor(Math.random()*3+1)
        this.interval= Math.floor(Math.random()*200+50)
    }
    update(){
        if (gameFrame %this.interval===0){
            this.newX =Math.random() *(canvas.width- this.width)
        this.newY =Math.random() *(canvas.height- this.height)
        }
        let dx = this.x - this.newX
        let dy = this.y - this.newY
        this.x-= dx/70
        this.y-= dy/70
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

//code for enemy3 (move with pattern)

// /**@type {HTMLCanvasElement}*/
// const canvas=document.getElementById('canvas1')
// const ctx =canvas.getContext('2d')
// CANVAS_WIDTH =canvas.width=500
// CANVAS_HEIGHT=canvas.height=1000
// const numberOfEnemies =20
// const enemies=[]
// let gameFrame=0

// class Enemy{
//     constructor(){
//         this.image= new Image() 
//         this.image.src='./public/enemies/enemy3.png'
//         this.speed= Math.random()*4+1
//         this.spriteWidth=218
//         this.spirteHeight= 177
//         this.width = this.spriteWidth/2.5
//         this.height= this.spirteHeight/2.5
//         this.x=Math.random()*(canvas.width-this.width)
//         this.y=Math.random()*(canvas.height-this.height)
//         this.frame= 0   
//         this.flapSpeed=Math.floor(Math.random()*3+1)
//         this.angle= 0
//         this.angleSpeed = Math.random()*20+0.5
//         // this.curve=Math.random()*200+50
//     }
//     update(){
//         this.x=canvas.width/2* Math.cos(this.angle *Math.PI/90) +(canvas.width/2 - this.width/2)  
//         this.y=canvas.height/2* Math.sin(this.angle *Math.PI/270) +(canvas.height/2 - this.height/2)
//         this.angle+=this.angleSpeed
//         if(this.x+this.width<0) this.x=canvas.width
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



// code for endless flying right to left enemy2

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
//         this.image.src='./public/enemies/enemy2.png'
//         this.speed= Math.random()*4+1
//         this.spriteWidth=266
//         this.spirteHeight= 188
//         this.width = this.spriteWidth/2.5
//         this.height= this.spirteHeight/2.5
//         this.x=Math.random()*(canvas.width-this.width)
//         this.y=Math.random()*(canvas.height-this.height)
//         this.frame= 0   
//         this.flapSpeed=Math.floor(Math.random()*3+1)
//         this.angle= Math.random()*2
//         this.angleSpeed = Math.random()*0.2
//         this.curve=Math.random()*10
//     }
//     update(){
//         this.x-=this.speed
//         this.y+=this.curve*Math.sin(this.angle)
//         this.angle+=this.angleSpeed
//         if(this.x+this.width<0) this.x=canvas.width
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