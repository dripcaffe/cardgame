/* const targetElement = document.querySelectorAll(".top_view"); */
var targetElement = document.getElementById( "text" ) ;
console.log("targetElement",targetElement);
console.log("画面の高さ",window.innerHeight)
console.log("targetElement.length",targetElement.length);
document.addEventListener("scroll",function(){

        console.log("横スクロール：" + window.scrollX);
		console.log("縦スクロール：" + window.scrollY);
        /* getBoundingClientRect().top */
        /* ブラウザ画面に対する要素の位置　上端のｙ座標*/

        /* getBoundingClientRect().top */
        /* clientHeight*/
        const getElementDistance = 
        targetElement.getBoundingClientRect().top + 
        targetElement.clientHeight*.6


        if(window.innerHeight > getElementDistance){
            console.log("")
            console.log("番目の要素がAct")
            console.log("")
            console.log("画面の高さ",window.innerHeight)
            console.log("変数",getElementDistance)
            targetElement.classList.add("show");
        }
        console.log("要素の上端のｙ座標",targetElement.getBoundingClientRect().top)
        console.log("要素の縦幅",targetElement.clientHeight*.6)
        console.log("縦"+targetElement.clientHeight+""+"横"+targetElement.clientWidth)
        console.log("加算",targetElement.getBoundingClientRect().top+targetElement.clientHeight*.6)
        console.log("")
    
})
