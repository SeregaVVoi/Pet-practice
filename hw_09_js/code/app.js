window.onload = function(){
   document.body.append(div1, div2, div3, div4, div5)
   document.body.append(img, btn)
   document.body.append(...array)
   img.after(btn)
   const [...divs] = document.getElementsByTagName("div");
   divs.forEach(el =>{
      el.style.backgroundColor = "yellow"
   });
}

const div1 = document.createElement("div"),
   div2 = document.createElement("div"),
   div3 = document.createElement("div"),
   div4 = document.createElement("div"),
   div5 = document.createElement("div");

   div1.innerText ='First';
   div2.innerText ='Second';
   div3.innerText ='Third';
   div4.innerText ='Fourt';
   div5.innerText ='Five';

   const img = document.createElement("img");
   const btn = document.createElement("button");

   btn.innerText = 'Змінити картинку';
   img.style.backgroundImage = "url('https://itproger.com/img/courses/1476977240.jpg')";
   
   let i = 0;

   const arr = new Array ("https://itproger.com/img/courses/1476977240.jpg", "https://itproger.com/img/courses/1476977488.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png")

   btn.onclick= () => { 
      i++;
      if(i > arr.length - 1){
         i = 0;
      }
      img.src = arr[i];
   }

   const array = []
 
   for(let i = 0; i < 10; i++){
      const id = i + 1;
      let el = document.createElement("p")
      el.id = id
      el.innerText=`new paragraph: ${id}`
      el.onclick = () => {
     const res = confirm(`Do you want remove paragraph ${id}?`)
         if(res){
            el.remove()
            return
         }
      }   
      array.push(el)
   }

   