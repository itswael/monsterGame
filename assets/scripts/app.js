const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler(){
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

attackBtn.addEventListener('click', attackHandler); 
