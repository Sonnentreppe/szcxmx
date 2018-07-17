<?php

namespace app\common\model;

use think\Model;

class NewsArticle extends Model
{
    // 表名
    protected $name = 'news_article';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    
    // 追加属性
    protected $append = [

    ];
    





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
