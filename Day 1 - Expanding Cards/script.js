const panels = document.querySelectorAll('.panel');
const maps = document.querySelectorAll('.map');
const texts = document.querySelectorAll('h3');
const buttons = document.querySelectorAll('.btn');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        if(panel.classList.contains('active')){
            const map = panel.querySelector('.map')
            map.classList.add('active')
            const text = panel.querySelector('h3')
            text.classList.add('hide')
            console.log('CLASSES ADDED')
        }else{
            clearMap();
            removeActiveClasses(panels, 'active');
            panel.classList.add('active')
        }
    })
})

function goBack(){
    setTimeout(clearMap, 1);
}

function clearMap(){
    removeActiveClasses(texts, 'hide')
    removeActiveClasses(maps, 'active');
}

function removeActiveClasses(nodeList, classes){
    nodeList.forEach(element => {
        element.classList.remove(classes)
    })
}