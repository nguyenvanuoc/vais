

$(document).ready(function(){
    var screenW= window.innerWidth;
    if(screenW > 991){
        $(".header .nav-toggle").click(function(){
            $("body").toggleClass("sidebar-collapsed");
        });
    }else{
        $(".header .nav-toggle").click(function(){
            $(".sidebar").toggleClass("show");
            $(".overlay-common").toggleClass("show");
        });
    }
    $(".overlay-common").click(function(){
        $(".sidebar").removeClass("show");
        $(this).removeClass("show");
    });
    $(".select2").select2();
    
});
document.addEventListener("DOMContentLoaded", function() {
  const containers = document.querySelectorAll('.ps-scrollbar');
    
    // Lặp qua từng phần tử và khởi tạo Perfect Scrollbar
    containers.forEach(container => {
      // Thêm class CSS nếu cần
      // Khởi tạo Perfect Scrollbar cho từng phần tử
      new PerfectScrollbar(container);
      
    });
});