$(function(){
	setTimeout(function(){
		var dl = $("#_tmp_select_add").next().find('dl');
		var dd = dl.find('dd');
		dd.each(function(index,item){
			$(this).click(function(){
				setTimeout(function(){
					$('input[value="快速添加"]').click()
				},20)
			})
		})
		/* 自动判断有没有banner字段,没有则自动创建 */
		var itemList = $("#post_save .layui-card").find('.layui-card-body').eq(0).find('.layui-form-item');
		var banner = itemList.find('#banner');
		if (!banner.length) {
			itemList.find('dd[lay-value="banner"]').click()
		} else {
			console.log('banner存在--测试使用')
		}
	},200);

})