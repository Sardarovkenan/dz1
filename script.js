var elem = document.getElementsByClassName("small");
for (var i = 0; i< elem.length; i++)
{
    elem[i].onclick = function(){


           var ele=elem[0];
           while(ele)
         {
               if(ele.tagName === "DIV"){ 
                   ele.classList.remove("back");
               }
               ele = ele.nextSibling;
         }

     this.classList.add("back");
    };
}

var elem = document.getElementsByClassName("big");
for (var i = 0; i< elem.length; i++)
{
    elem[i].onclick = function(){


           var ele=elem[0];
           while(ele)
         {
               if(ele.tagName === "DIV"){ 
                   ele.classList.remove("back");
               }
               ele = ele.nextSibling;
         }

     this.classList.add("back");
    };
}