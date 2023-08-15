// console.log("Bismillah");
// console.log(document.getElementsByTagName("li"))
const liCollection = document.getElementsByTagName('li');
       for(const li of liCollection){
        // console.log(li.innerText)
       }
       const allHeading = document.getElementsByTagName('h1')
       for(const h1 of allHeading){
        // console.log(h1.innerText)
       }
    //    document.getElementById("header").innerText = "I will got GPA-5"
       
    //    QuerySelectorAll
       const someLi = document.querySelectorAll("main li");
    //    console.log(someLi);
       for(const li of someLi){
      //   console.log(li.innerText)
       }
      //  document.getElementById("header").style.backgroundColor = "aquamarine";
      // ---- Query Slector Style-------
       const sections = document.querySelectorAll('section');
       for(const section of sections){
         // console.log(section);
         section.style.border = '2px solid steelblue';
         section.style.marginBottom = '10px';
         section.style.borderRadius = '10px';
         section.style.padding = '10px';
         section.style.backgroundColor = 'aquamarine';
       };