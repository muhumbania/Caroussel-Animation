const items = document.querySelectorAll('.item');
const next = document.querySelector('.n-arrow');
const prev = document.querySelector('.p-arrow');

let counter = 0;

next.addEventListener('click', function(){
    counter+= 1;
    if(counter>6)counter = 1;
    items.forEach(function(item){
        const img = item.children;
        img[0].setAttribute('src', `./${(item.id-counter)<1? (item.id-counter)+6 : item.id-counter}.PNG`);
    });

    console.log(counter);
    document.querySelector('.container').style.backgroundImage = `url(${document.getElementById('7').getAttribute('src')})`;
});


prev.addEventListener('click', function(){
    counter-= 1;
    items.forEach(function(item){
        const img = item.children;
        img[0].setAttribute('src', `./${(item.id-counter)<1? (item.id-counter)+6 : item.id-counter}.PNG`);
    });
    document.querySelector('.container').style.backgroundImage = `url(${document.getElementById('7').getAttribute('src')})`;
    if(counter<1)counter = 6;
});

console.log(items);
// alert('Hello');