// accessing all the boxes here
let boxes = document.querySelectorAll('.box')

// accessing the body 
let body = document.querySelector('body')

// console.log(boxes);

//iterating over all boxes using forEach loop
boxes.forEach((eachBox) => {
    eachBox.addEventListener('click', (e) => {
        console.log(e.target);
        
        if(e.target.id === 'cadetblue'){
            
            // hard coding 
            // body.style.backgroundColor = 'cadetblue'

            // another way to change bg color of body
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'purple'){
            body.style.backgroundColor = 'purple'
        }

        if(e.target.id === 'orange'){
            body.style.backgroundColor = 'orange'
        }

        if(e.target.id === 'violet'){
            body.style.backgroundColor = 'violet    '
        }
    })
})
