// 5. Death Logic
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let platform: Sprite = null
// 1. Game Constants & Variables
// Starting speed (negative moves UP)
let platformSpeed = -60
// How much faster it gets each level
let speedIncrease = -5
scene.setBackgroundColor(9)
// 2. Setup Player
let player2 = sprites.create(img`
    . 8 8 8 8 8 8 . 
    8 8 1 8 8 1 8 8 
    8 8 8 8 8 8 8 8 
    8 8 8 1 1 8 8 8 
    8 1 8 8 8 8 1 8 
    8 8 1 1 1 1 8 8 
    . 8 8 8 8 8 8 . 
    `, SpriteKind.Player)
player2.setPosition(80, 40)
controller.moveSprite(player2, 100, 0)
player2.setStayInScreen(true)
// 3. Speed Difficulty Timer
// Every 2 seconds (2000ms), increase the speed
game.onUpdateInterval(2000, function () {
    platformSpeed += speedIncrease
})
// 4. Spawner using the Variable
game.onUpdateInterval(800, function () {
    platform = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Enemy)
    platform.x = Math.randomRange(10, 150)
    platform.y = 120
    // Instead of a number, we use our variable!
    platform.vy = platformSpeed
    platform.setFlag(SpriteFlag.AutoDestroy, true)
})
// 6. Score Logic
game.onUpdateInterval(500, function () {
    info.changeScoreBy(1)
})
