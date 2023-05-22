// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400140002020204020202020302020202020202020202020202020202020202030202020202020202020202020202020303030303030302020302020202020202020203020202020202020202020202030303030204020202020402020202040202020202020202020202020202020202020202020202020202040203030303030303030202020202020202020202020202020202020202020202020203030303030303020204020202020202020202020202020202020202020202020202020402020202020402020202020202020202020202020202020202020202020202020202020203030303030303030303020202020202020202020202020202020202020202020402020202040202020202020204020202020202020202020202020202020202020202020202020202020203030303030303020202020202030303030303030202020202020202020202020202020202020202020204020202020402020202020202040202020202010202020202020202020202020202020202020303030303030303030303030303030303030303`, img`
........2...........
........2...........
....2222222..2......
...2............2222
....................
....................
22222222............
.............2222222
....................
....................
....................
.....2222222222.....
....................
....................
....................
2222222......2222222
....................
....................
....................
22222222222222222222
`, [myTiles.transparency16,myTiles.tile5,myTiles.tile1,myTiles.tile4,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "player spawn":
            case "tile5":return tile5;
            case "floor":
            case "tile4":return tile4;
            case "wall":
            case "tile1":return tile1;
            case "torch":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
