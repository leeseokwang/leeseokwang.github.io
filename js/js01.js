function git_btn() {
    window.open('about:blank').location.href='https://github.com/leeseokwang';
}

window.addEventListener('scroll', function() {
    if(window.scrollY > 500){
        document.getElementById('navi').style.backgroundColor='black';
        document.getElementById('navi').style.color='#fff';
        const bd_items1 = document.querySelectorAll('.border');
        for(var i = 0; i < bd_items1.length; i++){
            var bd_item1 = bd_items1.item(i);
            bd_item1.style.backgroundColor='white';
        }
    } else {
        document.getElementById('navi').style.backgroundColor='lightsteelblue';
        document.getElementById('navi').style.color='#333';
        const bd_items2 = document.querySelectorAll('.border');
        for(var i = 0; i < bd_items2.length; i++){
            var bd_item2 = bd_items2.item(i);
            bd_item2.style.backgroundColor='black';
        }
    }
});

var topV = $('#page2').offset().top;
window.addEventListener('scroll', function() {
    var winSt = $(window).scrollTop();
    // console.log("topV : "+topV);
    // console.log("winSt : "+winSt);
    if (topV - winSt < 500) {
        $('.h-c-bar').delay(300).animate({
            'width': 79.9 + '%'
        }, 3200);
        $('.js-bar').delay(300).animate({
            'width': 74 + '%'
        }, 2680);
        $('.react-bar').delay(300).animate({
            'width': 77 + '%'
        }, 2680);
        $('.java-bar').delay(300).animate({
            'width': 83 + '%'
        }, 3320);
        $('.sql-bar').delay(300).animate({
            'width': 87 + '%'
        }, 3480);
        $('.spring-bar').delay(300).animate({
            'width': 80 + '%'
        }, 3200);
    }
});