

Kakao.init('72350930c92efd1f9392ccee2cae47e6');
function myKakaoNavi1() {
    Kakao.Navi.start({
        name:"SW컨벤션센터",
        x:127.015143016544734,
        y:37.57150808588184,
        coordType:'wgs84'
    })
}

var mapContainer = document.getElementById('map');
var mapOption = {
  center: new kakao.maps.LatLng(37.57151934868425, 127.015143016544734), 
  level: 4
};

var map = new kakao.maps.Map(mapContainer, mapOption);
var marker = new kakao.maps.Marker({ 
    position: map.getCenter() 
}); 
marker.setMap(map);

// 드래그 잠금
function setMapDraggable(draggable) {
  map.setDraggable(draggable);  
}

var flagMap = false;
setMapDraggable(flagMap);

function setMapLock() {
  if (flagMap) { // 잠금
    $('.fa-lock-open').addClass('hidden');
    $('.fa-lock').removeClass('hidden');
    $('#panel').removeClass('hidden');
  } else { // 열림
    $('.fa-lock').addClass('hidden');
    $('.fa-lock-open').removeClass('hidden');
    $('#panel').addClass('hidden');
  }
  flagMap = !flagMap;
  setMapDraggable(flagMap);
}


var cnt = 0
$('.demo').on('click', function() {
  if (cnt < 10) {
    cnt++;
  } else {
    cnt = 0;
    alert('장가간다 근웅이!!!!!');
  }
});

const setDate = new Date("2022-06-12T11:00:00+0900");
const now = new Date();
const distance = setDate.getTime() - now.getTime();

const day = Math.floor(distance/(1000*60*60*24));
const time = Math.floor(distance/(1000*60*60));
const min = Math.floor(distance/(1000*60));


if (day > 2) {
  $('.dday').html('D-' + day);
} else if (day >= -1) {
  if (time > 0) {
    $('.dday').html(time + ' 시간 후');
  } else if (min > 0) {
    $('.dday').html(min + ' 분 후');
  } else if (min > -60)  {
    $('.dday').html('결혼 중 입니다.');
  } else {
    $('.m-text').html('결혼 했습니다.');
  }
} else {
  $('.dday').html(day * -1 -1 + ' 일 전');
  $('.m-text').html('결혼 했습니다.');
}



$('#btnCollapse1').on('click', function() {
  $('#collapse1').slideToggle(300, function() {
    var n = $(document).height();
    $('html, body').animate({ scrollTop: n }, 50);
  });
  $('#collapse2').slideUp(300);
  
  
});
$('#btnCollapse2').on('click', function() {
  $('#collapse2').slideToggle(300, function() {
    var n = $(document).height();
    $('html, body').animate({ scrollTop: n }, 50);
  });
  $('#collapse1').slideUp(300);
});

$('.btnCopy').on('click', function(){
  var tempElem = document.createElement('textarea');
  tempElem.value = $(this).data('copy');
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);

  alert($(this).data('copy') + '\n복사완료');
});