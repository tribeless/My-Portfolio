
fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@briankyole10")
.then(response=>response.json())
.then(
    data=>{
       var myBlog =  data.items;
        myBlog.forEach(item=>{
            
            
            function convertDataString(data){
                var conveter = document.createElement("div");
                conveter.innerHTML = data;
                node = conveter.innerText;
                return node;

            }

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

const myPrefferedLanguages = ["HTML", "CSS", "JavaScript"];
const preferredIndex = [3,4,5,6];

const filteredItems = data.filter(item=>{
    
    for(var i=0;i<myPrefferedLanguages.length;i++){
        if (item.language === myPrefferedLanguages[i])
        return item;
    }
})
    for(var i=0;i<filteredItems.length;i++){
        for(var j=0;j<preferredIndex.length;j++){
            var output = "";
            var existingItems = filteredItems.indexOf(filteredItems[i]);
            var numbersIndex = preferredIndex[j];
            if(existingItems===numbersIndex){
                var newElement = document.createElement("div");
                var parentElement = document.querySelector(".my-projects");
                output+=
                `
                        <a href="#" target="blank" class="box">
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
                console.log(filteredItems[numbersIndex])
            }
            else{
                continue;
            }
        }
    }
console.log(filteredItems)
})
.catch(error=>console.log(error))
