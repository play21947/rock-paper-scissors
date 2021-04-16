let show_result = document.getElementById('show_result')
let show_result_ai = document.getElementById('show_result_ai')
let btn_paper = document.getElementById('btn-paper')
let btn_rock = document.getElementById('btn-rock')
let btn_scissors = document.getElementById('btn-scissors')
let player = document.getElementById('player')
let end = document.getElementById('end')
let overall_player = document.getElementById('overall_player')
let overall_ai = document.getElementById("overall_ai")

let current_status = -1
let current_status_ai = -1


let think=(callback)=>{
    setTimeout(() => {
        player.innerHTML = 'Player Processing..'
        callback()
    }, 0);
}

let process_ai=()=>{
    let random_ai = Math.floor(Math.random()*3)

    if(current_status != -1){
        if(random_ai == 0){
            setTimeout(()=>{
                show_result_ai.src = 'rock.png'
            }, 1000)
            current_status_ai = 0
        }
        else if(random_ai == 1){
            setTimeout(()=>{
                show_result_ai.src = 'paper.png'
            },1000)
            current_status_ai = 1
        }
        else if(random_ai == 2){
            setTimeout(() => {
                show_result_ai.src = 'scessior.png'
            }, 1000);
            current_status_ai = 2
        }
        return random_ai
    }
}

let rock=()=>{
    show_result.src = 'rock.png'
    btn_rock.classList.add('animate')
    think(()=>{
        setTimeout(() => {
            player.innerHTML = 'Rock'
        }, 1000);
    })
    setTimeout(() => {
        btn_rock.classList.remove('animate')
    }, 1000);
    current_status = 0
    process_ai()
    return current_status
}

let paper=()=>{
    show_result.src = 'paper.png'
    btn_paper.classList.add('animate')
    think(()=>{
        setTimeout(() => {
            player.innerHTML = 'Paper'
        }, 1000);
    })
    setTimeout(() => {
        btn_paper.classList.remove('animate')
    }, 1000);
    current_status = 1
    process_ai()
    return current_status
}

let scissors=()=>{
    show_result.src = 'scessior.png'
    btn_scissors.classList.add('animate')
    think(()=>{
        player.innerHTML = 'Scissors'
    })
    setTimeout(() => {
        btn_scissors.classList.remove('animate')
    }, 1000);
    current_status = 2
    process_ai()
    return current_status
}


// -1 = none, 0 = rock, 1 = paper, 2 = scissors

let count_score = 0
let count_score_ai = 0

let checkScore = setInterval(()=>{
    if(current_status == 0 && current_status_ai == 0){
        end.innerHTML = "Draw"
    }
    else if(current_status == 0 && current_status_ai == 1){
        end.innerHTML = "You are lose"
        count_score_ai = count_score_ai + 1
    }
    else if(current_status == 0 && current_status_ai == 2){
        end.innerHTML = "You are WIN"
        count_score = count_score + 1
    }
    else if(current_status == 1 && current_status_ai == 0){
        end.innerHTML = "You are WIN"
        count_score = count_score + 1
    }
    else if(current_status == 1 && current_status_ai == 1){
        end.innerHTML = "Draw"
    }
    else if(current_status == 1 && current_status_ai == 2){
        end.innerHTML = "You are lose"
        count_score_ai = count_score_ai + 1
    }
    else if(current_status == 2 && current_status_ai == 0){
        end.innerHTML = "You are lose"
        count_score_ai = count_score_ai + 1
    }
    else if(current_status == 2 && current_status_ai == 1){
        end.innerHTML = "You are WIN"
        count_score = count_score + 1
    }
    else if(current_status == 2 && current_status_ai == 2){
        end.innerHTML = "Draw"
    }
}, 2000)