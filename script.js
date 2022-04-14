// Your JS goes here
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