
fetch('./datanot.json')
.then((response) => {
  return response.json();
})
.then((data) => {
 
  let names = [];

   
  for(let i = 0; i < data.notarialniDii.length; i++){
    let tempobj = {};
    tempobj.name = data.notarialniDii[i].nameDiyannia
    let tempArr = []
    for(let j = 0; j < data.notarialniDii[i].children.length; j++){
      tempArr.push(data.notarialniDii[i].children[j])
    }
    tempobj.items = tempArr
    names.push(tempobj)
    
  }
    let maindiv = document.getElementById("main")
    
    for(let k = 0; k < names.length; k++){
        let ul = document.createElement('ul');
        let li = document.createElement('li')
        li.setAttribute('class', 'li')
        li.innerHTML = names[k].name;
        ul.appendChild(li)
        maindiv.appendChild(ul)
        li.onclick = function(){
          
          for(let p = 0; p < names.length; p++){
            if(names[p].name === li.innerHTML){
              let childLi = document.createElement('li');
              let itmeUl = document.createElement("ul")
              
              for(let b = 0; b < names[p].items.length; b++){
                let itemLi = document.createElement('li');
                
                itemLi.innerHTML = names[p].items[b]
                itmeUl.appendChild(itemLi)
                
              }
              childLi.appendChild(itmeUl)
              ul.appendChild(childLi)
              

            }

          }
          
        }
    }
})