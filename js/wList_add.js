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
                    <div class="point">???</div>
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
    //#1. ?????? ???????????? ????????????.
    var $popup = [
        ["Origin", "origin_1.png", "2022??? 1???", "<li>Responsive Web</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "??? ?????? ???????????? ?????? ???????????? 100% ????????? ????????? ??????????????????.<br>???????????? ??????????????? ???????????? ???????????????, ??????????????? ???????????? ?????????????????????.<br>HTML, CSS, JAVASCRIPT??? ???????????? ????????? ????????? ??? ????????? ?????? ??????????????? ?????????????????????.<br>?????? ????????? ?????? ????????? ?????????.", `<a href="https://leejinheee.github.io/grid/">See the website</a>`, ``],
        ["PUMA", "puma_1.png", "2022??? 1???", "<li>Responsive Web</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "??? ?????? ???????????? ?????? ???????????? 100% ????????? ????????? ??????????????????.<br>????????? ???????????? PUMA ???????????????, ???????????? ??????????????? ?????? ?????? ????????? ????????? ?????????????????????.<br>?????? ????????? ????????? ??? ????????? ?????? ?????????????????????.<br>?????? ????????? ?????? ????????? ?????????.", `<a href="https://leejinheee.github.io/puma_site/">See the website</a>`, ``],
        ["Natgeo", "natgeo_1.png", "2022??? 1???", "<li>Website</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "??? ?????? ???????????? ?????? ???????????? 100% ????????? ?????????????????????.<br>National Geographic ???????????????,<br>????????? ?????? ??? ?????? ????????? Lastest Stories??? ??????????????? ????????? ????????? ????????? Ajax??? ?????????????????????.<br>?????? ????????? ????????? ??? ????????? ?????? ?????????????????????.<br>?????? ????????? ?????? ????????? ?????????.", `<a href="https://leejinheee.github.io/nataeo_site/">See the website</a>`, ``],
        ["Wedding", "wedding_1.png", "2021??? 8???", "<li>Website</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "??? ?????? ???????????? ?????? ???????????? 100% ????????? ?????????????????????.<br>wedding??? ?????? ???????????? ???????????? ???????????????.<br>HTML, CSS, JAVASCRIPT??? ???????????? ????????? ????????? ??? ????????? ?????? ?????????????????????.<br>?????? ????????? ?????? ????????? ?????????.", `<a href="https://leejinheee.github.io/wedding/">See the website</a>`, ``],
        ["Boplay", "boplay_1.png", "2021??? 8???", "<li>Responsive Web</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "??? ?????? ???????????? ?????? ???????????? 100% ????????? ????????? ??????????????????.<br>B&O PLAY??? ?????? ????????? ????????? ???????????? ????????? ??????????????????.<br>HTML, CSS, JAVASCRIPT??? ???????????? ????????? ????????? ??? ????????? ?????? ??????????????? ?????????????????????.<br>?????? ????????? ?????? ????????? ?????????.", `<a href="https://leejinheee.github.io/boplay/index2.html">See the website</a>`, ``],
        ["Cashmere", "cashmere_1.png", "2021??? 8???", "<li>Website</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "??? ?????? ???????????? ?????? ???????????? 100% ????????? ?????????????????????.<br>Cashmere??? ???????????? ?????? ?????? ????????? ?????????????????????.<br>HTML, CSS, JAVASCRIPT??? ???????????? ????????? ????????? ??? ????????? ?????? ?????????????????????.<br>?????? ????????? ?????? ????????? ?????????.", `<a href="https://leejinheee.github.io/cashmere/index.html">See the website</a>`, ``],
        ["????????????", "sejon_1.png", "2021??? 7???", "<li>Website</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "??? ?????? ???????????? ?????? ???????????? 100% ????????? ?????????????????????.<br>??????????????? ?????? ?????? ?????????????????????.<br>HTML, CSS, JAVASCRIPT??? ???????????? ????????? ????????? ??? ????????? ?????? ?????????????????????.<br>?????? ????????? ?????? ????????? ?????????.", `<a href="https://leejinheee.github.io/sejonhospital/index.html">See the website</a>`, ``],
        ["Cakehouse", "cakehouse_1.png", "2021??? 7???", "<li>Website</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "??? ?????? ???????????? ?????? ???????????? 100% ????????? ?????????????????????.<br>kage house??? ???????????? ?????? ???????????? ?????????????????????.<br>HTML, CSS, JAVASCRIPT??? ???????????? ????????? ????????? ??? ????????? ?????? ?????????????????????.<br>?????? ????????? ?????? ????????? ?????????.", `<a href="https://leejinheee.github.io/cakehouse02/">See the website</a>`, ``],
        ["Kuliner", "kuliner_1.png", "2021??? 7???", "<li>responsive Web</li>", "-", "<li>publishing 100%</li> <li>script 100%</li>", "<li>Visual Studio Code</li>", "??? ?????? ???????????? ?????? ???????????? 100% ????????? ?????????????????????.<br>kuliner??? ????????? ?????? ?????? ?????? ?????????????????????.<br>HTML, CSS, JAVASCRIPT??? ???????????? ????????? ????????? ??? ????????? ?????? ?????????????????????.<br>?????? ????????? ?????? ????????? ?????????.", `<a href="https://leejinheee.github.io/kuliner/">See the website</a>`, ``],        

        ["Change24", "change_1.jpg", "2021??? 4???", "<li>logo design</li> <li>responsive Web</li>", "Change24", "<li>design 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Illustrator</li>", "Change24????????? ???????????? ???????????? BTC. ETH ??????????????? ?????? ??? ????????? ????????? ????????? ??????????????????.<br>????????? ???????????? ???????????? ???????????? ????????? ???????????? ?????? ???????????? ???????????? ????????? ?????????????????? ????????? ????????? ??????????????? ????????? ????????? ????????? ??? ?????? ?????? ????????? ?????????????????????.<br>??????????????? ???????????? ????????? ???????????? ?????? ???????????? ?????? ??? ????????? ?????????????????????.<br>????????? ?????? ???????????? ????????? 100% ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/change_2.png">`],        
        ["Bottega", "bottega_1.png", "2020??? 8???", "<li>menu design</li>", "Bottega", "<li>design 100%</li>", "<li>Illustrator</li>", "Bottega??? ????????? ???????????? ?????????????????? ??????????????? ????????? ????????? ?????? ?????? ??? ?????? ???????????????.<br>???????????? ??????????????? ?????????????????? ???????????? ?????? ????????? ???????????? ???????????? ????????? ????????? ??????????????? ????????? ????????? ???????????????. ???????????? ?????? ???????????? ?????? ????????? ?????? ????????? ?????? ???????????? ??? ???????????? ??????????????? ????????? ?????? ??? ????????? ???????????? ???????????? ?????????????????? ?????????????????????", `<a class="display_n">See the website</a>`, `<img src="./img/bottega_2.png">`],
       /* ["Bottega", "bottega_poster_1.png", "2020??? 10???", "<li>Poster design</li>", "Bottega", "<li>design 100%</li>", "<li>Illustrator</li>", "??????Polymide ????????? 1??? ?????? PI??????????????? ???????????? ????????? ?????? ????????? ???????????? ?????? ?????? ?????? ????????? ????????? ???????????????. ???????????? ???????????? ????????? ???????????? ????????? ????????? ?????? ?????????  ???????????? ????????? PI?????? ???????????? 1?????? ????????? PI??????????????? ???/????????? ????????? ????????? ???????????????  ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/bottega_poster_2.png">`],*/
        ["Allday247", "allday_1.png", "2021??? 3???","<li>logo design</li> <li>responsive Web</li>", "Allday247", "<li>design 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Illustrator</li>", "Allday247????????? ???????????? ???????????? BTC. ETH ??????????????? ?????? ??? ????????? ????????? ????????? ??????????????????.<br>????????? ???????????? ???????????? ???????????? ????????? ???????????? ?????? ???????????? ???????????? ????????? ?????????????????? ????????? ????????? ????????? ????????? ????????? ??? ?????? ?????? ????????? ?????????????????? ?????????????????????.<br>??????????????? ???????????? ????????? ???????????? ?????? ???????????? ?????? ??? ????????? ?????????????????????.<br>????????? ?????? ???????????? ????????? 100% ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/allday_2.png">`],
        ["Cryptocurrency", "purple_1.png", "2020??? 4???", "<li>responsive Web</li>", "-", "<li>design 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Illustrator</li>", "???????????? ???????????? ??????????????? ?????? ??? ????????? ????????? ????????? ??????????????????.<br>????????? ????????? ???????????? ???????????? ?????? ???????????? ?????? ???????????? ????????? ?????? ????????????<br>?????? unique?????? ???????????? ??????????????? ?????? ???????????? ?????? ??? ????????? ?????????????????????.<br>????????? ?????? ???????????? ????????? 100% ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/purple_2.png">`],
        ["Real estate", "realestate_1.png", "2020??? 3???", "<li>responsive Web</li>", "-", "<li>design 100%</li>", "<li>XD</li> <li>Photoshop</li> <li>Illustrator</li>", "?????? ????????? ?????? ????????? ?????? ???????????? ???????????? ???????????? ??????????????? ?????????????????????.<br>????????? ?????? ??? ????????? ????????? ???????????? ?????? ?????? ??? ????????? ???????????? ???????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/realestate_2.png">`],
        ["???????????????", "ladderEvt_1.png", "2019??? 12???", "<li>Game UI</li>", "-", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "??????????????? ???????????? ??????????????????.<br>????????? ????????? ?????? UI ????????? ????????? ???????????????, ???????????? ????????? ??????????????? ?????? ?????? ?????? ???????????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/ladderEvt_2.png">`],
        ["World wide", "worldWide_1.png", "2019??? 10???", "<li>logo design</li> <li>responsive Web</li>", "World wide", "<li>design 100%</li> ", "<li>Photoshop</li>", "?????? ????????? ?????? ????????? ?????? ???????????? ???????????? ???????????? ??????????????? ?????????????????????.<br>????????? ?????? ??? ????????? ????????? ???????????? ?????? ?????? ??? ????????? ???????????? ???????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/worldWide_2.png">`],
        ["Nuerepa", "nuerepa_1.png", "2019??? 8???", "<li>responsive Web</li>", "Nuerepa", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "????????? ????????? ?????? ????????? ???????????? ???????????? ?????? ???????????????.<br>????????? ????????? ??????????????? ??????????????? ???????????? ????????? ???????????? ????????? ???????????? ?????? ?????????????????????.<br>??? ??????????????? ?????? ????????? ??? ????????? ????????? ??? ????????? ???????????? ??????????????? ???????????? ???????????????<br>????????? ????????? ????????? ??????????????? ???????????? ?????? ??????????????? ??????????????? ???????????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/nuerepa_2.png">`],
        ["Max Matrix", "maxMatrix_1.png", "2019??? 8???", "<li>responsive Web</li>", "Max Matrix", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "??? ????????? ???????????? ????????? ?????? ??????????????? ???????????? ????????? ??????????????? ????????? ??? ?????? ??????????????????.<br>????????? ???????????? ???????????? ???????????? ????????? ???????????? ?????? ???????????? ???????????? ????????? ???????????? ???????????? ????????? ???????????? ?????? ???????????? ?????? ??? ????????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/maxMatrix_2.png">`],
        /*["Lobanakorea", "lobanakorea2_1.png", "2021??? 3???", "<li>logo design</li> <li>responsive Web</li>", "SmartBC", "<li>design 100%</li> <li>publishing 100%</li> <li>script 100%</li>", "<li>XD</li> <li>HTML5</li> <li>CSS3</li> <li>Jquery</li>", "??????Polymide ????????? 1??? ?????? PI??????????????? ???????????? ????????? ?????? ????????? ???????????? ?????? ?????? ?????? ????????? ????????? ???????????????. ???????????? ???????????? ????????? ???????????? ????????? ????????? ?????? ?????????  ???????????? ????????? PI?????? ???????????? 1?????? ????????? PI??????????????? ???/????????? ????????? ????????? ???????????????  ?????????????????????.", `<a href="http://jinhee.kr/nails">See the website</a>`, `<img src="./img/lobanakorea2_2.png">`],*/
        ["Happy Pet", "happyPet_1.png", "2018??? 10???", "<li>logo design</li> <li>responsive Web</li>", "Happy Pet", "<li>design 100%</li>", "<li>Photoshop</li>", "??????????????? ????????????, ???????????? ?????? ???????????? ?????????????????????.<br>????????? ????????? ????????? ??????????????? ???????????? ???????????? ?????????????????? ????????? ????????? ???????????? ?????????????????? ???????????? ?????? ????????? ??????????????? ?????????????????????.<br>????????? ????????? ????????? ??????????????? ???????????? ?????? ??????????????? ??????????????? ???????????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/happyPet_2.png">`],        
        ["RINNAI", "rinnai_1.png", "2018??? 7???", "<li>Website</li>", "RINNAI", "<li>design 100%</li>", "<li>Photoshop</li>", "???????????? ???????????? ????????? ???????????? ????????? ???????????? ??????????????? ??????????????????.<br>????????? ????????? ????????? ??????????????? ???????????? ?????? ???????????? ?????????????????????.<br>??????????????? ????????? ?????? ??? ????????? ????????? ????????? ????????????????????? ????????? ?????? ??? ????????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/rinnai_2.png">`],
        ["Laberry", "laberrySite_1.png", "2017??? 10???", "<li>logo design</li> <li>responsive Web</li>", "Laberry", "<li>design 50%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "???????????? ?????? ???????????? ????????? ?????????????????????.<br>????????? ?????? ???????????? ??????????????? ?????? ???????????? ?????? ??? ????????? ?????????????????????.<br>?????? ??????????????? ?????????????????? ??????????????? ???????????? ?????? ???????????? ?????????????????? ???????????????.", `<a href="http://www.laberrycos.com/">See the website</a>`, `<img src="./img/laberrySite_2.png">`],        
        ["Dbliss", "dbliss_1.png", "2017??? 9???", "<li>Website</li>", "Dbliss", "<li>design 100%</li> <li>publishing 100%</li>", "<li>Photoshop</li>", "????????? ?????? ????????? ???????????? ????????? ?????????????????????.<br>??????????????? ????????? ????????? ????????? ??????????????? ???????????? ?????? ????????? ?????? ?????????????????????.<br>????????? ????????? ??????????????? ?????? ??????????????????????????? ????????? ?????? ??????????????? ?????????.", `<a href="http://dbliss.co.kr/">See the website</a>`, `<img src="./img/dbliss_2.png">`],        
        ["Lobanakorea", "lobanakorea_1.png", "2017??? 9???", "<li>business card</li>", "Lobanakorea", "<li>design 80%</li>", "<li>Illustrator</li>", "????????????????????? ??????, ?????????, ????????? ????????????????????????.<br>???????????? ????????? ???????????? ???????????? ?????? ????????? ?????? ???????????? ????????? ????????????<br>????????? ???????????? ???????????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/lobanakorea_2.png">`],        

        ["Apply skin", "apply_oil_1.png", "2018??? 1???", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry?????? ???????????? ????????? ????????? Apply Skin??? ?????? ????????????????????????.<br>???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_oil_2.png">`],
        ["Apply skin", "laberry_cc_1.png", "2018??? 1???", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry?????? ???????????? ????????? ????????? Apply Skin??? ?????? ????????????????????????.<br>???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/laberry_cc_2.png">`],
        ["Apply skin", "apply_rice_1.png", "2018??? 1???", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry?????? ???????????? ????????? ????????? Apply Skin??? ?????? ????????????????????????.<br>???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_rice_2.png">`],
        ["Apply skin", "apply_pure_1.png", "2018??? 1???", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry?????? ???????????? ????????? ????????? Apply Skin??? ?????? ????????????????????????.<br>???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_pure_2.png">`],
        /*["Apply skin", "apply_toneup_1.png", "2018??? 1???", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry?????? ???????????? ????????? ????????? Apply Skin??? ?????? ????????????????????????.<br>???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_toneup_2.png">`],*/
        ["Apply skin", "apply_mayu_1.png", "2018??? 1???", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry?????? ???????????? ????????? ????????? Apply Skin??? ?????? ????????????????????????.<br>???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_mayu_2.png">`],
        /*["Apply skin", "apply_super_e_1.png", "2018??? 1???", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry?????? ???????????? ????????? ????????? Apply Skin??? ?????? ????????????????????????.<br>???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/apply_super_e_2.png">`],*/

        ["eevoo", "eevoo_stick_blue_1.png", "2018??? 1???", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry?????? ???????????? ????????? ?????? eevoo??? ?????? ?????? 3??? ????????????????????????.<br>???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/eevoo_stick_blue_2.png">`],
        /*["eevoo", "eevoo_stick_green_1.png", "2018??? 1???", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry?????? ???????????? ????????? ????????? eevoo??? ?????? ?????? ????????????????????????.<br>???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/eevoo_stick_green_2.png">`],*/
        /*["eevoo", "eevoo_stick_yellow_1.png", "2018??? 1???", "<li>detail page</li>", "Laberry", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "Laberry?????? ???????????? ????????? ????????? eevoo??? ?????? ?????? ????????????????????????.<br>???????????? ?????? ??????????????? ????????? ????????? ????????? ?????? ?????????????????? ??????????????? ???????????? ?????? ?????????????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/eevoo_stick_yellow_2.png">`],*/                        
        /*["????????????", "haenyeo_1.png", "2017??? 9???", "<li>X Banner design</li>", "????????? ????????????", "<li>design 100%</li>", "<li>Photoshop</li> <li>Illustrator</li>", "????????? ??????????????? X?????? ?????????.<br>?????? ????????? ????????? ??????, ???????????? ????????? ????????? ????????? ????????? ??? ????????? ????????? ???????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/haenyeo_2.png">`],                                */
        ["Daewoo4", "daewoo_1.png", "2017??? 9???", "<li>business card</li>", "Daewoo4", "<li>design 80%</li>", "<li>Illustrator</li>", "???????????? ????????? ????????????????????????.<br>???????????? ???????????? ??????????????? ???????????? ????????? ????????? ???????????? ???????????? ???????????????.<br>???????????? ????????? ????????? ??????????????? ????????? ????????? ????????? ????????? ???????????? ????????? ????????? ????????? ????????????.", `<a class="display_n">See the website</a>`, `<img src="./img/daewoo_2.png">`],                
    ];

    //#2. ???????????? ??????
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

    //#3. ??? ?????? ????????? ?????????
    $("#work .wList .box").click(function(){
        const $active = $("#work .wList_Show").hasClass("active");
        const $click_index = $(this).index();
        console.log($click_index);
        
        $("#work .wList_Show").eq($click_index).addClass("active");              
        $("body").addClass("active");
    });

    //#4. ?????? ?????? ??????
    $("#work .wList_Show .close").click(function(){
        $("#work .wList_Show").removeClass("active");
        $("body").removeClass("active"); 
    }); 
    
    //#5. a?????? _blank ??????
    $('#work .col.three a').attr('target', '_blank');


});