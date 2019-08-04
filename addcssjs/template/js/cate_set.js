	// console.log($('input[value="有道翻译"]'))
	// 	$(window).keydown(function(event){
	// 		if(event.keyCode==36) {
	// 			$('input[value="有道翻译"]').click()
	// 		}
			
	// 	})

	// 	document.onkeydown=function(event){
	// 	             var e = event || window.event || arguments.callee.caller.arguments[0];
	// 	             if(e && e.keyCode==27){ // 按 Esc 
	// 	                 //要做的事情
	// 	               }
	// 	             if(e && e.keyCode==113){ // 按 F2 
	// 	                  //要做的事情
	// 	                }            
	// 	              if(e && e.keyCode==13){ // enter 键
	// 	                  //要做的事情
	// 	             }
	// 	         }; 

/* project_content里的点击字段自动添加功能 (有改动) */

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
		/* js/ext/banner.js */
	},200);

})