
function getData() {

    console.log("clicked")

    let articles = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=20d02642631846b09115be81a1f52ec2'
    fetch(articles)
        .then((res) => {
            return res.json()
        }).then((data) => {
            let resdata = JSON.stringify(data);
            
            // console.log(resdata)
            newdata = JSON.parse(resdata)
            console.log(newdata)
            
            let content = document.getElementById("content")

            for (i = 0; i <= 4; i++) {
                content.innerHTML += `
                   {
                        <div>"title" : "${newdata.articles[i].title}"</div>
                        <div>"link" : "${newdata.articles[i].url}"</div>
                    }
                    `
            }
        })
}