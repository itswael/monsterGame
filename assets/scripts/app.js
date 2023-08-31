const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode){
    let maxDamage;
    if(mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
    }else{
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('YOU WON');
    }else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('YOU LOST');
    }else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert('DRAW');
    }
}

function attackHandler(){
    attackMonster('ATTACK');
}

function strongAttackHandler(){
    attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler); 
