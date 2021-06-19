<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = array('user_id', 'trxid', 'amount', 'balance','type','details');



    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
