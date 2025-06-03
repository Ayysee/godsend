player.onDied(function () {
    loops.pause(5000)
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    WOODEN_SWORD,
    1
    )
})
blocks.onBlockPlaced(DIRT, function () {
    mobs.spawn(PRIMED_TNT, pos(0, -30, 0))
    loops.pause(900)
    player.teleport(pos(1, 0, 0))
    for (let index = 0; index < 80; index++) {
        mobs.spawnParticle(EXPLOSION_HUGE, pos(0, 0, 0))
    }
})
player.onItemInteracted(MACE, function () {
    player.teleport(pos(0, 60, 0))
    mobs.applyEffect(RESISTANCE, mobs.target(LOCAL_PLAYER), 4, 4)
    mobs.enchant(
    mobs.target(LOCAL_PLAYER),
    "Density",
    5
    )
    mobs.enchant(
    mobs.target(LOCAL_PLAYER),
    "Wind_burst",
    3
    )
})
player.onItemInteracted(WOODEN_SWORD, function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    DIRT,
    1
    )
    loops.pause(1000)
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    MACE,
    1
    )
    player.teleport(pos(0, 50, 0))
    loops.pause(1800)
    mobs.enchant(
    mobs.target(LOCAL_PLAYER),
    "Density",
    5
    )
    for (let index = 0; index < 4; index++) {
        mobs.spawnParticle(EXPLOSION_HUGE, pos(0, 0, 0))
    }
    loops.pause(400)
    agent.teleportToPlayer()
    loops.pause(9999)
    mobs.teleportToPlayer(
    mobs.target(LOCAL_PLAYER),
    mobs.target(MY_AGENT)
    )
    player.teleport(pos(0, 100, 0))
    blocks.place(GLASS, pos(0, -1, 0))
})
player.onChat("run", function () {
	
})
loops.forever(function () {
    mobs.applyEffect(HASTE, mobs.target(LOCAL_PLAYER), 10, 255)
    mobs.applyEffect(NIGHT_VISION, mobs.target(ALL_PLAYERS), 15, 1)
})
loops.forever(function () {
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 10, 10)
})
loops.forever(function () {
	
})
blocks.onBlockPlaced(PLANKS_OAK, function () {
    blocks.place(OAK_FENCE, pos(0, -2, 0))
    for (let index = 0; index < 4; index++) {
        mobs.spawn(PRIMED_TNT, pos(1, 0, 1))
        mobs.spawn(PRIMED_TNT, pos(-1, 0, -1))
        mobs.spawn(PRIMED_TNT, pos(1, 0, -1))
        mobs.spawn(PRIMED_TNT, pos(-1, 0, 1))
    }
})
mobs.applyEffect(LEVITATION, mobs.target(ALL_PLAYERS), 10, 255)
mobs.clearEffect(mobs.target(LOCAL_PLAYER))
