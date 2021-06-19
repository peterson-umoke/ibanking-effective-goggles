<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Withdraw extends Model
{
    protected $fillable = array('user_id', 'wmethod_id', 'amount', 'account', 'status');

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function wmethod()
    {
        return $this->belongsTo('App\Models\Wmethod');
    }
}
