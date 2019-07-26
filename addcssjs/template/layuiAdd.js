window.onload = function () {
	var select=document.getElementById('_tmp_select_add');
	var tbody=document.querySelector('tbody');

	/*
	自己写的 获取标签选中的当前索引位置
	*/
	var tags = top.$('#LAY_app_tabsheader');
	var tagList = tags.find('li'); 
	var thisList;
	tagList.each(function(index,item){
		if ($(this).hasClass('layui-this')) {
			num = index;
			thisList = $(this);
		}
	})
	var num = 0; //layui-this 的位置
	if (window.parent.layui.admin) {
		var admin = window.parent.layui.admin;
		// 在单独窗口打开时, 会出现窗口找不到而报错的错误-----------------------------------------
		var events = window.parent.layui.admin.events;
	}
	// var numm = window.parent.layui.admin.tabsPage.index; //layui-this 的位置
	// events.refresh();
	// admin.closeThisTabs()

	// window.parent 指的是当前框架的父亲窗口, 当前刚好为顶级窗口 window
	// top 指的是顶级窗口 window
	if (top.$('.layadmin-iframe').length) {
		setTimeout(function(){
			var k = top.$('.layadmin-iframe').eq(num)[0].contentWindow;
			if (k) {
				k.focus();
			}
		},200)
	}
	var keyEvent = (function () {
		document.onkeydown = function (e) {
			var keyCode = e.keyCode || e.which || e.charCode;
			var altKey = e.altKey;
			if (altKey && keyCode === 82) { 
				//原生写法,phpok写的
				// top.$('.layadmin-iframe').eq(numm)[0].contentWindow.location.reload(true); 
				events.refresh()
			}
			
			if (altKey && keyCode === 87) { 
				// thisList.find('.layui-tab-close')[0].click() 自己写的方法
				admin.closeThisTabs()
			}

		}
	})();

	$(".layui-table").attr('lay-even','');

	if (tbody) {
		var len = tbody.children.length;
		for (var i = len - 1; i >= 0; i--) {

			tbody.children[i].onmouseover=function()
			{
				this.style.backgroundColor='#f2f2f2';
				this.onmouseout=function()
				{
					var c = this.style.backgroundColor;
					if (c=='#FFCC80' || c=='rgb(255, 204, 128)') {
						this.style.backgroundColor='#FFCC80';
					}else {
						this.style.backgroundColor='';
					}
				}
			}

			tbody.children[i].onclick = function(){
				for (var y = len - 1; y >= 0; y--) {
					tbody.children[y].style.backgroundColor = '#fff';
				}
				this.style.backgroundColor = "#FFCC80"
			}
			
		}
	}
	if (select) {
		select.parentNode.style.width = '600px';
	}
	
	var url = document.location.search;

	function getQueryString(name) {
	  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	  var r = window.location.search.substr(1).match(reg);
	  if (r != null) {
	    return decodeURI(r[2]);
	  }
	  return null;
	}
	

	var f =url.search('f=set');
	var m =url.search('c=module');
	
	/*if (m!==-1) {
		$(".layui-btn-group").find('input[value="复制模块"]').hide();
		$(".layui-btn-group").find('input[value="导出"]').hide();
	}*/
	if (f!==-1) {
		setTimeout(function(){

			var id =getQueryString('id');
			var form = 'project-'+id;
			form = document.getElementById(form);
			if (!form) {
				form = document.getElementById('add-project');
			}
			if (form) {
				var newItem1=document.createElement("input")
				var textnode=document.createTextNode("")
				newItem1.value = '基本'
				newItem1.type = 'button'
				newItem1.id = 'card_1'
				newItem1.style.position = 'absolute'
				newItem1.style.top = '10px'
				newItem1.style.right = '90px'
				newItem1.style.zIndex = '99'
				newItem1.appendChild(textnode)

				form.insertBefore(newItem1,form.childNodes[0]);

				var newItem2=document.createElement("input")
				var textnode=document.createTextNode("")
				newItem2.value = '扩展'
				newItem2.type = 'button'
				newItem2.id = 'card_2'
				newItem2.style.position = 'absolute'
				newItem2.style.top = '10px'
				newItem2.style.right = '50px'
				newItem2.style.zIndex = '99'
				newItem2.appendChild(textnode)

				form.insertBefore(newItem2,form.childNodes[1]);

				var newItem3=document.createElement("input")
				var textnode=document.createTextNode("")
				newItem3.value = '优化'
				newItem3.type = 'button'
				newItem3.id = 'card_3'
				newItem3.style.position = 'absolute'
				newItem3.style.top = '10px'
				newItem3.style.right = '10px'
				newItem3.style.zIndex = '99'
				newItem3.appendChild(textnode)

				form.insertBefore(newItem3,form.childNodes[2]);
				var cardArr=new Array();
				for(var i=0;i<form.children.length;i++){
					if(form.children[i].className == 'layui-card'){
						cardArr.push(form.children[i]);
					}
				}
			}

			var c1=document.getElementById('card_1');
			if (c1) {
				if (c1.parentNode.style.name==='style') {
					c1.parentNode.style.remove() //时需时无需
				}
				c1.parentNode.style.position = "relative";
			}
			var c2=document.getElementById('card_2');
			var c3=document.getElementById('card_3');
			if (c1 || c2 || c3) {
				c1.onclick = function(){
					cardArr[0].style.display = 'block';
					cardArr[1].style.display = 'none';
					cardArr[2].style.display = 'none';
				}
				c2.onclick = function(){
					cardArr[0].style.display = 'none';
					cardArr[1].style.display = 'block';
					cardArr[2].style.display = 'none';
				}
				c3.onclick = function(){
					cardArr[0].style.display = 'none';
					cardArr[1].style.display = 'none';
					cardArr[2].style.display = 'block';
				}
				
			}
		},200)
	}
}