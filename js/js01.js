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
$(window).scroll(function () {
    var winSt = $(window).scrollTop();
    // console.log(topV - winSt);
    if (topV - winSt < 746) {
        $('.h-c-bar').delay(300).animate({
            'width': 79.9 + '%'
        }, 3200);
        $('.js-bar').delay(300).animate({
            'width': 67 + '%'
        }, 2680);
        $('.java-bar').delay(300).animate({
            'width': 84 + '%'
        }, 3360);
        $('.sql-bar').delay(300).animate({
            'width': 85 + '%'
        }, 3400);
    }
});