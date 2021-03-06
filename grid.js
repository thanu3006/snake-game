const GRID_SiZE = 21

export function randomGridPosition(){
    return {
        x: Math.floor(Math.random(0) * GRID_SiZE) + 1,
        y: Math.floor(Math.random(0) * GRID_SiZE) + 1
    }
}

export function outsideGrid(position){
    return (
        position.x < 1 || position.x > GRID_SiZE || position.y < 1 || position.y > GRID_SiZE
    )
}