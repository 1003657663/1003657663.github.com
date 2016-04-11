var navigatorLi;
var navigatorPanel;
var skip, main, allskip, photoskip, infoskip;
var infoLi;

setBackMargin();

function setBackMargin() {
    $(".bottom-div").css("margin","100px 0 0 0");
    if (document.body.offsetWidth > 750) {
        $(".bottom-div .bottom-img-div").each(function(index,element){
            element.style.width = '163px';
            element.style.height = '100px';
        });
        console.info(">750");
    } else {
        $(".bottom-div .bottom-img-div").each(function(index,element){
            element.style.width = '98px';
            element.style.height = '60px';
        });
    }
    document.getElementsByClassName("back").item(0).style.marginTop = document.body.offsetHeight * 0.4 + "px";

    var width = $(".bottom-div").width();
    var imgWidth = $(".bottom-img-div img").eq(0).width();
    var toMargin = (width - imgWidth * 4) / 3;
    $(".bottom-div .bottom-img-div").each(function (index, element) {
        if (index != 0) {
            element.style.marginLeft = toMargin + 'px';
        }
    });
}