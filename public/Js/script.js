fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@briankyole10")
.then(response=>response.json())
.then(
    data=>{
       var myBlog =  data.items;
       myBlog.forEach(item=>{
        console.log(item.title,item.author,item.link,item.thumbnail,item.pubDate);
       })
      
    }


)
.catch(error => console.log(error))
    
