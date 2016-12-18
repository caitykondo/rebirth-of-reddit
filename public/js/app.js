let body = document.getElementById('body');



function reqListener() {
  let articleList = JSON.parse(this.responseText);
  let article = articleList.data.children;
  console.log(article.length);

  for (var i = article.length - 1; i >= 0; i--) {
    let articleContainer = document.createElement('div');
    articleContainer.className ='articleContainer';
    body.appendChild(articleContainer);
    let articleImageURL = article[i].data.preview.images[0].source.url;
    let articleImage = document.createElement('img');
    articleContainer.appendChild(articleImage);
    articleImage.src = articleImageURL;
  }
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", 'https://www.reddit.com/r/aww.json');
oReq.send();