<?php

namespace app\index\controller;

use app\admin\model\ProductArticle;
use app\common\controller\Frontend;
use app\common\library\Token;
use think\Request;

class Custom extends Frontend
{

    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $layout = '';

    public function _initialize()
    {
        $list = \think\Db::name('solution_menu')->select();
        $this->assign('list',$list);

        $list = \think\Db::name('product_menu')->select();
        foreach ($list as $one=>$o ){
            $list[$one]['chlid'] = \think\Db::name('product_article')->where('pid_id',$o['id'])->select();
        }
        $this->assign('product_list',$list);


        parent::_initialize();


    }

    public function index()
    {

        return $this->view->fetch();
    }

    public function  software()
    {

       return $this->view->fetch();
    }


}
