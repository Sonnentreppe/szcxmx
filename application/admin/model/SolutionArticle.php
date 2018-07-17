<?php

namespace app\admin\model;

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

    







    public function solutionspecial()
    {
        return $this->belongsTo('SolutionSpecial', 'special_ids', 'id', [], 'LEFT')->setEagerlyType(0);
    }


    public function solutionability()
    {
        return $this->belongsTo('SolutionAbility', 'function_ids', 'id', [], 'LEFT')->setEagerlyType(0);
    }
}
