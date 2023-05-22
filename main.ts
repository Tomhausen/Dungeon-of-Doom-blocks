namespace SpriteKind {
    export const Sword = SpriteKind.create()
    export const shield = SpriteKind.create()
}
function x_movement () {
    if (controller.left.isPressed()) {
        me.vx += -10
        me.setImage(assets.image`me left`)
    } else if (controller.right.isPressed()) {
        me.vx += 10
        me.setImage(assets.image`me right`)
    }
    me.vx = me.vx * 0.9
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump_count < 2) {
        me.vy = -175
        jump_count += 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.background(function () {
        shield.setFlag(SpriteFlag.Invisible, false)
        shield.setFlag(SpriteFlag.GhostThroughSprites, false)
        sword.setFlag(SpriteFlag.Invisible, true)
        pause(1000)
        shield.setFlag(SpriteFlag.Invisible, true)
        shield.setFlag(SpriteFlag.GhostThroughSprites, true)
        sword.setFlag(SpriteFlag.Invisible, false)
    })
    shield.setPosition(me.x, me.y)
    if (me.image.equals(assets.image`me left`)) {
        me.setImage(assets.image`shield left`)
    } else {
        me.setImage(assets.image`shield right`)
    }
})
function handle_direction () {
    if (me.image.equals(assets.image`me left`)) {
        sword.setPosition(me.x - 10, me.y - 6)
        if (!(attacking)) {
            sword.setImage(assets.image`sword left`)
        }
    } else {
        sword.setPosition(me.x + 10, me.y - 6)
        if (!(attacking)) {
            sword.setImage(assets.image`sword right`)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("attack", 750, function () {
        timer.background(function () {
            attacking = true
            pause(250)
            attacking = false
        })
        if (me.image.equals(assets.image`me left`)) {
            animation.runImageAnimation(
            sword,
            assets.animation`swing left`,
            50,
            false
            )
        } else {
            animation.runImageAnimation(
            sword,
            assets.animation`swing right`,
            50,
            false
            )
        }
    })
})
function load_level () {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(me, assets.tile`player spawn`)
    tiles.setTileAt(me.tilemapLocation(), assets.tile`wall`)
    tiles_to_animate = tiles.getTilesByType(assets.tile`torch`)
}
sprites.onOverlap(SpriteKind.Sword, SpriteKind.Enemy, function (sword, enemy) {
    if (attacking) {
        info.changeScoreBy(100)
        enemy.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (me, enemy) {
    if (!(me.overlapsWith(shield))) {
        info.changeLifeBy(-1)
        pause(2000)
    }
})
sprites.onOverlap(SpriteKind.shield, SpriteKind.Enemy, function (sprite, otherSprite) {
    tilesAdvanced.followUsingPathfinding(otherSprite, me, 0)
    if (sprite.image.equals(assets.image`shield left`)) {
        x_vel = -100
    } else {
        x_vel = 100
    }
    for (let index = 0; index < 10; index++) {
        otherSprite.vx = x_vel
        pause(10)
    }
    pause(500)
    tilesAdvanced.followUsingPathfinding(otherSprite, me, 50)
})
function y_movement () {
    me.vy += gravity
    if (me.isHittingTile(CollisionDirection.Bottom)) {
        me.vy = 0
        jump_count = 0
    }
}
function position_enemy (enemy: Sprite) {
    tiles.placeOnRandomTile(enemy, assets.tile`wall`)
    if (spriteutils.distanceBetween(me, enemy) < 180) {
        position_enemy(enemy)
    }
}
let anim: Image[] = []
let enemy: Sprite = null
let x_vel = 0
let attacking = false
let shield: Sprite = null
let sword: Sprite = null
let me: Sprite = null
let jump_count = 0
let gravity = 0
let tiles_to_animate: tiles.Location[] = []
tiles_to_animate = []
let frame = 0
gravity = 8
jump_count = 2
info.setScore(0)
info.setLife(3)
me = sprites.create(assets.image`me right`, SpriteKind.Player)
scene.cameraFollowSprite(me)
sword = sprites.create(assets.image`sword right`, SpriteKind.Sword)
sword.setFlag(SpriteFlag.GhostThroughWalls, true)
sword.scale = 1.5
load_level()
shield = sprites.create(assets.image`shield right`, SpriteKind.shield)
shield.setFlag(SpriteFlag.Invisible, true)
shield.setFlag(SpriteFlag.GhostThroughSprites, true)
game.onUpdate(function () {
    x_movement()
    y_movement()
    handle_direction()
})
game.onUpdateInterval(2000, function () {
    enemy = sprites.create(assets.image`bat`, SpriteKind.Enemy)
    position_enemy(enemy)
    tilesAdvanced.followUsingPathfinding(enemy, me, 50)
    animation.runImageAnimation(
    enemy,
    assets.animation`bat right`,
    100,
    true
    )
})
game.onUpdateInterval(200, function () {
    anim = assets.animation`torch flicker`
    for (let value of tiles_to_animate) {
        tiles.setTileAt(value, anim[frame])
    }
    frame += 1
    if (frame == anim.length - 1) {
        frame = 0
    }
})
