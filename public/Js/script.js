
fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@briankyole10")
.then(response=>response.json())
.then(
    data=>{
       var myBlog =  data.items;
        myBlog.forEach(item=>{
            
            
            function convertData(data){
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
                    <a href="${item.link}" class="pub-link">
                                <div class="blog-content">
                                    <div class="blog-thumbnail">
                                        <img src="${item.thumbnail}" alt="">
                                    </div>
                                    <div class="blog-title">
                                        <h2>${splitExtraContent(item.title, 0, 10) + '...'}</h2>
                                    </div>
                                    <div class="blog-post">
                                        <p>${splitExtraContent('...'+convertData(item.description),60,100)+'...'}</p>
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
// console.log(data)
data.forEach(item=>{
    console.log(item.name, item.url, item.description, item.owner.login, item.language);
})
})
.catch(error=>console.log(error))