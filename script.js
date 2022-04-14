// Your JS goes here

function checkers(){
         
    for (let i = 0; i < 500; i++){   
        var tempDiv = document.createElement('div'); 
        tempDiv.style.width = "11.1%";
        tempDiv.style.float = "left";
        tempDiv.style.paddingBottom = "11.1%"; 
        if(i % 2 === 0){
            tempDiv.style.backgroundColor = "red";
        } else {
            tempDiv.style.backgroundColor = "black";
        }
        document.body.appendChild(tempDiv);
    }
}

function randomColors(){
    for (let i = 0; i < 500; i++){   
        var tempDiv = document.createElement('div'); 
        tempDiv.style.width = "11.1%";
        tempDiv.style.float = "left";
        tempDiv.style.paddingBottom = "11.1%";
        var chars = "0123456789ABCDEF"; 
        var setColor = "#"
        for(let i = 0; i < 6; i++){
             setColor += chars[Math.floor(Math.random()*16)];
        }
        tempDiv.style.backgroundColor = setColor;
        document.body.appendChild(tempDiv);
    }

}

//checkers();
randomColors();