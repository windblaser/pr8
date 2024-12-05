'use strict'

btn1.addEventListener('mousedown', function(){
    btn1.style.display = 'none'
})
btn2.addEventListener('mousedown', function(){
    btn2.style.color = 'pink'
})
btn3.addEventListener('mouseover', function(){
    btn3.style.background = 'pink'
})


document.body.addEventListener('keydown' , function(event){ 
    if(event.key == 'r'){ 
        document.body.style.background = 'red' 
    } 
}) 
document.body.addEventListener('keydown' , function(event){ 
    if(event.key == 'g'){ 
        document.body.style.background = 'green' 
    } 
}) 
document.body.addEventListener('keydown' , function(event){ 
    if(event.key == 'y'){ 
        document.body.style.background = 'yellow' 
    } 
}) 
document.body.addEventListener('keyup' , function(event){ 
    if(event.key == 'y'){ 
        document.body.style.background = '' 
    } 
}) 
document.body.addEventListener('keyup' , function(event){ 
    if(event.key == 'r'){ 
        document.body.style.background = '' 
    } 
}) 
document.body.addEventListener('keyup' , function(event){ 
    if(event.key == 'g'){ 
        document.body.style.background = '' 
    } 
})