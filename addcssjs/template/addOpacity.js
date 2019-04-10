//增加透明度
var edit = document.querySelectorAll('div.layui-input-block.mtop > div > input[value="编辑"]');
var dele = document.querySelectorAll('div.layui-input-block.mtop > div > input[value="删除"]');
if (edit) {
	for (var i = edit.length - 1; i >= 0; i--) {
		edit[i].style.opacity = '0.75';
	}
	for (var i = dele.length - 1; i >= 0; i--) {
		dele[i].style.opacity = '0.75';
	}
}