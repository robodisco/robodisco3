var IndexLikeButton = {
     initialize : function() {
        $('input.favourite_toggle').hide();
        $('input.favourite_toggle').click( IndexLikeButton.toggle );
        $('li').hover( function() { $(this).find(".favourite_toggle").toggle() } );
     },

     toggle : function(){
        var $button_form = $(this).parents("form.button_to");
        var albumId     = $(this).attr("id");
        var $this = $(this);
        //$.post( $button_form.attr('action'), { id : albumId }, null, "script" );
        $.post( $button_form.attr('action'), { id : albumId }, function(data){
            IndexLikeButton.update(data, $this);
        });
        return false;
     },

     //callback for toggle request.
     //determines if album was liked or unliked and updates button
     //If liked moves the album to users liked list
     update : function(albumSaved, $button){
         if (albumSaved == true){
             $button.attr("value", "Unlike").toggleClass("like").toggleClass("liked");
             $button.parents("li").slideUp("slow", function(){
                $(this).hide().appendTo("#user_favourites ul").show("slow");
             });
         } else {
             $button.attr("value", "Like").toggleClass("like").toggleClass("liked");
             $button.parents("li").slideUp("slow", function(){
                 $(this).remove();
             });
         }
     }
};



$(function(){
    IndexLikeButton.initialize();
});
