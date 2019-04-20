

function bodyOnLoadFuncs(){
  mostReleventBtnPopoverFunc();
  likeBtnPopoverFunc();
  fbPostFunc();
}

  
function fbPostFunc(){
  const fbPost = [{
    navImages: {
      barbieLogoImg: 'images/barbie-logo-img.jpg',
      fbCheckLogoIcon: 'images/fb-check-logo-1.png',
      postDate:  'September 18, 2018',
      earthLogoIcon: 'images/earth-logo-img-1.png',
      saveIcon: 'fa fa-save'
    },
    barbieHashtag: {
      name: '#Barbie',
      blueHeartLogoIcon: 'images/blue-heart-logo-1.png',
      barbieMainImg: 'images/barbie-img-for-html.jpg'
    },
    postPopularity: {
        likes: 158,
        comments: 100,
        shares: 50,
        views:20
    },
    commentsBlock: {
      userImg: 'https://thispersondoesnotexist.com/image',
      showedCmntsBlock: [
        {
          comment: 'Nice',
          commentUser: 'Abc',
          userImg: 'https://thispersondoesnotexist.com/image',
        },{
          comment: 'good',
          commentUser: 'xyx',
          userImg: 'https://thispersondoesnotexist.com/image',
        },{
          comment: 'very nice',
          commentUser: 'ddd',
          userImg: 'https://thispersondoesnotexist.com/image',
        }
      ],
      hiddenCmntsBlock: [
        {
          comment: 'beautiful',
          commentUser: 'mno',
          userImg: 'https://thispersondoesnotexist.com/image',
        },{
          comment: 'nice',
          commentUser: 'hhh',
          userImg: 'https://thispersondoesnotexist.com/image',
        },{
          comment: 'amazing',
          commentUser: 'ccc',
          userImg: 'https://thispersondoesnotexist.com/image',
        }
      ]
    }
  }]
  var hiddenCmntsBlckImg=''
  var hiddenCmntsBlckUserCmnt=''
  var shwdCmntsBlckImg=''
  var shwdCmntsBlckUserCmnt=''
  var fbPostStrng=''
fbPost.forEach(element => {
  if (element.showedCmntsBlock) {
    element.showedCmntsBlock.forEach (child => {
      shwdCmntsBlckImg += `<img class="rounded-circle" alt src='${element.commentsBlock.showedCmntsBlock.userImg}' />`
      shwdCmntsBlckUserCmnt += `${element.showedCmntsBlock.commentUser} ${element.showedCmntsBlock.comment}`
      
      fbPostStrng +=
      `
      <div class="d-flex">
          <div class="fb-user-img col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1">
            ${shwdCmntsBlckImg}
          </div>
          <form class="user-label-form-block dropdown-cmnt-input pt-2 col-10 col-sm-10 col-md-10 col-lg-11 col-xl-11 pl-0 pl-sm-0 pl-md-0 pl-lg-2 pl-xl-0">
            <label class="label-group mb-3 form-control border-0">
              <span class="mt-1">
                ${shwdCmntsBlckUserCmnt}
              </span>
            </label>
          </form>
        </div>
      `    
    }) 
  } else if (element.hiddenCmntsBlock) {
      element.hiddenCmntsBlock.forEach (child => {
        hiddenCmntsBlckImg += `<img class="rounded-circle" alt src='${element.commentsBlock.hiddenCmntsBlock.userImg}' />`
        hiddenCmntsBlckUserCmnt += `${element.hiddenCmntsBlock.commentUser} ${element.hiddenCmntsBlock.comment}`
        
        fbPostStrng +=
        `
        <div class="d-flex">
            <div class="fb-user-img col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1">
              ${hiddenCmntsBlckImg}
            </div>
            <form class="user-label-form-block dropdown-cmnt-input pt-2 col-10 col-sm-10 col-md-10 col-lg-11 col-xl-11 pl-0 pl-sm-0 pl-md-0 pl-lg-2 pl-xl-0">
              <label class="label-group mb-3 form-control border-0">
                <span class="mt-1">
                ${hiddenCmntsBlckUserCmnt}
                </span>
              </label>
            </form>
          </div>
        `
      })
    } else {
    
    fbPostStrng +=

  `
  <header>
    <section class="m-0 p-0 cust-outline-0 border-0 w-100 mw-100 h-auto">
      <div class="container">
        <div class="cust-container-2">
          <nav class="navbar navbar-toggleable-sm navbar-toggleable-md navbar-toggleable-lg navbar-toggleable-xl navbar-light bg-faded" role="navigation">
            <a class="navbar-brand d-flex mt-3" href="#" >
              <img class="rounded-circle navbar-brand-img" src='${element.navImages.barbieLogoImg}' alt />
                <div class="ml-3 d-flex flex-column">
                  <h6 class="m-0 p-0">
                    Barbie
                    <span class="p-0 m-0">
                      <img class="check-logo-img" src='${element.navImages.fbCheckLogoIcon}' alt />
                    </span>
                  </h6>
                  <p class="mt-1 p-0">
                    ${element.navImages.postDate}
                    <span id="earthLogoImgId">
                      <img class="earth-logo-img" src='${element.navImages.earthLogoIcon}' alt />
                    </span>
                  </p>
              </div>
            </a>

            <button class="navbar-toggler navbar-toggler-right mt-0" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
              
            <div class="collapse navbar-collapse border" id="collapsibleNavbar">
              <ul class="nav navbar-nav w-100">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="${element.navImages.saveIcon} mr-1" aira-hidden="true"></i>
                    Save Post
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">View edit history</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Embed</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Turn on notifications for post</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Show in tab</a>
                </li>
                <div class="dropdown-divider px-0">
                </div>
                <li class="nav-item">
                  <a class="nav-link" href="#">Give feedback on this post</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </header>

  <main>
    <article>
      <section class="p-0 m-0 cust-outline-0 border-0 w-100 mw-100 h-auto">
        <div class="container">
          <div class="cust-container-2">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="d-flex flex-column">
                <p>
                  For
                  <span class="barbie-hashtag">
                    <a href="#">${element.barbieHashtag.name}</a>
                  </span> 
                  movie time is always fun time! Which are you planning to watch with your bestie?
                  <span>
                    <img class="blue-heart-logo-img" src='${element.barbieHashtag.blueHeartLogoIcon}' alt />
                  </span>
                </p>
              </div>
            </div>
            <span>
              <img class="mw-100 w-100 h-auto" alt src='${element.barbieHashtag.barbieMainImg}' />
            </span>
            <div class="cust-container-2 px-3 pt-3">
              <div class="d-flex">
                <p class="mr-auto">${element.postPopularity.likes}</p>
                <p class="ml-auto">
                  ${element.postPopularity.comments} Comments  
                  ${element.postPopularity.shares} shares  
                  ${element.postPopularity.views} views
                </p>
              </div>
            </div>

            <div class="col-12 mx-auto">
              <div class="container">
                <div class="border-bottom"></div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="cust-container-2 py-3 like-cmnt-share-btn-group">
              <div class="row justify-content-between btn-group text-center">
                <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <button class="btn btn-outline-secondary border-0 " 
                          rel="popover"
                          id="loginn"
                          data-container="body"
                          data-placement="top"
                          data-html="true"
                          data-trigger="hover"
                          type="button">
                    <i class="far fa-thumbs-up"></i>
                    Like
                    <div class="hide d-none" id="like-btn-loginn">
                      <span class="like-btn-emoji">
                        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <i class="fas fa-grin-beam like-btn-yellow-emoji" aria-hidden="true"></i>	 
                        <i class="fas fa-meh-rolling-eyes like-btn-yellow-emoji" aria-hidden="true"></i>
                        <i class="fas fa-sad-tear	like-btn-yellow-emoji" aria-hidden="true"></i>
                        <i class="fas fa-angry like-btn-yellow-emoji" aria-hidden="true"></i>
                      </span>
                    </div>
                  </button>
                </div>
                <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <button class="btn btn-outline-secondary border-0" type="button" title="Leave a comment" data-toggle="tooltip">
                    <i class="far fa-comment-alt" aria-hidden="true"></i>
                    Comment
                  </button>
                </div>
                  <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                  <button class="btn btn-outline-secondary border-0" type="button" title="Share this to friends or post it on your timeline." data-toggle="tooltip">
                    <i class="fas fa-share" aria-hidden="true"></i>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
            <div class="border-bottom"></div>
          </div>

          <div class="cust-container-2 py-1">
            <div class="btn-group most-relevent-button"
                          data-toggle="popover"
                          id="login"
                          data-container="body"
                          data-placement="auto"
                          data-html="true" >
              <button type="button" class="btn btn-outline-secondary border-0 pr-0">
                Most relevant
                <span class="dropdown-toggle border-0 pl-1 pr-2"></span>                       
              </button>
              <div class="hide d-none" id="most-relevent-content-login">
                <div class="bg-white d-flex flex-column most-relevent-hidden-block px-1 pt-1">
                  <h6 class="">Most Relevant</h6>
                  <p class="">Comments form friends and those with the most views, reactions, replies and more appear at the top.</p>
                  <h6 class="">New</h6>
                  <p class="">New comments and those with new replies appear at the top.</p>
                  <h6 class="">All comments</h6>
                  <p class="">All comments including comments in foreign languages and potential spam are shown.</p>
                </div>
              </div>
            </div>
          </div>
        
          
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
            <div class="cust-container-2 pb-2 pt-3">
              <div class="row row-no-gutters">
                <div class="fb-user-img col-2 col-sm-2 col-md-2 col-lg-1 col-xl-1">
                  <img class="rounded-circle" alt src='${element.commentsBlock.userImg}' />
                </div>
                <form class="user-input-form-block pt-2 col-10 col-sm-10 col-md-10 col-lg-11 col-xl-11 pl-0 pl-sm-0 pl-md-0 pl-lg-2 pl-xl-0">
                  <div class="input-group mb-3">
                    <input class="form-control" type="text" placeholder="Write a comment..." spellcheck="true" role="textbox">
                    <div class="input-group-append">
                      <button class="btn" type="button">
                        <i class="far fa-smile" aria-hidden="true"></i>	
                      </button>
                      <button class="btn" type="button">
                        <i class="fas fa-camera" aria-hidden="true"></i>
                      </button>
                      <button class="btn" type="button">
                        <i class="fab fa-git-square" aria-hidden="true"></i>
                      </button>
                      <button class="btn" type="button">
                        <i class="fa fa-sticky-note" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="cust-container-2 py-1 w-100">
            <div class="showed-cmnt-block">
            </div>
            <div class="hidden-cmnt-block">
            </div>
          </div>

            <div class="view-previous-comment-button btn-group py-1 dropdown w-100">
              <button class="btn btn-outline-secondary border-0 w-100" type="button" role="button" onclick="viewPreviousCommentsFunc();">
                View previous comments            
              </button>
            </div>
          </div>
        </div>

      </section>
    </article>
  </main>


  `
  }
});
document.querySelector('#fbPostId').innerHTML = fbPostStrng
}



function mostReleventBtnPopoverFunc(){
  $("[data-toggle=popover]").each(function(i, obj) {
    $(this).popover({
      html: true,
      content: function() {
        var id = $(this).attr('id')
          return $('#most-relevent-content-' + id).html();
        }
      });
    });
  }



function viewPreviousCommentsFunc(){
  var x = document.querySelector('#hiddenCmntDivId');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
    if (x.style.display === 'block') {
      x.style.display = 'inherit';
    }
  }
}

function likeBtnPopoverFunc(){
  $("[rel=popover]").each(function(i, obj) {
      $(this).popover({
        html: true,
        content: function() {
            var id2 = $(this).attr('id') 
      return $('#like-btn-' + id2).html();
          }
        });
    });
}


//fbPost.forEach(element => {
  //fbPostStrng += `<p class="ml-auto">${element.postPopularity.comments} Comments  ${element.postPopularity.shares} shares  ${element.postPopularity.views} views</p>`
//});
