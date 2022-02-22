// JavaScript Document
$(document).ready(function(){

	$("a[href = '#']").click(function(e){
		e.preventDefault();
		return false;
	});

	

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}


// 섹션.비쥬얼 슬라이드(자바스크립트, 자동슬라이드, 도트 누르면 그 페이지에서 멈추다가 다시 자동 작동되게하기)

	// function slide01(){
	// 	const slides = document.querySelector('.slides_wrap');
	// 	const page = document.querySelector('.pagination');
	// 	const item = slides.getElementsByClassName('slide');
	// 	const dot = page.getElementsByClassName('dots');

	// 	const firstEle = item[0]; // 첫번째아이템
	// 	const firstPagin = dot[0]; // 첫번째도트

    //     firstEle.classList.add('cur');
	// 	firstPagin.classList.add('active');

	// 	const auto_slide = setInterval(slider_auto, 3000);

	// 	function slider_auto(Isthat){

    //         if(IsThat){
    //             var nextOr ='prev';
    //         }
    //         else{ 
    //             var nextOr ='next';
    //         }

    //         const currentItem = document.querySelector('.cur');
    //         const currentThumb = document.querySelector('.active');
    //         currentItem.classList.remove('cur')
    //         currentThumb.classList.remove('active')

    //       if (nextOr === 'next'){  // 다음버튼을 눌렀다면
    //             if (!currentItem.nextElementSibling) {//마지막 아이템일 경우
    //                 item[0].classList.add('ontheSlide') //처음으로 슬라이드아이템 이동
    //                 thumbnail[0].classList.add('ontheThumbnail')//처음으로 썸네일 아이템 이동
    //             }   
    //             else { //그 외의 경우
    //                 currentItem.nextElementSibling.classList.add('ontheSlide') //다음으로 슬라이드 아이템 이동
    //                 currentThumb.nextElementSibling.classList.add('ontheThumbnail')//다음으로 썸네일 아이템 이동
    //             }   
    //       }
    //        else if (nextOr === 'previous') { // 이전 버튼을 눌렀다면
    //            if (!currentItem.previousElementSibling) { //첫번재 아이템일 경우
    //                 item[item.length-1].classList.add('ontheSlide') //마지막 슬라이드로 이동
    //                 thumbnail[thumbnail.length-1].classList.add('ontheThumbnail')  //마지막 썸네일로 이동
    //             }   
    //             else { //다른 경우
    //                 currentItem.previousElementSibling.classList.add('ontheSlide') //이전 슬라이드 아이템으로 이동
    //                 currentThumb.previousElementSibling.classList.add('ontheThumbnail')//이전 썸네일 아이템으로 이동
    //             }   
    //         } 
            
    //     }
        
    //     const nextButton = document.querySelector('.nextButton');//다음버튼 감지
    //     const prevButton = document.querySelector('.prevButton');//이전버튼 감지
    //     nextButton.addEventListener('click',function(){//다음 버튼을 누른다면
    //       clearInterval(auto_slide)//자동이동을 중지하고
    //       slider_auto();//수동으로 다음이동
    //     })
    //     prevButton.addEventListener('click',function(){//이전 버튼을 누른다면
    //       clearInterval(auto_slide)//자동이동을 중지하고
    //       slider_auto();//수동으로 이전 이동
    //     })  
    

    //     //도트 0번을 누르면 active 클래스 추가, 이미지 0번에 cur를 주고
    //     //도트 1번을 누르면 active 클래스 추가, 이미지 1번에 cur를 주고 
    //     //도트 2번을 누르면 active 클래스 추가, 이미지 2번에 cur주기

    //   for(var i = 0; i < dot.length; i++){
	// 		    dot[i].setAttribute('data-number', i); //데이터 넘버를 i로 세팅하는 것

    //             dot[i].addEventListener('click', function(event){ //도트 i를 클릭하면 그 아이템과 도트에 클래스를 붙이고, 이게 아닌 애들은 클래스를 제거해야함 
	// 			clearInterval(auto_slide); // 자동 이동 멈춤 

	// 			const curItem = document.querySelector('.cur');
	// 			const curDot = document.querySelector('.active');

	// 			curItem.classList.remove('cur'); // 현재 아이템 비활성화
	// 			curDot.classList.remove('active'); // 현재 썸네일 비활성화

	// 			const number = event.target.getAttribute('data-number'); // 몇 번째 썸네일을 클릭했는지 감지(안됨???)


	// 			item[number].classList.add('cur') // 썸네일과 같은 숫자의 아이템을 활성화
	// 			dot[number].classList.add('active') // 클릭한 썸네일을 활성화
	// 		    }) // 안되는데??????????/
    //         }


    // }
    // slide01();



    // 섹션.비쥬얼 슬라이드(자동슬라이드, 페이지내이션 누르면 그 페이지로)

    const $slides = $(".visual .slide");
    const $pn_btns = $(".visual .pagination button.dots");
    // const $btn_prev = $(".visual buton.prev");
    // const $btn_next = $(".visual buton.next");
    let cnt = 0; // 
    let si_01 = 0; // interval

    $pn_btns.on("click", function(){
        var cur_num = $pn_btns.index(this);
        if(cur_num == cnt) return;
        cnt = cur_num;
        fade_img(cnt);
        pagination_change(cnt);        
    })


    function count_plus(){
    cnt = cnt == $slides.length - 1 ? 0 : cnt + 1;
    fade_img(cnt);
    pagination_change(cnt);
    //if(cnt == ($slides.length - 1) ) cnt = 0; else{ cnt++; }
    }

    function count_minus(){
    cnt = cnt == 0 ? $slides.length - 1 : cnt - 1;
    fade_img(cnt);
    pagination_change(cnt);
    // if(cnt == 0) cnt = ($slides.length - 1);   else{ cnt--; }
    }

    function fade_img(num){
        stop_si();
        $slides.fadeOut(500);
        $slides.eq(num).fadeIn(500, function(){
        start_si();
        });
    }

    function pagination_change(num){
        $pn_btns.removeClass("active");
        $pn_btns.eq(num).addClass("active");
    }

    function start_si(){ // 스타트인터벌 함수, 인터벌 초기값이 0 이 아니면 인터벌 멈추고 다시 세팅
        if(si_01 != 0){
            clearInterval(si_01)
        }
        si_01 = setInterval(count_plus, 3000);
    }

    function stop_si(){ // 스탑인터벌 함수, 스탑 초기값 0 아니면 인터벌 클리어하고 0으로 세팅
        if(si_01 != 0){
            clearInterval(si_01)
        }
        si_01 = 0;
    }

  start_si();




    //이동형 슬라이드
    function rolling_slides(_targetWrap){

      const $wrap = _targetWrap; // .product_01 or .product_02
   
      const $mask = $($wrap +" div.view_mask");
      let $inner_ul = $($wrap +" div.view_mask > ul");
      let $inner_ul_li = $($wrap +" div.view_mask > ul > li");
      const $btn_prev = $($wrap +' button.prev');
      const $btn_next = $($wrap +" button.next");
   
      const li_width = $inner_ul_li.outerWidth();
      const move_cnt = 1; // 보여지는 li 갯수
      const duration = 400; // 이동속도
      let click_Event = true;
      let si_01 = 0; // undefined
      
      (function init(){
         for(var i = 1; i <= move_cnt; i++){
            $inner_ul_li.last().prependTo($inner_ul);
         }
         $inner_ul.css("margin-left", -(li_width * move_cnt) + "px");
      })();
   
      // 즉시 실행 (요기있는 내용을 즉시 실행해라)();
   
      
   
      function movement(_direction){
         stop_si()
         $inner_ul.animate({ left: _direction * li_width * move_cnt +"px" }, duration, function(){
            for(var i = 1; i <= move_cnt; i++){
               $inner_ul_li = $($wrap + " div.view_mask > ul > li");
               if(_direction == 1){
                  $inner_ul_li.last().prependTo($inner_ul);
               }
               else if(_direction == -1){
                  $inner_ul_li.first().appendTo($inner_ul);
               }
            }
            $inner_ul.css("left", "0px");
            click_Event = true;
            start_si();
         });
      }
   
      $btn_prev.click(function(){
         if(click_Event){
            click_Event = false;
            movement(1);
         }
         else{
            return
         }
      });
   
      $btn_next.click(function(){
         if(click_Event){
            click_Event = false;
            movement(-1);
         }
         else{
            return
         }
      });
   
      function start_si(){
         if(si_01 != 0){
            clearInterval(si_01);
         } 
         si_01 = setInterval(function(){$btn_next.click()}, 4000);
      }
      
      function stop_si(){
         if(si_01 != 0) clearInterval(si_01);
         si_01 = 0;
      }
   
      start_si();
   
   }
   
   let rolling_01 = rolling_slides(".dramas");
   let rolling_02 = rolling_slides(".trailers");






   //original slider
    $(function(){ 
        var slides = $('.inner_wrap_half .info_wrap'),
            slideCount = slides.length,
            currentIndex = 0;

        var imgs = $('.imgs_wrap .img_wrap'),
            imgCount = imgs.length,
            currentImg = 0;

        var dots = $('.pagination_01 .dot_01'),
            dotCount = dots.length,
            currentDot = 0;

        let cnt = 0; 
        
        //해당 시간이 지나면 한 번만 할 일
        //var timer = setTimeout(할일, 1000); 
        //clearTimeout(대상의 이름);

        //일정시간마다 할일
        //var timer = setInterval(할일, 시간);
        //clearInterval(timer);
        
        //제이쿼리 집합개체(object) 중 특정번째 요소 선택 .eq
        //.eq(숫자)<-해당하는 요소를 선택 equivalent 동등한, 인덱스 번호와 동등한 요소
        //요소를 서서히 나타나도록 .fadeIn()

        slides.eq(currentIndex).fadeIn();
        imgs.eq(currentImg).fadeIn();
        dots.eq(currentDot).addClass('active');


        var timer = setInterval(showNextSlides, 4000);
        var timer01 = setInterval(displayNextImgs, 4000);
        var timer02 = setInterval(activeDots, 4000);
        //clearInterval(timer);

        function activeDots(){ 
            var nextDot = (currentDot +1) % dotCount;
            dots.eq(currentDot).removeClass('active');
            dots.eq(nextDot).addClass('active');
            currentDot = nextDot;

        }
        function showNextSlides(){
                //ci가 0 번일 때, 1이 들어와야함, ci 1 ni 2, ci 2 ni 3, ci 3 ni 0
                //slideCount 4
                var nextIndex = (currentIndex +1) % slideCount; //슬라이드 길이로 나눠주면 다시 0번으로 갈 수 있음
                //1. 현재 슬라이드가 사라지고 
                slides.eq(currentIndex).fadeOut();
                //2. 다음 슬라이드가 나타난다.
                slides.eq(nextIndex).fadeIn();
                currentIndex = nextIndex;
        } 

        function displayNextImgs(){
            var nextImg = (currentImg +1) % imgCount;
            imgs.eq(currentImg).fadeOut();
            imgs.eq(nextImg).fadeIn();
            currentImg = nextImg;
        }


        //도트 클릭하면 그 도트, 이미지, 슬라이드 들어오게 하기

        dots.on("click", function(){
          var curNum = dots.index(this);
          if(curNum == cnt) return;
          cnt = curNum;
          fade_imgs(cnt);
          fade_slides(cnt);
          page_change(cnt);        
      })


        function fade_imgs(num){
          clearInt();
          imgs.fadeOut(500);
          imgs.eq(num).fadeIn(500, function(){
          // setInt();
          });
      }

        function fade_slides(num){
          clearInt();
          slides.fadeOut(500);
          slides.eq(num).fadeIn(500, function(){
          // setInt();
          })
        }
  
        function page_change(num){
          dots.removeClass("active");
          dots.eq(num).addClass("active");
        }
  
        
        //마우스를 대면 멈추게 조정

        $(dots).mouseover(function(){
            clearInt();
        })

        function clearInt(){
            clearInterval(timer);
            clearInterval(timer01);
            clearInterval(timer02);
        }

        $(dots).mouseout(function(){
            setInt();
            
        }) 

        function setInt(){
            timer = setInterval(showNextSlides, 4000);
            timer01 = setInterval(displayNextImgs, 4000);
            timer02 = setInterval(activeDots, 4000);
        }
        
        
    })








if(!isMobile){
		
		

}

else {



    // Tablet
    if(screen.width >= 768){

      let rolling_03 = rolling_slides(".event");

    }

    // Mobile
    else {

      let rolling_03 = rolling_slides(".event");


    }
    
}


});