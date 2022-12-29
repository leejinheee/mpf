$(document).ready(function(){

    /*#work .wList*/
    var $wList = [
        ["Jan 21, 2022", "origin_preview.png", "Responsive Web Publishing", "<li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
        ["Jan 20, 2022", "puma_preview.png", "Responsive Web Publishing", "<li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
        ["Jan 01, 2022", "natgeo_preview.png", "Web Publishing", "<li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
        ["Aug 19, 2021", "wedding_preview.png", "Web Publishing", "<li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
        ["Aug 13, 2021", "boplay_preview.png", "Responsive Web Publishing", "<li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
        ["Aug 06, 2021", "cashmere_preview.png", "Web Publishing", "<li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
        ["Jul 30, 2021", "sejon_preview.png", "Web Publishing", "<li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
        ["Jul 30, 2021", "cakehouse_preview.png", "Web Publishing", "<li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],
        ["Jul 19, 2021", "kuliner_preview.png", "Web Publishing", "<li>#HTML5</li> <li>#CSS3</li> <li>#jQuery</li>"],  

        ["apr 23, 2021", "change_preview.jpg", "Logo & Responsive Web Design", "<li>#XD</li> <li>#Photoshop</li> <li>#Illustrator</li>"],  
        ["aug 24, 2020", "bottega_preview.png", "Menu Design", "<li>#Illustrator</li>"],      
        /*["Oct 20, 2020", "bottega_poster_preview.png", "Poster Design", "<li>#Illustrator</li>"],*/
        ["Jun 26, 2020", "allday_preview.png", "Logo & Responsive Web Design", "<li>#XD</li> <li>#Illustrator</li>"],
        ["Apr 21, 2020", "purple_preview.png", "Responsive Web Design", "<li>#XD</li> <li>#Photoshop</li> <li>#Illustrator</li>"],
        ["Mar 31, 2020", "realestate_preview.png", "Responsive Web Design", "<li>#XD</li> <li>#Photoshop</li> <li>#Illustrator</li>"],    
        ["Dec 13, 2019", "ladderEvt_preview.png", "Game UI", "<li>#Photoshop</li> <li>#Illustrator</li>"],    
        ["Oct 08, 2019", "worldWide_preview.png", "Logo & Responsive Web Design", "<li>#Photoshop</li>"],    
        ["Aug 27, 2019", "nuerepa_preview.jpg", "Responsive Web Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],
        ["Aug 05, 2019", "maxMatrix_preview.png", "Responsive Web Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],  
        /*["may 05, 2022", "lobanakorea2_preview.png", "Logo & Responsive Web Design", "<li>#XD</li> <li>#Illustrator</li>"],*/
        ["Oct 17, 2018", "happyPet_preview.png", "Logo & Responsive Web Design", "<li>#Photoshop</li>"],            
        ["Jul 13, 2018", "rinnai_preview.png", "Website Design", "<li>#Photoshop</li>"],
        ["Oct 09, 2017", "laberrySite_preview.png", "Logo & Responsive Web Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],                    
        ["Sep 19, 2017", "dbliss_preview.png", "Website Design", "<li>#Photoshop</li>"],            
        ["Sep 13, 2017", "lobanakorea_preview.png", "Business Card Design", "<li>#Illustrator</li>"],                

        ["Jan 17, 2018", "apply_oil_preview.png", "Detail Page Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],    
        ["Jan 17, 2018", "laberry_cc_preview.png", "Detail Page Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],    
        ["Jan 17, 2018", "apply_rice_preview.png", "Detail Page Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],    
        ["Jan 17, 2018", "apply_pure_preview.png", "Detail Page Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],    
        /*["Jan 17, 2018", "apply_toneup_preview.png", "Detail Page Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],*/
        ["Jan 17, 2018", "apply_mayu_preview.png", "Detail Page Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],    
        /*["Jan 17, 2018", "apply_super_e_preview.png", "Detail Page Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],*/

        ["Jan 17, 2018", "eevoo_stick_blue_preview.png", "Detail Page Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],    
        /*["Jan 17, 2018", "eevoo_stick_green_preview.png", "Detail Page Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],*/
        /*["Jan 17, 2018", "eevoo_stick_yellow_preview.png", "Detail Page Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],*/          
        /*["Sep 12, 2017", "haenyeo_preview.png", "X Banner Design", "<li>#Photoshop</li> <li>#Illustrator</li>"],*/
        ["Sep 12, 2017", "daewoo_preview.png", "Business Card Design", "<li>#Illustrator</li>"],                              
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




    /*#work .wList_Show*/
    //#1. 배열 데이터를 구성한다.
    var $popup = [
        ["Origin", "origin_1.png", "2022년 1월", "<li>Responsive Web</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "더 나은 커리어를 위해 퍼블리싱 100% 작업한 반응형 사이트입니다.<br>몬드리안 레이아웃이 돋보이는 사이트이며, 레이아웃을 그리드로 구축하였습니다.<br>HTML, CSS, JAVASCRIPT를 활용하여 다양한 기능을 웹 표준에 맞게 반응형으로 구축하였습니다.<br>하단 링크를 통해 확인해 주세요.", `<a href="https://leejinheee.github.io/grid/">See the website</a>`, ``],
        ["PUMA", "puma_1.png", "2022년 1월", "<li>Responsive Web</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "더 나은 커리어를 위해 퍼블리싱 100% 작업한 반응형 사이트입니다.<br>스포츠 브랜드인 PUMA 사이트이며, 역동성을 극대화하기 위해 메인 배너에 영상을 배치하였습니다.<br>또한 다양한 기능을 웹 표준에 맞게 구축하였습니다.<br>하단 링크를 통해 확인해 주세요.", `<a href="https://leejinheee.github.io/puma_site/">See the website</a>`, ``],
        ["Natgeo", "natgeo_1.png", "2022년 1월", "<li>Website</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "더 나은 커리어를 위해 퍼블리싱 100% 작업한 웹사이트입니다.<br>National Geographic 사이트이며,<br>헤더에 있는 각 메뉴 클릭시 Lastest Stories로 내려오면서 내용이 바뀌는 부분은 Ajax로 구축하였습니다.<br>또한 다양한 기능을 웹 표준에 맞게 구축하였습니다.<br>하단 링크를 통해 확인해 주세요.", `<a href="https://leejinheee.github.io/nataeo_site/">See the website</a>`, ``],
        ["Wedding", "wedding_1.png", "2021년 8월", "<li>Website</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "더 나은 커리어를 위해 퍼블리싱 100% 작업한 웹사이트입니다.<br>wedding은 웨딩 패키지를 선사하는 기업입니다.<br>HTML, CSS, JAVASCRIPT를 활용하여 다양한 기능을 웹 표준에 맞게 구축하였습니다.<br>하단 링크를 통해 확인해 주세요.", `<a href="https://leejinheee.github.io/wedding/">See the website</a>`, ``],
        ["Boplay", "boplay_1.png", "2021년 8월", "<li>Responsive Web</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "더 나은 커리어를 위해 퍼블리싱 100% 작업한 반응형 사이트입니다.<br>B&O PLAY는 음악 시스템 일련의 제품으로 구성된 브랜드입니다.<br>HTML, CSS, JAVASCRIPT를 활용하여 다양한 기능을 웹 표준에 맞게 반응형으로 구축하였습니다.<br>하단 링크를 통해 확인해 주세요.", `<a href="https://leejinheee.github.io/boplay/index2.html">See the website</a>`, ``],
        ["Cashmere", "cashmere_1.png", "2021년 8월", "<li>Website</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "더 나은 커리어를 위해 퍼블리싱 100% 작업한 웹사이트입니다.<br>Cashmere는 캐시미어 전문 의류 브랜드 홈페이지입니다.<br>HTML, CSS, JAVASCRIPT를 활용하여 다양한 기능을 웹 표준에 맞게 구축하였습니다.<br>하단 링크를 통해 확인해 주세요.", `<a href="https://leejinheee.github.io/cashmere/index.html">See the website</a>`, ``],
        ["세종병원", "sejon_1.png", "2021년 7월", "<li>Website</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "더 나은 커리어를 위해 퍼블리싱 100% 작업한 웹사이트입니다.<br>세종병원은 병원 전문 홈페이지입니다.<br>HTML, CSS, JAVASCRIPT를 활용하여 다양한 기능을 웹 표준에 맞게 구축하였습니다.<br>하단 링크를 통해 확인해 주세요.", `<a href="https://leejinheee.github.io/sejonhospital/index.html">See the website</a>`, ``],
        ["Cakehouse", "cakehouse_1.png", "2021년 7월", "<li>Website</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "더 나은 커리어를 위해 퍼블리싱 100% 작업한 웹사이트입니다.<br>kage house는 베이커리 전문 쇼핑몰인 홈페이지입니다.<br>HTML, CSS, JAVASCRIPT를 활용하여 다양한 기능을 웹 표준에 맞게 구축하였습니다.<br>하단 링크를 통해 확인해 주세요.", `<a href="https://leejinheee.github.io/cakehouse02/">See the website</a>`, ``],
        ["Kuliner", "kuliner_1.png", "2021년 7월", "<li>responsive Web</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "더 나은 커리어를 위해 퍼블리싱 100% 작업한 웹사이트입니다.<br>kuliner는 덴마크 음식 전문 기업 홈페이지입니다.<br>HTML, CSS, JAVASCRIPT를 활용하여 다양한 기능을 웹 표준에 맞게 구축하였습니다.<br>하단 링크를 통해 확인해 주세요.", `<a href="https://leejinheee.github.io/kuliner/">See the website</a>`, ``],        

        ["Change24", "change_1.jpg", "2021년 4월", "<li>logo design</li> <li>responsive Web</li>", "Change24", "<li>design 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Illustrator</li>", "Change24에서는 간편하고 안전하게 BTC. ETH 암호화폐를 구매 및 판매를 대행해 드리는 사이트입니다.<br>이용이 어려우신 분들에게 콘텐츠를 정확히 전달하기 위해 불필요한 디자인을 최대한 배제하였으며 계산기 기능을 직관적이고 효율성 있도록 활용할 수 있게 메인 배너에 노출시켰습니다.<br>전반적으로 가독성을 높이며 사용법은 쉽고 명확하게 접할 수 있도록 제작하였습니다.<br>기획에 일부 참여하고 디자인 100% 진행하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/change_2.png">`],        
        ["Bottega", "bottega_1.png", "2020년 8월", "<li>menu design</li>", "Bottega", "<li>design 100%</li>", "<li>Illustrator</li>", "Bottega는 청담동 프리미엄 라운지바이며 바텐더들의 화려한 칵테일 쇼를 즐길 수 있는 공간입니다.<br>메뉴판은 원페이지로 제작하였으며 일러스트 라인 아트로 라운지바 분위기와 이질감 없게끔 어우러지게 더하는 작업을 하였습니다. 라운지바 내부 전체적인 톤이 어두워 밝은 색상의 톤을 이용하여 각 파트별로 카테고리를 한눈에 찾을 수 있도록 직관적인 메뉴판을 디자인하고자 노력하였습니다", `<a class="display_n">See the website</a>`, `<img src="./img/bottega_2.png">`],
       /* ["Bottega", "bottega_poster_1.png", "2020년 10월", "<li>Poster design</li>", "Bottega", "<li>design 100%</li>", "<li>Illustrator</li>", "삼성Polymide 글로벌 1위 기업 PI첨단소재는 끊임없는 연구와 최고 품질의 제품으로 보다 나은 삶의 만족과 미래를 제공합니다. 지속적인 사업구조 혁신과 신규용도 제품의 창의적 연구 개발을  바탕으로 글로벌 PI필름 시장에서 1위를 지키는 PI첨단소재의 웹/모바일 사이트 리뉴얼 프로젝트를  진행하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/bottega_poster_2.png">`],*/
        ["Allday247", "allday_1.png", "2021년 3월","<li>logo design</li> <li>responsive Web</li>", "Allday247", "<li>design 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Illustrator</li>", "Allday247에서는 간편하고 안전하게 BTC. ETH 암호화폐를 구매 및 판매를 대행해 드리는 사이트입니다.<br>이용이 어려우신 분들에게 콘텐츠를 정확히 전달하기 위해 불필요한 디자인을 최대한 배제하였으며 계산기 기능을 효율성 있도록 활용할 수 있게 우측 하단에 고정버튼으로 노출시켰습니다.<br>전반적으로 가독성을 높이며 사용법은 쉽고 명확하게 접할 수 있도록 제작하였습니다.<br>기획에 일부 참여하고 디자인 100% 진행하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/allday_2.png">`],
        ["Cryptocurrency", "purple_1.png", "2020년 4월", "<li>responsive Web</li>", "-", "<li>design 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Illustrator</li>", "간편하고 안전하게 암호화폐를 구매 및 판매를 대행해 드리는 사이트입니다.<br>거래를 어렵게 느끼시는 분들에게 보다 재미있는 구성 방식으로 임팩트 있는 디자인과<br>좀더 unique하고 차별화된 디자인으로 쉽고 명확하게 접할 수 있도록 제작하였습니다.<br>기획에 일부 참여하고 디자인 100% 진행하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/purple_2.png">`],
        ["Real estate", "realestate_1.png", "2020년 3월", "<li>responsive Web</li>", "-", "<li>design 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Illustrator</li>", "해외 부동산 시장 정보와 검색 플랫폼을 전문으로 제공하는 홈페이지를 제작하였습니다.<br>다양한 매물 및 새로운 소식을 강조하고 쉽게 접할 수 있도록 사용성을 높였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/realestate_2.png">`],
        ["사다리타기", "ladderEvt_1.png", "2019년 12월", "<li>Game UI</li>", "-", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "사다리게임 출석체크 이벤트입니다.<br>다양한 컨셉에 맞게 UI 디자인 작업을 진행했으며, 사용자의 이목을 집중시키기 위해 통통 튀는 컬러감을 사용하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/ladderEvt_2.png">`],
        ["World wide", "worldWide_1.png", "2019년 10월", "<li>logo design</li> <li>responsive Web</li>", "World wide", "<li>design 100%</li> ", "<li>Photoshop</li>", "해외 부동산 시장 정보와 검색 플랫폼을 전문으로 제공하는 홈페이지를 제작하였습니다.<br>다양한 매물 및 새로운 소식을 강조하고 쉽게 접할 수 있도록 사용성을 높였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/worldWide_2.png">`],
        ["Nuerepa", "nuerepa_1.png", "2019년 8월", "<li>responsive Web</li>", "Nuerepa", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "인류의 건강한 삶과 행복을 추구하는 의료기기 전문 기업입니다.<br>뉴레파 기업의 홈페이지와 뉴레파에서 운영중인 다양한 생활상품 전문인 쇼핑몰도 동시 진행하였습니다.<br>각 홈페이지에 쉽게 접근할 수 있도록 상단에 탭 기능을 노출시켜 직관적이며 접근성을 높였습니다<br>제품의 정보와 특징을 효과적으로 전달하기 위해 가독성있게 레이아웃을 기획하여 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/nuerepa_2.png">`],
        ["Max Matrix", "maxMatrix_1.png", "2019년 8월", "<li>responsive Web</li>", "Max Matrix", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "전 세계를 연결하는 디지털 금융 플랫폼이며 안전하고 빠르게 암호화폐를 거래할 수 있는 사이트입니다.<br>이용이 어려우신 분들에게 콘텐츠를 정확히 전달하기 위해 불필요한 디자인을 최대한 배재하여 가독성을 높이며 사용법은 쉽고 명확하게 접할 수 있도록 제작하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/maxMatrix_2.png">`],
        /*["Lobanakorea", "lobanakorea2_1.png", "2021년 3월", "<li>logo design</li> <li>responsive Web</li>", "SmartBC", "<li>design 100%</li> <li>publishing 100%</li> <li>script 100%</li>", "<li>XD</li> <li>HTML5</li> <li>CSS3</li> <li>Jquery</li>", "삼성Polymide 글로벌 1위 기업 PI첨단소재는 끊임없는 연구와 최고 품질의 제품으로 보다 나은 삶의 만족과 미래를 제공합니다. 지속적인 사업구조 혁신과 신규용도 제품의 창의적 연구 개발을  바탕으로 글로벌 PI필름 시장에서 1위를 지키는 PI첨단소재의 웹/모바일 사이트 리뉴얼 프로젝트를  진행하였습니다.", `<a href="http://jinhee.kr/nails">See the website</a>`, `<img src="./img/lobanakorea2_2.png">`],*/
        ["Happy Pet", "happyPet_1.png", "2018년 10월", "<li>logo design</li> <li>responsive Web</li>", "Happy Pet", "<li>design 100%</li>", "<li>Photoshop</li>", "해피펫숍은 애견용품, 애묘용품 전문 쇼핑몰인 홈페이지입니다.<br>다양한 페이지 구성과 통일감있는 비주얼의 시각화로 제작되었으며 하늘색 컬러를 포인트로 해피펫숍만의 편안하고 밝은 감성이 느껴지도록 작업하였습니다.<br>제품의 정보와 특징을 효과적으로 전달하기 위해 가독성있게 레이아웃을 기획하여 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/happyPet_2.png">`],        
        ["RINNAI", "rinnai_1.png", "2018년 7월", "<li>Website</li>", "RINNAI", "<li>design 100%</li>", "<li>Photoshop</li>", "설계부터 시공까지 최고의 디자인과 품질을 선사하는 린나이가구 사이트입니다.<br>다양한 정보와 특징을 효과적으로 전달되는 것을 목적으로 제작되었습니다.<br>린나이만의 소식을 접할 수 있도록 구성된 온라인 홍보채널로서의 역할을 다할 수 있도록 작업하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/rinnai_2.png">`],
        ["Laberry", "laberrySite_1.png", "2017년 10월", "<li>logo design</li> <li>responsive Web</li>", "Laberry", "<li>design 50%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "코스메틱 전문 브랜드인 라베리 홈페이지입니다.<br>다양한 제품 콘텐츠를 중점적으로 쉽고 명확하게 접할 수 있도록 구축되었습니다.<br>또한 라베리만의 아이덴티티와 톤앤매너를 활용하여 기업 이미지를 강화시키고자 하였습니다.", `<a href="http://www.laberrycos.com/">See the website</a>`, `<img src="./img/laberrySite_2.png">`],        
        ["Dbliss", "dbliss_1.png", "2017년 9월", "<li>Website</li>", "Dbliss", "<li>design 100%</li> <li>publishing 100%</li>", "<li>Photoshop</li>", "드레스 전문 멀티샵 디블리스 코리아 홈페이지입니다.<br>드레스들의 다양한 정보와 특징을 효과적으로 전달하기 위해 가독성 있게 제작되었습니다.<br>콘텐츠 그리고 디블리스의 기업 브랜드아이덴티티를 알리기 위한 목적이기도 합니다.", `<a href="http://dbliss.co.kr/">See the website</a>`, `<img src="./img/dbliss_2.png">`],        
        ["Lobanakorea", "lobanakorea_1.png", "2017년 9월", "<li>business card</li>", "Lobanakorea", "<li>design 80%</li>", "<li>Illustrator</li>", "로바나코리아의 명함, 사원증, 문패를 디자인하였습니다.<br>네이비의 단정한 컬러감을 메인으로 하여 신뢰감 있는 이미지를 주고자 하였으며<br>금박을 포인트로 적용하여 제작하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/lobanakorea_2.png">`],        

        ["Apply skin", "apply_oil_1.png", "2018년 1월", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문인 Apply Skin의 제품 상세페이지입니다.<br>제품만의 가진 생명력있는 특징과 정보에 중점을 두어 사용자들에게 가독성있게 전달하기 위해 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_oil_2.png">`],
        ["Apply skin", "laberry_cc_1.png", "2018년 1월", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문인 Apply Skin의 제품 상세페이지입니다.<br>제품만의 가진 생명력있는 특징과 정보에 중점을 두어 사용자들에게 가독성있게 전달하기 위해 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/laberry_cc_2.png">`],
        ["Apply skin", "apply_rice_1.png", "2018년 1월", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문인 Apply Skin의 제품 상세페이지입니다.<br>제품만의 가진 생명력있는 특징과 정보에 중점을 두어 사용자들에게 가독성있게 전달하기 위해 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_rice_2.png">`],
        ["Apply skin", "apply_pure_1.png", "2018년 1월", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문인 Apply Skin의 제품 상세페이지입니다.<br>제품만의 가진 생명력있는 특징과 정보에 중점을 두어 사용자들에게 가독성있게 전달하기 위해 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_pure_2.png">`],
        /*["Apply skin", "apply_toneup_1.png", "2018년 1월", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문인 Apply Skin의 제품 상세페이지입니다.<br>제품만의 가진 생명력있는 특징과 정보에 중점을 두어 사용자들에게 가독성있게 전달하기 위해 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_toneup_2.png">`],*/
        ["Apply skin", "apply_mayu_1.png", "2018년 1월", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문인 Apply Skin의 제품 상세페이지입니다.<br>제품만의 가진 생명력있는 특징과 정보에 중점을 두어 사용자들에게 가독성있게 전달하기 위해 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_mayu_2.png">`],
        /*["Apply skin", "apply_super_e_1.png", "2018년 1월", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문인 Apply Skin의 제품 상세페이지입니다.<br>제품만의 가진 생명력있는 특징과 정보에 중점을 두어 사용자들에게 가독성있게 전달하기 위해 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_super_e_2.png">`],*/

        ["eevoo", "eevoo_stick_blue_1.png", "2018년 1월", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문 eevoo의 스틱 제품 3종 상세페이지입니다.<br>제품만의 가진 생명력있는 특징과 정보에 중점을 두어 사용자들에게 가독성있게 전달하기 위해 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/eevoo_stick_blue_2.png">`],
        /*["eevoo", "eevoo_stick_green_1.png", "2018년 1월", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문인 eevoo의 스틱 제품 상세페이지입니다.<br>제품만의 가진 생명력있는 특징과 정보에 중점을 두어 사용자들에게 가독성있게 전달하기 위해 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/eevoo_stick_green_2.png">`],*/
        /*["eevoo", "eevoo_stick_yellow_1.png", "2018년 1월", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry에서 운영중인 화장품 전문인 eevoo의 스틱 제품 상세페이지입니다.<br>제품만의 가진 생명력있는 특징과 정보에 중점을 두어 사용자들에게 가독성있게 전달하기 위해 제작되었습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/eevoo_stick_yellow_2.png">`],*/                        
        /*["해녀물회", "haenyeo_1.png", "2017년 9월", "<li>X Banner design</li>", "미슬토 해녀물회", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "미슬토 해녀물회의 X배너 입니다.<br>메뉴 홍보에 초점을 두어, 전체적인 배너에 홍보의 목적이 드러날 수 있도록 디자인 하였습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/haenyeo_2.png">`],                                */
        ["Daewoo4", "daewoo_1.png", "2017년 9월", "<li>business card</li>", "Daewoo4", "<li>design 80%</li>", "<li>Illustrator</li>", "다음넷의 명함을 디자인하였습니다.<br>콘텐츠가 많은만큼 레이아웃은 불필요한 요소를 최대한 배재하여 가독성을 높였습니다.<br>심플하고 세련된 도형을 활용하였고 밝지만 차분한 컬러를 사용해 깨끗하고 편안한 느낌을 주도록 했습니다.", `<a class="display_n">See the website</a>`, `<img src="./img/daewoo_2.png">`],                
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


});