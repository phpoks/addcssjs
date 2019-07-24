$(function(){
	setTimeout(function(){
		var dd = $("#_quick_insert dl").find('dd');
		dd.each(function(index,item){
			$(this).click(function(){
				setTimeout(function(){
					_update_select_add()
				},20)
			})
		})
	},200)
})