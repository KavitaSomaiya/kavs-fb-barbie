

function bodyOnLoadFuncs(){
  mostReleventBtnPopoverFunc();
  //likeBtnPopoverFunc();
  imagesPostFunc();
  likeCmntShareGroupFunc();
}
function likeCmntShareGroupFunc(){
  
  var likeCmntShareGroupStrng = ''
  var likeBtnChild = ''
  const likeCmntShareGroupVar = [
    {
      faEmoji = 'far fa-thumbs-up',
      name = 'Like',
      children = [
        {
          
        }
      ]
    },
    {
      faEmoji = 'far fa-comment-alt',
      name = 'Comment',
      title = 'Leave a comment',
      dataToggle = 'tooltip'
    },
    {
      faEmoji = 'fas fa-share',
      name = 'Share',
      title = 'Share this to friends or post it on your timeline.',
      dataToggle = 'tooltip'
    }
  ]
  likeCmntShareGroupVar.forEach (element => {
    if (name === 'Like') {
      likeCmntShareGroupStrng =
        `
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <button class="btn btn-outline-secondary border-0 " 
                    rel="popover"
                    id="loginn"
                    data-container="body"
                    data-placement="top"
                    data-html="true"
                    data-trigger="hover"
                    type="button">
            <i class='${Element.faEmoji}' aria-hidden='true'></i>
            ${Element.name}
          </button>
        </div>
        `
    } else {
      likeCmntShareGroupStrng +=
        `
        <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <button class="btn btn-outline-secondary border-0" type="button" title='${Element.title}' data-toggle='${Element.dataToggle}'>
            <i class='${Element.faEmoji}' aria-hidden="true"></i>
            ${Element.name}
          </button>
        </div>
        `
    }
  });
  document.querySelector("#likeCmntShareBtnGroupId").innerHTML = likeCmntShareGroupStrng
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

function imagesPostFunc(){
  var imagesPostVar = [{
    
    barbieLogoImgSrc: 'images/barbie-logo-img.jpg',
    fbCheckLogoImgSrc: 'images/fb-check-logo-1.png',
    earthLogoImgSrc: 'images/earth-logo-img-1.png',
    blueHeartLogoImgSrc: 'images/blue-heart-logo-1.png',
    barbieMainImgSrc: 'images/barbie-img-for-html.jpg'
  }]
  var barbieLogoImgString = '',
      fbCheckLogoImgString = '',
      earthLogoImgString = ''
      blueHeartLogoImgString = '' 
      barbieMainImgString = ''
  imagesPostVar.forEach(element => {
    barbieLogoImgString = `<img class='rounded-circle navbar-brand-img' alt src='${Element.barbieLogoImgSrc}'>`
    fbCheckLogoImgString  = `<img class='check-logo-img' src='${Element.fbCheckLogoImgSrc}' alt />`
    earthLogoImgString = `<img class='earth-logo-img' src='${Element.earthLogoImgSrc}' alt />`
    blueHeartLogoImgString = `<img class='blue-heart-logo-img' src='${Element.blueHeartLogoImgSrc}' alt />`
    barbieMainImgString = `<img class='mw-100 w-100 h-auto' alt src='${Element.barbieMainImgSrc}' />`
  });
  document.querySelector('#barbieLogoImgId').innerHTML = barbieLogoImgString
  document.querySelector('#fbCheckLogoImgId').innerHTML = fbCheckLogoImgString
  document.querySelector('#earthLogoImgId').innerHTML = earthLogoImgString
  document.querySelector('#blueHeartLogoImgId').innerHTML = blueHeartLogoImgString
  //document.querySelector('#barbieMainImgId').innerHTML = barbieMainImgString
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

