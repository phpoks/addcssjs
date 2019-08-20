$(function(){
	setTimeout(function(){
		console.log('D:/phpStudy/WWW/weizhu/plugins/addcssjs/template/js/project_content.js')
		var dd = $("#_quick_insert dl").find('dd');
		console.log(dd)
		dd.each(function(index,item){
			$(this).click(function(){
				setTimeout(function(){
					_update_select_add()
					console.log('D:/phpStudy/WWW/weizhu/plugins/addcssjs/template/js/project_content.js')
				},20)
			})
		})
	},200)
})