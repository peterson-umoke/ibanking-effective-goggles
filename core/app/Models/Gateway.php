<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gateway extends Model
{
	protected $table = 'gateways';
	protected $fillable = array('name','gateimg', 'minamo', 'maxamo', 'fixed_charge',
	'percent_charge', 'rate', 'val1', 'val2','val3','val4','val5','val6','val7', 'status'
);

public function deposit()
{
    return $this->hasMany(Deposit::class,'id','gateway_id');
}


}
