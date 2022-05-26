const generatebtn = document.querySelector(".generatebtn")

generatebtn.addEventListener('click', generateRanNum); 

function generateRanNum() {
    const lownumber = document.querySelector(".lownumber").value;
    const highnumber = document.querySelector(".highnumber").value;
    
    randomNum = Math.floor(Math.random () * parseInt(highnumber));
    
    if(randomNum >=parseInt(lownumber)){
        const randonNumEl = document.querySelector('.randomNumEl');
        randonNumEl .innerHTML = randomNum
        }
    }
