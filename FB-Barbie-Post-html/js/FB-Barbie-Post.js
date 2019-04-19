

function bodyOnLoadFuncs(){
  mostReleventBtnPopoverFunc();
  //likeBtnPopoverFunc();
  fbPostFunc();
  
}

  
function fbPostFunc(){
  var fbPostStrng=''
  const fbPost = [{
    navbarVar: {
      barbieLogoImg: 'images/barbie-logo-img.jpg',
      fbCheckLogoIcon: 'images/fb-check-logo-1.png',
      earthLogoIcon: 'images/earth-logo-img-1.png',
      navItems: [
        {
          name: 'Save Post',
          url: '#',
          saveIcon: 'fa fa-save'
        },{
          name: 'View edit history',
          url: '#',
        },{
          name: 'Embed',
          url: '#'
        },{
          name: 'Turn on notifications for post',
          url: '#'
        },{
          name: 'Show in tab',
          url: '#'
        },{
          name:'Give feedback on this post',
          url:'#'
        }
      ]        
    },
    barbieHashtagVar: {
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
    likeCmntShareIconsVar: [
      {
        name: 'Like',
        icon: 'far fa-thumbs-up',                
        likeEmoji: {
            heart: 'fa fa-heart',
            grinBeam: 'fas fa-grin-beam',
            rollingEyes: 'fas fa-meh-rolling-eyes',
            sadTear: 'fas fa-sad-tear',
            angry: 'fas fa-angry'
          }
      },{
        name: 'Comment',
        icon: 'far fa-comment-alt'
      },{
        name: 'Share',
        icon: 'fas fa-share'
      }
    ],     
    mostRelevantBtn: {
      name: 'Most Relevant',
      hiddenBlckId: 'mostReleventContentLogin',
      hiddenBlck: [
        {
          h6: 'Most Relevant',
          p: 'Comments form friends and those with the most views, reactions, replies and more appear at the top.'
        },
        {
          h6: 'New',
          P: 'New comments and those with new replies appear at the top.'
        },
        {
          h6: 'All Comments',
          p: 'All comments including comments in foreign languages and potential spam are shown.'
        }
      ]
    },
    commentsBlock: {
      userImg: 'https://thispersondoesnotexist.com/image',
      writeCmntBlck: {
        placeHolder: 'Write a comment...',
        Icons: {
          smileIcon: 'far fa-smile',
          cameraIcon: 'fas fa-camera',
          gitIcon: 'fab fa-git-square',
          stickyNoteIcon: 'fa fa-sticky-note'
        }
      },
      showedCmntsBlock: [
        {
          comment: 'Nice',
          commentUser: 'Abc',
        },{
          comment: 'good',
          commentUser: 'xyx',
        },{
          comment: 'very nice',
          commentUser: 'ddd',
        }
      ],
      hiddenCmntsBlock: [
        {
          comment: 'beautiful',
          commentUser: 'mno',
        },{
          comment: 'nice',
          commentUser: 'hhh',
        },{
          comment: 'amazing',
          commentUser: 'ccc',
        }
      ],
      viewPreviousCmntsBtn: {
        name: 'View Previous Comments',
        funcName: 'viewPreviousCommentsFunc();'
      }
    }
  }]
  
fbPost.forEach(element => {
  fbPostStrng += ``
});
document.querySelector('#fbPostId').innerHTML = fbPostStrng
  
}



function mostReleventBtnPopoverFunc(){
  $("[data-toggle=popover]").each(function(i, obj) {
    $(this).popover({
      html: true,
      content: function() {
        var id = $(this).attr('id')
          return $('#mostReleventContent' + id).html();
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

