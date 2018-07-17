<?php

namespace app\common\model;

use think\Model;

class ProductArticle extends Model
{
    // 表名
    protected $name = 'product_article';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    
    // 追加属性
    protected $append = [

    ];
    




    public function productmenu()
    {
        return $this->belongsTo('ProductMenu', 'pid_id', 'id', [], 'LEFT')->setEagerlyType(0);
    }


//    获取上一篇文章
    public function getUpOne($id){
        $min = $this->where('id','>',$id)->min('id');
        return $this->where('id',$min)->find();
    }
//    获取下一篇文章
    public function getDownOne($id){
        $max = $this->where('id','<',$id)->max('id');
        return $this->where('id',$max)->find();
    }
}
