<?php

namespace app\index\controller;

use app\common\controller\Frontend;
use app\common\library\Token;
use app\common\model\SolutionArticle;
use think\console\command\make\Model;
use think\Request;

class Solution extends Frontend
{

    protected $noNeedLogin = '*';
    protected $noNeedRight = '*';
    protected $layout = '';

    public function _initialize()
    {
        //        循环输出所有类型的绝决方案的文章
        $article = new SolutionArticle();
        $list = \think\Db::name('solution_menu')->select();
        foreach ($list as $one=>$x){
            $list[$one]['child'] = $article->where('class',$x['id'])->select();
        }
        //dump($list);
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

    public function article(){
        $id=Request::instance()->param('id');
        //dump($id);
        $article = new SolutionArticle();
        $data = $article->getOne($id);
        $page_up = $article->getUpOne($id);
        $page_down = $article->getDownOne($id);

        $special = \think\Db::name('solution_special')->where('id','in',$data['special_ids'])->select();

        $ability = \think\Db::name('solution_ability')->where('id','in',$data['function_ids'])->select();

        $similar = \think\Db::name('solution_article')->where('id','in',$data['similar_ids'])->select();
//        dump($special);
//        $special_id=explode(',',$data['special_ids']);
//        dump($special_id);
        $this->assign('data',$data);
        $this->assign('special',$special);
        $this->assign('ability',$ability);
        $this->assign('similar',$similar);
        $this->assign('up',$page_up);
        $this->assign('down',$page_down);
        return $this->view->fetch();
    }

    public function category(){
        $limit = 6;
        $class = Request::instance()->param('id');
//        $page=Request::instance()->param('page');
        $menu = \think\Db::name('solution_menu')->where('id',$class)->find();
        $data = \think\Db::name('solution_article')->where('class',$class)->paginate($limit);
        $page = $data->render();
//        当前页数
//        $p['new']=$page;
//        总共有多少页
//        $p['count'] = \think\Db::name('solution_article')->where('class',$class)->count()/$limit;
//       dump($p);
      //  dump($menu);
        $this->assign('menu',$menu);
        $this->assign('data',$data);
        $this->assign('page', $page);
        return $this->view->fetch();

    }

}
