
let main = document.getElementById('main');

function reqListener() {
  let articleList = JSON.parse(this.responseText);
  let article = articleList.data.children;
  console.log(article[0]);
  console.log(article[0].data.permalink);

  for (var i = article.length - 1; i >= 0; i--) {

    // New Container
    let articleContainer = document.createElement('div');
    articleContainer.className ='articleContainer';
    main.appendChild(articleContainer);

    // Image >> PUT A FALLBACK DEFAULT IMAGE LATER
    let articleImageURL = article[i].data.preview.images[0].source.url;
    let articleImage = document.createElement('div');
    articleImage.className = 'articleImage';
    articleContainer.appendChild(articleImage);
    articleImage.style.backgroundImage = `url(${articleImageURL})`;

    // Headline
    let a = document.createElement('a');
    a.href = `http://reddit.com${article[0].data.permalink}`;
    articleContainer.appendChild(a);
    let articleTitle = document.createElement('h2');
    articleTitle.innerHTML = article[i].data.title;
    a.appendChild(articleTitle);

    let subheading = document.createElement('h3');
    articleContainer.appendChild(subheading);
    // Author
    let articleAuthor = document.createElement('span');
    articleAuthor.className = 'articleAuthor';
    articleAuthor.innerHTML = `by ${article[i].data.author}`;
    subheading.appendChild(articleAuthor);

    // Date
    let articleCreated = document.createElement('span');
    articleCreated.className = 'articleCreated';
    let date = moment.unix(article[i].data.created);
    articleCreated.innerHTML = ` &#8226; ${moment(date).fromNow()}`;
    subheading.appendChild(articleCreated);

    // Comments
    let articleComments = document.createElement('span');
    articleComments.className = 'articleComments';
    articleComments.innerHTML = ` &#8226; ${article[i].data.num_comments} comments`;
    subheading.appendChild(articleComments);

    // Description
  }
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", 'https://www.reddit.com/r/aww.json');
oReq.send();

let randomLink = document.getElementById('random');
randomLink.addEventListener('click', () => {
  main.innerHTML = "";

  randomReq = new XMLHttpRequest();
  randomReq.addEventListener("load", reqListener);
  randomReq.open("GET", 'https://www.reddit.com/r/pic.json');
  randomReq.send();
});

let myBoardsLink = document.getElementById('myBoards');
myBoardsLink.addEventListener('click', () => {
  main.innerHTML = "";

  myBoardsReq = new XMLHttpRequest();
  myBoardsReq.addEventListener("load", reqListener);
  myBoardsReq.open("GET", 'https://www.reddit.com/r/Art.json');
  myBoardsReq.send();
});

let getTheAppLink = document.getElementById('getTheApp');
getTheAppLink.addEventListener('click', () => {
  main.innerHTML = "";

  getTheAppReq = new XMLHttpRequest();
  getTheAppReq.addEventListener("load", reqListener);
  getTheAppReq.open("GET", 'https://www.reddit.com/r/dataisbeautiful.json');
  getTheAppReq.send();
});