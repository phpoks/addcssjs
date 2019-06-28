$(function(){
	setTimeout(function(){
		var dl = $("#_quick_insert").find('dl');
		var dd = dl.find('dd');
		dd.each(function(index,item){
			$(this).click(function(){
				setTimeout(function(){
					_update_select_add()
				},20)
			})
		})
	},200)
})