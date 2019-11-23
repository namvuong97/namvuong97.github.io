$(function(){
            
    $('.slide-container').each(function(){

        var displayslide = 0;
          
        var $slider = $(this).find('.slide-item');
        var $parent = $(this);
        var $next = $parent.find(".slide-next");
        var $prev = $parent.find(".slide-prev");

        function slide() {
            var item = $slider.eq(displayslide);
            $slider.hide();
            item.css("display", "inline-block");
        }
        slide();
        function next() {
        displayslide =  displayslide + 1;

        if(displayslide > $slider.length -1)  {
               displayslide = 0;
        }
           slide();
        }

        function prev(){
        displayslide =displayslide - 1;

        if(displayslide < 0)  {                        
            displayslide = $slider.length -1;
            }
               slide();               
            }

        $next.on("click", next);
        $prev.on("click", prev);
    });
});