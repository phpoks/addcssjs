$(function(){
	var i = $("div[layadmin-event=leftPage]");
	i.addClass('layui-icon-close');
	i.attr('layadmin-event','closeAllTabs');
	i.attr('title','关闭所有标签');
	i.after('<div class="layui-icon layadmin-tabs-control layui-icon-template" layadmin-event="closeOtherTabs" title="关闭其他标签"></div>')
})