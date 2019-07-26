$(function(){
	var parent = $("#ele_param");
	var list_param = $("#list_param");
	var del_input = list_param.find('.layui-btn-danger');
	var allInput = list_param.find('input[type="text"]');
	var group = (allInput.length)/2;

	var add_param_num = parent.next('input[value="添加属性"]');
	add_param_num.on("click",function(){
		del_input = list_param.find('.layui-btn-danger');

			for (var i = 0; i < del_input.length; i++) {
				del_input[i].addEventListener("click",function(){
					allInput = list_param.find('input[type="text"]')
					group = (allInput.length)/2;
					$('small').html(group)
				})
				
			}


		allInput = list_param.find('input[type="text"]')
		group = (allInput.length)/2;
		$('small').html(group)
	})

	
	for (var i = 0; i < del_input.length; i++) {
		del_input[i].addEventListener("click",function(){
			del_input = list_param.find('.layui-btn-danger');
			allInput = list_param.find('input[type="text"]')
			group = (allInput.length)/2;
			$('small').html(group); //删除点击时减1
		})
		
	}

	if (parent.length) {
		var html = '<input type="button" value="粘贴分割" class="layui-btn layui-btn-sm" id="alert_text">';
		parent.parent().append(html)
	}

	$("#alert_text").click(function(){



		
		var html = '<textarea id="text" class="layui-textarea" style=";width:100%;height:80px" placeholder="请Ctrl+v符合规则的参数"></textarea><input type="hidden" id="add_param"> 当前有<small>'+group+'</small>组参数';
		html+= '<textarea cols="20" rows="10" id="biao1" style="position:absolute;left:-999em">职位名称：普工\n工作性质：普工\n招聘人数：20\n工作经验：有工作经验者优先\n工作地点：西环路苗匠物流园旁不大公司\n待遇：面谈\n联系电话：0356308477773084888830849999\nEMail：eee@163.com\n发布日期：2013-12-26\n截止日期：长期有效</textarea>';

		parent.parent().append('<input type="button" class="layui-btn layui-btn-sm" id="copy" style="background:#919196" value="复制标准格式" /><input type="button" class="layui-btn layui-btn-sm" id="help" style="transition: 4s" value="help"> 标题和值<input type="checkbox" id="val_key" checked style="display:inline-block">')

		parent.parent().after(html)
		$("#alert_text").animate({'width':'0'},500).fadeOut(500).css('background','orange');

		$("#help").click(function(){
			$.dialog.alert('请粘贴按回车(\\n)分割和中文冒号(：)分割的参数,如 <div>职位名称：普工</div><div>工作性质：普工</div>(只执行一次,刷新即可再粘贴)');
		});

		$("#copy").click(function(){
			var texts=document.getElementById("biao1");
			texts.select(); 
			// 选择对象
			document.execCommand("Copy"); 
			// 执行浏览器复制命令
			alert("已复制好，可贴粘。");
		});

		$("#text").keyup(function(e){
			if (event.ctrlKey==1)
			{
				if(document.all){
					k=e.keyCode
				}
				else{
					k=e.which
				}
				if(k==86){
					$("#add_param").click()
					$("#add_param").off('click') //实现单次点击事件
					// alert('你按下了CTRL+V')
				}
			}
			
		});

		$("#add_param").click(function(){


			var content = $("#text").val();
			if (!content) {
				$.dialog.alert('请粘贴按回车(\\n)分割和中文冒号(：)分割的参数,如 职位名称：普工\\n工作性质：普工');
				return false;
			}

			// console.log(content.search(/(.*?)：(.*?)\n*$/i))

			if (content.search(/(.*?)：(.*?)\n*$/i)<0) {
				$.dialog.alert('不符合规则的参数')
				return false;
			}

			var split_vk = content.split('\n');

			var contentLen = split_vk.length;
			var initNum = contentLen-group;
			
					
			if (initNum>0) {
				for (var i = 0; i < initNum; i++) {
					$.phpok_form_param.add_ele_single('param','')
					
				}
				
			}
			var allInput = list_param.find('input[type="text"]'); //重新

		var split_v_k = new Array()
		var sp_v_k = new Array()
		var sp_v_k_value = new Array()
		var sp_v_k_num = new Array()
		var check_v_k;

		split_vk.forEach(function(item,index,arr){
			var split_v_k = item.split('：');
			
			sp_v_k[split_v_k[0]] = split_v_k[1];

			check_v_k = $('#val_key').prop('checked');
			if (check_v_k) {
				sp_v_k_num[index] = split_v_k[0];
				sp_v_k_value[index] = split_v_k[1];
			}else{
				sp_v_k_value[index] = split_v_k[1];
			}
		})

		for(let v in sp_v_k){
			// console.log(v)
			// console.log(sp_v_k[v])
		}

		var num = 0; //获取从0开始的索引值,如0-8
		
		for (var i = 0; i < allInput.length; i++) {
			if (i%2==1) {
				if (sp_v_k_value[num]) {
				allInput[i].value = sp_v_k_value[num]
				}
				num++;
			}

			if (i%2==0) {
				if (sp_v_k_num[num]) {
				allInput[i].value = sp_v_k_num[num]
				}
			}

		}

	});
	});

	
})
