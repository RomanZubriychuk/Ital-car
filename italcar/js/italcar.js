jQuery(document).ready(function($) {
	// jQuery link to order views table.
    $("#block-block-25 span").replaceWith(function(){
		var $class = $(this).attr('class');
		var $title = $(this).attr('title');
		var $text = $(this).html();
        var $link = $("<a/>").attr({"href": $class, "title": $title}).html($text);	
		return $link;
    });
});