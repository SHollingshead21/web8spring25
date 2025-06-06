function shake() {
    flip()
    var fortune = get_a_fortune()
    display_fortune(fortune)
}

function flip() {
    // we aren't animating yet
}

function get_a_fortune() {

    let fortunes = ["yes", "no", "maybe", "ask again"]
    let random_index = randInt(fortunes.length)
    return fortunes[random_index] // 0,1,2... (length-1)
}

function randInt(length) {
    let r = Math.random() // random 0 - 1
    let br = r * length // random 0 - length
    let index = Math.floor(br) // just the number (no decimals)
    return index //send back the 0,1,2...(length -1)
}

function display_fortune(fortune) {
    alert(fortune)
}

// - shake() - get a fortune
//   - flip 8ball - animation
//   - get a fortune
//   - display fortune - animation