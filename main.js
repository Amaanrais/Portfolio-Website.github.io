$(document).ready(function(){
  
    $('.buttons').click(function(){
        var filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.filter-image').show();
        }else{
            $('.filter-image').not('.'+filter).hide();
            $('.filter-image').filter('.'+filter).show();
        }

        $(this).addClass('active').siblings().removeClass('active');
    });

});
  