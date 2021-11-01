var $ = jQuery.noConflict()
$(document).on('dragenter','.dropFiles',function(e){
    $(this).parents('.graghightlight').addClass('entered');
})
$(document).on('dragleave','.dropFiles',function(e){
    $(this).parents('.graghightlight').removeClass('entered');
})
// Move
$(document).on('click','.dropFiles',function () { 
    $(this).prop('disabled', true);
    // $('.dropFiles').prop('disabled', true);
})  
  
$(document).on('drop','.dropFiles',function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    $(this).parents('.graghightlight').removeClass('entered');
    if(ev.originalEvent.dataTransfer){
        var droppedFiles = ev.originalEvent.dataTransfer.files;
        if(droppedFiles[0].name){
            $(this).next().attr('src',`./images/${droppedFiles[0].name}`);
        }
    }
    return false;
})

$(".dropFiles").on('dragover', function(ev) {
    ev.preventDefault();
});

// Move and resize
grid_size = 10;

$(".graghightlight ")
    .draggable({ grid: [ grid_size, grid_size ] })
    .resizable({ grid: grid_size * 2 })
	.on("mouseover", function(){
      	$( this ).addClass("move-cursor")
	})
    .on("mousedown", function(){
  	    $( this )
            .removeClass("move-cursor")
            .addClass("grab-cursor")
            .addClass("opac");
	})
    .on("mouseup", function(){
        $('.dropFiles').prop('disabled', true);
        $( this )
        .removeClass("grab-cursor")
        .removeClass("opac")
        .addClass("move-cursor");
    });