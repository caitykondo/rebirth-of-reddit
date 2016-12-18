let body = document.getElementById('body');



function reqListener() {
  let articleList = JSON.parse(this.responseText);
  let article = articleList.data.children;
  console.log(article.length);

  for (var i = article.length - 1; i >= 0; i--) {
    // New Container
    let articleContainer = document.createElement('div');
    articleContainer.className ='articleContainer';
    body.appendChild(articleContainer);

    // Image >> PUT A FALLBACK DEFAULT IMAGE LATER
    let articleImageURL = article[i].data.preview.images[0].source.url;
    let articleImage = document.createElement('img');
    articleContainer.appendChild(articleImage);
    articleImage.src = articleImageURL;

    // Headline
    let articleTitle = document.createElement('h2')
    articleTitle.innerHTML = article[i].data.title;
    articleContainer.appendChild(articleTitle);

    // Author
    let articleAuthor = document.createElement('span');
    articleAuthor.className = 'articleAuthor';
    articleAuthor.innerHTML = article[i].data.author;
    articleContainer.appendChild(articleAuthor);

    // Date
    let articleCreated = document.createElement('span');
    articleCreated.className = 'articleCreated';
    articleCreated.innerHTML = article[i].data.created;
    let date = article[i].data.created;
    articleContainer.appendChild(articleCreated);

    // Comments
    let articleComments = document.createElement('span');
    articleComments.className = 'articleComments';
    articleComments.innerHTML = article[i].data.num_comments;
    articleContainer.appendChild(articleComments);

    // Description
  }
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", 'https://www.reddit.com/r/aww.json');
oReq.send();