function pickCEP(city){
    return city[(Math.random()*city.length)|0]
}

export {pickCEP}
