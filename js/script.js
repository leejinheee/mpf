/*script.js*/
$(document).ready(function(){

    /*header*/
    $(".work").click(function(){
        $("html, body").animate({scrollTop : $("#work").offset().top - 0}, 1000);
        return false;
    });
    $(".skills").click(function(){
        $("html, body").animate({scrollTop : $("#skills").offset().top - 60}, 1000);
        return false;
    });
    $(".about").click(function(){
        $("html, body").animate({scrollTop : $("#about").offset().top - 60}, 1000);
        return false;
    });
    $(".contact").click(function(){
        $("html, body").animate({scrollTop : $("#contact").offset().top - 0}, 1000);
        return false;
    });




    /*#work .marquee*/
    var $work = `
    <span>Selected works</span>
    `;

    for(i=1; i<100; i++){
        $("#work .marquee div").append($work);
    };


    /*#work .wList*/
    var $wList = [
        ["Apr 30, 2022", "jh_preview.png", "Responsive Web Design", "<li>#XD</li> <li>#Photoshop</li> <li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
        ["Jan 30, 2022", "nails_preview.jpg", "Logo & Responsive Web Design", "<li>#XD</li> <li>#Illustrator</li> <li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
        ["Sep 12, 2017", "laberry_preview.png", "Brochure & Poster & Business Card Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],
        ["Dec 02, 2020", "trading_preview.png", "Responsive Web Design", "<li>#XD</li> <li>#Photoshop</li> <li>#Illustrator</li>"],        
        ["Sep 20, 2019", "oai_preview.png", "Responsive Web Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],
        ["Feb 05, 2022", "hanhwa_preview.png", "Responsive Web Publishing", "<li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
    ];

    for(v of $wList){
        $("#work .wList").append(`
        <div class="box">
            <div class="wrap">
                <div class="top">
                    <div class="day">${v[0]}</div>
                    <div class="point">✹</div>
                </div>
                <div class="Tnail"><img src="./img/${v[1]}" alt=""></div>
                <div class="bot">
                    <p>${v[2]}</p>
                    <ul>
                        ${v[3]}
                    </ul>
                </div>
            </div>
        </div>
        `);
    };



    /*#work .wList > 더보기 클릭시*/
    $("#work .more_btn").click(function(){
        const boxheight = $("#work .wList .box").height();
        console.log(boxheight);
        $.ajax({
            url : "./wList_add.html",
            success : function(result){
                $(".more_btn").html(result);
            }
        });
        $(this).hide();
        $("html, body").animate({scrollTop : $("#work .wList .box").last().offset().top + boxheight}, 1000);
    });



    /*#work .wList_Show*/
    //#1. 배열 데이터를 구성한다.
    var $popup = [
        ["Portfolio", "jh_1_5.png", "2022년 2월 ~", "<li>responsive Web</li>", "-", "<li>design 100%</li> <li>publishing 100%</li> <li>script 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Visual Studio Code</li>", "저의 작품을 보여주는 개인 포트폴리오 웹사이트입니다.<br><br>카테고리의 한계 없이 다양한 창작물을 만들어 소개하는 공간으로 제작하였습니다.<br>직접 기획부터 디자인, 코딩까지 작업하였으며 가능한 간결하고, 명확한 웹사이트를 구축하는 것이 목표였습니다.<br>작품을 돋보이게 전시하며 내용의 중요성을 고려한 콘텐츠 배치와 레이아웃으로 설계했습니다.<br><br>전반적인 컬러는 특성상 작품 소개가 위주이기 때문에 스트롱 컬러보다<br>노멀하지만 각인효과의 요소가 있는 컬러인 Black & white를 함께 사용하여 깔끔히고 유니크한 이미지를 전달하였습니다.<br>포인트 컬러로는 Pink를 사용하여 강조의 기능을 효과적으로 표현하였습니다.<br><br>새로운 작품에 대한 정보를 지속적으로 업데이트하여 관리합니다.", `<a href="https://leejinheee.github.io/mpf/">See the website</a>`, `<img class="mBot0" src="./img/jh_2.png"> <img class="mBot0" src="./img/jh_3.png"> <img class="mBot0" src="./img/jh_4.gif"> <img class="mBot0" src="./img/jh_5.png"> <img class="mBot0" src="./img/jh_6.gif">`],
        ["Nails", "nails_1.png", "2022년 1월", "<li>logo design</li> <li>responsive Web</li>", "-", "<li>design 100%</li> <li>publishing 100%</li> <li>script 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Illustrator</li> <li>Visual Studio Code</li>", "더 나은 커리어를 위해 시작한 개인 프로젝트입니다.<br><br>코로나로 인해 급 부상 중인 비대면으로 자신을 가꿀 수 있는 홈 네일 케어 브랜드를 제작하였습니다.<br>직접 기획부터 디자인, 코딩, 데이터베이스까지 작업하였으며 로그인, 회원가입, 개인정보수정, 장바구니담기, 상품취소, 상품검색, 상품등록을 구현할수 있습니다.<br><br>Nails는 스타일리시하고 모던한 브랜드 아이덴티티를 구축하는 것이 목표였습니다.<br>시각적으로 매력적인 분위기를 느낄 수 있도록 빅사이즈 텍스트와 레이아웃을 새롭게 배치하였습니다.<br>사용자들에게 콘텐츠를 시각적, 언어적 가독성을 집중도 높게 소비할 수 있도록 설계하였습니다.", `<a href="http://jinhee.kr/nails">See the website</a>`, `<img class="mBot0" src="./img/nails_2_3.gif"> <img class="mBot0" src="./img/nails_3.png"> 
        <section id="video">
            <video class="video" autoplay="" loop="" playsinline="" muted="">
                <source type="video/mp4" src="./img/nails.mp4">
            </video>
        </section>
        <img class="mBot0" src="./img/nails_5.png"> <img class="mBot0" src="./img/nails_6.gif">`],
        ["eevoo", "laberry_1.png", "2017년 9월", "<li>Brochure design</li> <li>Poster design</li> <li> business card design</li>", "Laberry", "<li>design 60%</li> ", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문인 eevoo의 브로슈어입니다.<br>제품마다 가진 생명력있는 특징과 정보를 중점을 두어 eevoo의 브랜드 가치를 사용자들에게 전달하여<br>자연스럽게 제품에 대한 콘텐츠들을 연계하고 소비할 수 있도록 가독성있게 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/laberry_2.png">`],
        ["Crypto", "trading_1.png", "2020년 12월", "<li>responsive Web</li>", "-", "<li>design 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Illustrator</li>", "간편하고 안전하게 암호화폐를 구매 및 판매를 대행해 드리는 사이트입니다.<br>이용이 어려우신 분들에게 콘텐츠를 정확히 전달하기 위해 불필요한 디자인을 최대한 배재하여<br>가독성을 높이며 사용법은 쉽고 명확하게 접할 수 있도록 제작하였습니다.<br>기획에 일부 참여하고 디자인 100% 진행하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/trading_2.png">`],        
        ["OAI", "oai_1.png", "2019년 9월", "<li>responsive Web</li>", "OAI", "<li>design 50%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "1993년도에 설립됐으며 고객의 만족을 최우선으로 추구하며 미래를 향한 비상을 하는 항공사의 웹사이트를 진행하였습니다.<br>저의 작업은 PC 서브페이지와 Mobile 모든 페이지를 맡아 디자인하였습니다.<br>다양한 프로모션 콘텐츠를 중점적으로 쉽고 빠르게 보여주기 위해 불필요한 디자인을 최대한 배제하여 가독성을 높였습니다.<br>또한 옴니항공만의 아이덴티티와 톤앤매너를 활용하여 기업 이미지를 강화시키고자 하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/oai_2.png">`],
        ["Hanhwa", "hanhwa_1.png", "2022년 2월", "<li>responsive Web</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "더 나은 커리어를 위해 퍼블리싱 100% 작업한 반응형 사이트입니다.<br>한화건설의 메인페이지, 서브페이지(Hanwha E&C, BUSINESS, PR CENTER, CAREERS, CUSTOMER)를<br>HTML, CSS, JAVASCRIPT를 활용하여 다양한 기능을 웹 표준에 맞게 반응형으로 구축하였습니다.<br>하단 링크를 통해 확인해 주세요.", `<a href="https://leejinheee.github.io/hanhwa/">See the website</a>`, ``],
    ];

    //#2. 패턴으로 구성
    for(v of $popup){
        $("#work").append(`
        <div class="wList_Show">
            <div class="wrap">
                <div class="close">Close</div>

                <h3>${v[0]}</h3>

                <div class="cont">
                    <div class="main_img">
                        <img src="./img/${v[1]}" alt="">
                    </div>

                    <div class="inpo">
                        <div class="col one">
                            <h4>date</h4>
                            <ul>
                                <li>${v[2]}</li>
                            </ul>

                            <h4>category</h4>
                            <ul>
                            ${v[3]}
                            </ul>
                        </div>
                        <div class="col two">
                            <h4>client</h4>
                            <ul>
                                <li>${v[4]}</li>
                            </ul>

                            <h4>skills</h4>
                            <ul>
                            ${v[5]}
                            </ul>

                            <h4>tool</h4>
                            <ul>
                            ${v[6]}
                            </ul>
                        </div>
                        <div class="col three">
                            <h4>DESCRIPTION</h4>
                            <P>${v[7]}</P>

                            ${v[8]}
                        </div>
                    </div>

                    <div class="detail_img">
                    ${v[9]}
                    </div>
                </div> 
            </div>
        </div>
        `);
    }

    //#3. 각 박스 영역을 클릭시
    $("#work .wList .box").click(function(){
        const $active = $("#work .wList_Show").hasClass("active");
        const $click_index = $(this).index();
        console.log($click_index);
        
        $("#work .wList_Show").eq($click_index).addClass("active");              
        $("body").addClass("active");
    });

    //#4. 팝업 닫기 구성
    $("#work .wList_Show .close").click(function(){
        $("#work .wList_Show").removeClass("active");
        $("body").removeClass("active"); 
    }); 
    
    //#5. a태그 _blank 생성
    $('#work .col.three a').attr('target', '_blank');



    /*#skills .content*/
    var $skills = [
        ["Design Tool", "90", "Photoshop, Illustrator, xd, figma 사용이 가능합니다.<br>  명함, 오프라인배너, 포스터, 브로슈어부터 웹, 모바일 쇼핑몰<br>  상세페이지 등 다양한 분야의 디자인을 경험했습니다."],
        ["Html & CSS", "70", "html 웹 표준, 접근성을 준수하여 제작이 가능합니다.<br>css 속성을 이해하며 디자인 시안에 따른 디자인을<br>구현할 수 있습니다.<br>미디어쿼리를 이해하며 반응형 웹을 제작할 수 있습니다."],
        ["Javascript", "50", "Javascript 기본적인 문법 사용과 플러그인 사용이 가능하며,<br>jQuery 라이브러리 사용 가능합니다."],
        /*["Backend", "50", "Vue에 기초 지식이 있으며, Vue.js 프레임워크를 이용하여 <br>간단한 홈페이지 제작 경험이 있습니다."],*/
        ["DataBase", "40", "개인 포트폴리오 작업 중 PHP를 이용하여 MySql의 Table 생성<br>조건문을 사용해서 로그인, 회원가입, 개인 정보 수정,<br>장바구니 담기, 상품 취소, 상품 검색, 상품 등록 같은 기능들이<br>구동 가능하도록 제작 경험이 있습니다."],
        ["Certificate", "100", /*'<img src="./img/certificate8.png">',*/ "⦁&nbsp;&nbsp;&nbsp;웹디자인기능사&nbsp;&nbsp;-&nbsp;&nbsp;한국산업인력공단<br>⦁&nbsp;&nbsp;&nbsp;GTQ(포토샵) 1, 2급&nbsp;&nbsp;-&nbsp;&nbsp;한국생산성본부 <br>⦁&nbsp;&nbsp;&nbsp;예술분장 2, 3급&nbsp;&nbsp;-&nbsp;&nbsp;한국미용문화사연구협회"],
    ];

    for(v of $skills){
        $("#skills .content .col.two").append(`
        <div class="box">
            <h4>${v[0]}</h4>
            <div class="percent">${v[1]}<span>%</span></div>
            <p>${v[2]}</p>
        </div>
        `);
    };

    //mobile
    for(v of $skills){
        $("#skills .content .col.two_m").append(`
        <div class="box">
            <div class="percent">${v[1]}<span>%</span></div>
            <div class="right">
                <h4>${v[0]}</h4>
                <p>${v[2]}</p>
            </div>
        </div>
        `);
    };


});



/*#Contact*/
var $contMsg = document.querySelector("#contact");
var $msgOne = document.querySelector("#contact .contMsg .msg.one");
var $msgTwo = document.querySelector("#contact .contMsg .msg.two");
var n = 1;
var m = 1;

function change_size(){
    var $cur_width = window.innerWidth;  //실제 브라우저의 내부 가로 사이즈
    console.log($cur_width);
    
    if($cur_width < 1200){  
        if($cur_width < 992){ 
            if($cur_width < 768){ 
                if($cur_width < 568){ //Mobile 세로 구간
                    
                }else{ //Mobile 가로 구간
                    
                }
            }else{ //Tablet 세로 구간
                
            }
        }else{  //Tablet 가로 구간
            // 스크롤이벤트
        }
    }else{  //PC
        // 마우스 휠 이벤트
        $contMsg.addEventListener("wheel", function(event){
            console.log(event);
             if (event.wheelDelta > 0) {
                 // scroll up
                 console.log("스크롤 위로");
                 $msgOne.style.transform = `translate(${n*100}px)`;
                 
                 if(n < 1){
                    n++;
                 }

                 $msgTwo.style.transform = `translate(${m*100}px)`;
                 if(m > 1){
                     m--;
                 }
                                 
             }
             else {
                 // scroll down
                 console.log("스크롤 아래로");

                 $msgOne.style.transform = `translate(${n*100}px)`;
                 if(n > -7){
                    n--;
                 }
                 
                 $msgTwo.style.transform = `translate(${m*100}px)`;
                 if(m < 10){
                     m++;
                 }
                
             }
         });
    }
}
change_size();
/*
window.addEventListener("wheel", function(event){
    console.log(event);
     if (event.wheelDelta > 0) {
         // scroll up
         console.log("스크롤 위로");

     }
     else {
         // scroll down
         console.log("스크롤 아래로");

     }
});
*/



////////////////// 반응형 메뉴 //////////////////
var $nav = document.querySelector("header nav");
var $body = document.querySelector("body");

function openMenu(){
    $nav.classList.add("active");
    $body.classList.add("menuOpen");
}

function closeMenu(){
    $nav.classList.remove("active");
    $body.classList.remove("menuOpen");
}

function navLi(){
    $nav.classList.remove("active");
}