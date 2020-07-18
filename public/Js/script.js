//name()
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
    
// async function name(){
//     await octokit.request('GET /repos/{owner}/{repo}/actions/artifacts', {
//         owner: 'tribeless',
//         repo: 'My-Portfolio'
//     })
// }

fetch('https://api.github.com/users/tribeless/repos')
.then(response=>response.json())
.then(data=>{
// console.log(data)
data.forEach(item=>{
    console.log(item.name, item.url, item.description, item.owner.login, item.language);
})
})
.catch(error=>console.log(error))