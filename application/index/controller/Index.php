<?php

namespace app\index\controller;

use app\common\controller\Frontend;
use app\common\library\Token;

class Index extends Frontend
{

    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $layout = '';

    public function _initialize()
    {
        parent::_initialize();

    }

    public function index()
    {
        $list = \think\Db::name('solution_menu')->select();
        $this->assign('list',$list);

        $list = \think\Db::name('product_menu')->select();
        foreach ($list as $one=>$o ){
            $list[$one]['chlid'] = \think\Db::name('product_article')->where('pid_id',$o['id'])->select();
        }
        $this->assign('product_list',$list);

        return $this->view->fetch();
    }

    public function news()
    {
        $newslist = [];
        return jsonp(['newslist' => $newslist, 'new' => count($newslist), 'url' => 'https://www.fastadmin.net?ref=news']);
    }

}
