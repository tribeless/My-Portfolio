'use strict';
//fetching my medium post and displaying them
fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@briankyole10")
.then(response=>response.json())
.then(
    data=>{
       var myBlog =  data.items;
        myBlog.forEach(item=>{
            
            //function to convert the html to plain text
            function convertDataString(data){
                var conveter = document.createElement("div");
                conveter.innerHTML = data;
                data = conveter.innerText;
                return data;

            }
//function to remove extra post content
            function splitExtraContent(item,startIndex,maxIndex){
                if(item.length>maxIndex){
                    var newShortenedItem = item.slice(startIndex,maxIndex);
                    return newShortenedItem;
                }
            }

            //assign the blog content to the div
                var output = "";
                var newParent = document.createElement("div");
                var holdingParent = document.querySelector(".blogs");

                output +=
                    `
                    <a href="${item.link}" class="pub-link" target="blank">
                                <div class="blog-content">
                                    <div class="blog-thumbnail">
                                        <img src="${item.thumbnail}" alt="">
                                    </div>
                                    <div class="blog-title">
                                        <h2>${splitExtraContent(item.title, 0, 10) + ' ...'}</h2>
                                    </div>
                                    <div class="blog-post">
                                        <p>${'... ' +splitExtraContent(convertDataString(item.description),60,100)+' ...'}</p>
                                    </div>
                                    <div class="btm-cnt">
                                        <span class="pub-dat">${splitExtraContent(item.pubDate,0, 11)}</span>
                                        <span class="author"><i class="fas fa-user tt"></i>${splitExtraContent(item.author, 0, 5)}</span>
                                    </div>
                                </div>
                        </a>
                    `;

                newParent.innerHTML = output;
                holdingParent.appendChild(newParent);
         
       })
      
    }


)
.catch(error => console.log(error))





//fetching github data
fetch('https://api.github.com/users/tribeless/repos')
.then(response=>response.json())
.then(data=>{



    //arrays that have saved me a tone of error and stress
const myPrefferedLanguages = ["HTML", "CSS", "JavaScript"];
const preferredIndex = [3,4,5,6,7];



//filter and get the stuff i want
const filteredItems = data.filter(item=>{
    
    for(var i=0;i<myPrefferedLanguages.length;i++){
        if (item.language === myPrefferedLanguages[i])
        return item;
    }
})
console.log(filteredItems)
//looping through my desired values and printing and displaying them
    for(var i=0;i<filteredItems.length;i++){
        for(var j=0;j<preferredIndex.length;j++){
            var output = "";
            var existingItems = filteredItems.indexOf(filteredItems[i]);
            var numbersIndex = preferredIndex[j];
            
            if(existingItems===numbersIndex){
                
                    var newElement = document.createElement("div");
                    newElement.classList.add("my-project");
                    var parentElement = document.querySelector(".my-projects");
                    output +=
                        `
                        <a href="" target="blank" class="box">
                        <div class="container">
                        <div class="contents">
                            <div class="name"><i class="fas fa-project-diagram tt" ></i>${filteredItems[numbersIndex].name}</div>
                            <div class="description">${filteredItems[numbersIndex].description}</div>
                            <span class="language"><i class="fas fa-code tt"></i>${filteredItems[numbersIndex].language}</span>
                            <span class="github-link">
                            <a style="text-decoration:none;color:white;margin-right:1rem;" href="${filteredItems[numbersIndex].html_url}" target="blank"><i class="fab fa-github tt"></i>View Code</a></span>
                            <span class="user-name"><i class="fas fa-user tt"></i>${filteredItems[numbersIndex].owner.login}</span>
                        </div>
                    </div>
                </a>
                `;
                    newElement.innerHTML = output;
                    parentElement.appendChild(newElement);

                
                }
                
            else{
                continue;
            }
        }
    }
})
.catch(error=>console.log(error))
//	&#9776;=> hamburger menu

//creating the hamburger menu
var toggle = document.querySelector(".toggle");
var openMenu = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
    if (openMenu.className === "nav-links") {
            openMenu.classList.add("show");
        }
        else {
            openMenu.classList.remove("show");
        }
    
    
})
// reduceMyBioInfo();
// //Reducing my bio content
// function reduceMyBioInfo(){
//     var a = document.querySelector(".bio").innerText;
//     var startLength = 0;
//     var maxLength = 100;
//     if(a.length>maxLength){
//       var b= a.split(startLength,maxLength);
//       a.innerText = b; 
//     }
// }