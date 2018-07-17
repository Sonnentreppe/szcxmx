<?php

namespace app\common\model;

use think\Model;

class SolutionArticle extends Model
{
    // 表名
    protected $name = 'solution_article';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = false;

    // 定义时间戳字段名
    protected $createTime = false;
    protected $updateTime = false;
    
    // 追加属性
    protected $append = [

    ];
    

    protected static function init()
    {
        self::afterInsert(function ($row) {
            $pk = $row->getPk();
            $row->getQuery()->where($pk, $row[$pk])->update(['weigh' => $row[$pk]]);
        });
    }

    
    public function getClassList($class){
        return $this->where(array('class'=>$class))->order('id DESC')->limit(5)->select();
    }

    public function getOne($id){
        return $this->where('id',$id)->find();
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


    public function solutionspecial()
    {
        return $this->belongsTo('SolutionSpecial', 'special_ids', 'id', [], 'LEFT')->setEagerlyType(0);
    }


    public function solutionability()
    {
        return $this->belongsTo('SolutionAbility', 'function_ids', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
