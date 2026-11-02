let countFruit2=2;
let fruitsAdd2=document.getElementById('list-once-fruit2');
let fruitInput2=document.getElementById('add-inp2');
let numFruit2=document.getElementById('num-fruits2');
numFruit2.textContent=countFruit2+': عدد الفواكه'
let add2=document.getElementById('add-button2');
add2.addEventListener('click',function(){
    let fruitName2=fruitInput2.value;
    if(fruitName2!==""){
        countFruit2+=1;
        numFruit2.textContent=countFruit2+':عدد الفواكه';
        fruitInput2.value="";
        let newAdd=document.createElement('div');
        newAdd.className='image';
        let newAdd2=document.createElement('p');
        newAdd2.textContent=fruitName2;
        newAdd.append(newAdd2);
        fruitsAdd2.append(newAdd);
    }
});
let countFruit1=2;
let fruitsAdd1=document.getElementById('list-once-fruit1');
let fruitInput1=document.getElementById('add-inp1');
let numFruit1=document.getElementById('num-fruits');
numFruit1.textContent=countFruit1+': عدد الفواكه'
let add1=document.getElementById('add-button1');
add1.addEventListener('click',function(){
    let fruitName1=fruitInput1.value;
    if(fruitName1!==""){
        countFruit1+=1;
        numFruit1.textContent=countFruit1+':عدد الفواكه';
        fruitInput1.value="";
        let newAdd=document.createElement('div');
        newAdd.className='image';
        let newAdd1=document.createElement('p');
        newAdd1.textContent=fruitName1;
        newAdd.append(newAdd1);
        fruitsAdd1.append(newAdd);
    }
});
/*دمج القائمتين */
let mixArr=[];
let divMix=document.getElementById('but-fruits');
let mixButton=document.getElementById('two-list');
mixButton.addEventListener('click',function(){
    let mixFruits1=document.querySelectorAll('#list-once-fruit1 .image p');
    let mixFruits2=document.querySelectorAll('#list-once-fruit2 .image p');
    let allMix=[...mixFruits1,...mixFruits2];
    let allMixFruits=allMix.map(fruits =>fruits.textContent);
    for(let i=0;i<allMixFruits.length;i++){
        if (!mixArr.includes(allMixFruits[i])) {
            let newFruit=document.createElement('p');
            newFruit.className='many-f';
            newFruit.textContent=allMixFruits[i];
            divMix.append(newFruit);
            mixArr.push(allMixFruits[i]);
        }
    }
});