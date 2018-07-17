<?php

namespace app\index\controller;

use app\admin\model\ProductArticle;
use app\common\controller\Frontend;
use app\common\library\Token;
use app\common\model\NewsArticle;
use think\Request;

class News extends Frontend
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
        for ($i=1;$i<6;$i++){
            $article = new NewsArticle();
            $data=$article->where('class',$i)->select();
            $this->assign('data'.$i,$data);
        }
        return $this->view->fetch();
    }

    public function category()
    {
        $menu = array(

            1=>array(
                'name'=>'公司动态',
                'content'=>'创新梦想软件是专业提供软件定制开发的软件技术公司，在这里为你展示企业最新的新闻资讯。'
            ),
            2=>array(
                'name'=>'项目案例',
                'content'=>'创新梦想软件是一家技术服务型公司,这里主要展示本公司与各行业客户进行合作商谈的实时资讯'
            ),
            3=>array(
                'name'=>'员工风采',
                'content'=>'员工是一个企业的血液，让每一位员工充满激情实现自身价值是本公司所追求的最终目的。'
            ),
            4=>array(
                'name'=>'业界动态',
                'content'=>'互联网思维在各大领域和各类行业不断被提及,在这里我们为你展示最新的业界新闻资讯'
            ),
            5=>array(
                'name'=>'最新公告',
                'content'=>'创新梦想软件是一家专业提供软件定制开发的技术公司，这里为你展示公司最新的公告通知'
            )

        );
        $limit = 6;
        $id = Request::instance()->param('id');
        $id = $id?$id:1;
        $article = new NewsArticle();
        $data = $article->where('class',$id)->paginate($limit);
        $page = $data->render();
        $this->assign('data',$data);
        //dump($data);
        $this->assign('menu',$menu[$id]);
        //dump($menu[$id]);
        $this->assign('page', $page);
        return $this->view->fetch();
    }


    public function article()
    {
        $id = Request::instance()->param('id');
        $id = $id?$id:1;
        $article = new NewsArticle();
        $data = $article->where('id',$id)->find();
        $this->assign('data',$data);
        //dump($data);
        $page_up = $article->getUpOne($id);
        $page_down = $article->getDownOne($id);

        $this->assign('up',$page_up);
        $this->assign('down',$page_down);
        return $this->view->fetch();
    }

}
