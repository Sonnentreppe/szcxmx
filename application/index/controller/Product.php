<?php

namespace app\index\controller;

use app\admin\model\ProductArticle;
use app\common\controller\Frontend;
use app\common\library\Token;
use think\Request;

class Product extends Frontend
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


        //dump($list);
        return $this->view->fetch();
    }

    public function news()
    {
        $newslist = [];
        return jsonp(['newslist' => $newslist, 'new' => count($newslist), 'url' => 'https://www.fastadmin.net?ref=news']);
    }

    public function category(){

        $id=Request::instance()->param('id');
        $list = \think\Db::name('product_menu')->select();
        foreach ($list as $one=>$o ){
            $list[$one]['chlid'] = \think\Db::name('product_article')->where('pid_id',$o['id'])->select();
        }
        $data = \think\Db::name('product_menu')->where('id',$id)->find();
        $this->assign('data',$data);
        $this->assign('list',$list);
        //dump($list);
        return $this->view->fetch();
    }

    public function article()
    {

        $id = Request::instance()->param('id');
        $list = \think\Db::name('product_menu')->select();
        foreach ($list as $one=>$o ){
            $list[$one]['chlid'] = \think\Db::name('product_article')->where('pid_id',$o['id'])->select();
        }
        $data = \think\Db::name('product_article')->where('id',$id)->find();

        $article = new \app\common\model\ProductArticle();
        $page_up = $article->getUpOne($id);
        $page_down = $article->getDownOne($id);

        $this->assign('data',$data);
        $this->assign('list',$list);
        $this->assign('up',$page_up);
        $this->assign('down',$page_down);
        return $this->view->fetch();
    }
}
