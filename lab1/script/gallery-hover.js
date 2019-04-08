let galleryItems = document.body.getElementsByClassName('gallery-item');
for(let i = 0; i < 6; i++){
    let number = i + 1;
    galleryItems[i].style.background = "url('../lab1/images/work-" + number.toString() + ".jpg') no-repeat center";
    galleryItems[i].style.backgroundSize = "cover";
    galleryItems[i].addEventListener('mouseover',function () {
            let item = galleryItems[i].getElementsByClassName('gallery-hover')[0];
            item.style.display = "flex";
            item.style.justifyContent = "center";
            item.style.flexDirection = "column";
            item.style.alignItems = "center";
            galleryItems[i].style.background = "linear-gradient(rgba(238, 238, 238,.7), rgba(238, 238, 238, .7)), url('../lab1/images/work-" + number.toString() + ".jpg') no-repeat center";
            galleryItems[i].style.backgroundSize = "cover";
    });
    galleryItems[i].addEventListener('mouseout',function(){
        let item = galleryItems[i].getElementsByClassName('gallery-hover')[0];
        item.style.display = "none";
        galleryItems[i].style.background = "url('../lab1/images/work-" + number.toString() + ".jpg') no-repeat center";
        galleryItems[i].style.backgroundSize = "cover";
    });
}
let accBlock = document.getElementsByClassName('accomplishments')[0];
let accItems = document.body.getElementsByClassName('acc-count');
let increment = () => {
    if(accItems[0].innerHTML < 1539){
        accItems[0].innerHTML = accItems[0].innerHTML * 1.0 + 1;
    }
    if(accItems[1].innerHTML < 3653){
        accItems[1].innerHTML = accItems[1].innerHTML * 1.0 + 1;
    }
    if(accItems[2].innerHTML < 5987){
        accItems[2].innerHTML = accItems[2].innerHTML * 1.0 + 1;
    }
    setTimeout(increment,10);
};
accBlock.addEventListener('mouseover', increment);
// let position = () => {
//     let positionOf = window.pageYOffset|| document.documentElement.scrollTop;
//     accBlock.style.backgroundPosition = window.pageXOffset+ 'px' + positionOf + 'px';
// };
// document.body.addEventListener('scroll', position);








