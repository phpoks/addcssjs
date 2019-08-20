<?php
/**
 * 自定义样式<后台应用>
 * @package phpok\plugins
 * @作者 phpok.com
 * @版本 5.2.031
 * @授权 http://www.phpok.com/lgpl.html PHPOK开源授权协议：GNU Lesser General Public License
 * @时间 2019年04月01日 23时33分
**/
class admin_addcssjs extends phpok_plugin
{
	public $me;
	public $path = '';
	public $sessionplus = '';
	public function __construct()
	{
		parent::plugin();
		$this->me = $this->_info();
		$this->sessionplus = $_SESSION['adm_develop'];
		$this->path = $this->config['url'].'plugins/'.$this->me['id'].'/template/';
	}

	//后台首页
	public function html_index_index_head(){
		$css = ['addIndexCss.css'];

		// 开发模式才启用css更改
		if ($this->sessionplus) {
			$css = ['addIndexCss.css','css/hideSidebars.css'];
		}
		$js = ['addIndexJs.js'];
		foreach ($js as $key => $value) {
			echo '	<script type="text/javascript" src="'.$this->path.$value.'"></script>'."\n";
		}
		foreach ($css as $key => $value) {
			echo '	<link rel="stylesheet" href="'.$this->path.$value.'" media="all">'."\n";
		}
	}

	public function addCssJs(){
		// $css = ['layuiAdd.css'];
		$js = ['layuiAdd.js'];
		foreach ($js as $key => $value) {
			echo '<script type="text/javascript" src="'.$this->path.$value.'"></script>'."\n";
		}
		echo '<script type="text/javascript">var linecolor ="'.$this->me['param']['linecolor'].'";</script>'."\n";
		// foreach ($css as $key => $value) {
		// 	echo '	<link rel="stylesheet" href="'.$this->path.$value.'" media="all">'."\n";
		// }
	}

	public function addJs(){
		$js = ['layuiAdd.js'];
		foreach ($js as $key => $value) {
			echo '<script type="text/javascript" src="'.$this->path.$value.'"></script>'."\n";
		}
	}

	public function js($js){
		$is = is_file($this->path.$js);
		if ($is) {
			echo '<script type="text/javascript" src="'.$this->path.$js.'"></script>'."\n";
		} else{
			echo '<script type="text/javascript" src="'.$this->path.'js/'.$js.'"></script>'."\n";
		}
	}

	public function jsIn($js){
		echo '<script type="text/javascript" src="'.$this->path.'js/ext/'.$js.'"></script>'."\n";
	}

	public function css($css){

		$is = is_file($this->path.$css);
		if ($is) {
			echo '	<link rel="stylesheet" href="'.$this->path.$css.'" media="all">'."\n";
		} else{
			echo '	<link rel="stylesheet" href="'.$this->path.'css/'.$css.'" media="all">'."\n";
		}
	}

	public function addOpacity(){
		$js = ['addOpacity.js'];
		foreach ($js as $key => $value) {
			echo '<script type="text/javascript" src="'.$this->path.$value.'"></script>'."\n";
		}
	}

	public function addCss(){
		$css = ['layuiAdd.css'];
		if ($this->me['param'] && $this->me['param']['notebook'] == '1') {
			$css = ['layuiAdd.css','notebook.css'];
		}

		foreach ($css as $key => $value) {
			echo '	<link rel="stylesheet" href="'.$this->path.$value.'" media="all">'."\n";
		}
	}
	
	//项目页面
	public function html_project_index_head(){
		$this->addCssJs();
	}

	public function html_project_content_head(){
		$this->js('project_content.js');
	}

	public function html_project_set_head(){
		$this->addCssJs();
	}
	
	//内容页面
	public function html_action_index_head(){
		$this->addCssJs();
	}

	//列表内容页面
	public function html_list_action_head(){
		$this->addCssJs();
	}

	//列表内容页面
	public function html_list_set_head(){
		$this->addCssJs();
	}

	//列表内容添加
	public function html_list_edit_head()
	{
	    $this->js('list_edit.js');
	}

	public function html_cate_index_head()
	{
	    $this->addCssJs();
	}

	public function html_cate_set_head()
	{
	    $this->js('cate_set.js');
	    /* 以下为自动在分类下添加扩展字段 不使用可以注释,后面做成配置可选按钮模式 */
	    if ($this->me['param']['isfields'] && $this->me['param']['isfields']['banner']) $this->jsIn('banner.js');
	    if ($this->me['param']['isfields'] && $this->me['param']['isfields']['thumb']) $this->jsIn('thumb.js');
	    if ($this->me['param']['isfields'] && $this->me['param']['isfields']['subtitle']) $this->jsIn('subtitle.js');
	}


	public function html_all_set_head()
	{
	    $this->addOpacity();
	}

	public function html_module_index_head()
	{
	    $this->addJs();
		$this->addCssJs();
	}

	public function html_module_fields_head()
	{
	    $this->js('field_edit.js');
	}
	public function html_module_field_edit_head()
	{
	    $this->css('user_field_edit.css');
	}

	public function html_user_field_edit_head()
	{
	    $this->css('user_field_edit.css');
	}



	/**
	 * 系统内置在</head>节点前输出HTML内容，如果不使用，请删除这个方法
	**/
	public function html_phpokhead()
	{
		$this->addCss();
	}

	
	/**
	 * 全局运行插件，在执行当前方法运行前，调整参数，如果不使用，请删除这个方法
	**/
	public function phpok_before()
	{
		//PHP代码;
	}
	
	/**
	 * 全局运行插件，在执行当前方法运行后，数据未输出前，如果不使用，请删除这个方法
	**/
	public function phpok_after()
	{
		//PHP代码;
	}
	
	
	/**
	 * 系统内置在</body>节点前输出HTML内容，如果不使用，请删除这个方法
	**/
	public function html_phpokbody()
	{
		//$this->_show("phpokbody.html");
	}
	
	/**
	 * 更新或添加保存完主题后触发动作，如果不使用，请删除这个方法
	 * @参数 $id 主题ID
	 * @参数 $project 项目信息，数组
	 * @返回 true 
	**/
	public function system_admin_title_success($id,$project)
	{
		//PHP代码;
	}
	
	
}