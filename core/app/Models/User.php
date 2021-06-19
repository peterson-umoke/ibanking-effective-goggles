<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

//    protected $fillable = [
//        'balance'
//    ];

    protected $table = 'users';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function user()
    {
        return $this->belongsTo(__CLASS__)->withTrashed();
    }

    public function userName()
    {
        return $this->belongsTo(__CLASS__)->withTrashed();
    }


    public function rating()
    {
        return $this->belongsTo(__CLASS__)->withTrashed();
    }

    public function Ads()
    {
        return $this->belongsTo(__CLASS__)->withTrashed();
    }

    public function hyipUser()
    {
        return $this->belongsTo(__CLASS__)->withTrashed();
    }

//    public function eplayer()
//    {
//        return $this->hasMany('App\Eplayer', 'id', 'user_id');
//    }
//
//    public function bplayer()
//    {
//        return $this->hasMany('App\Bplayer', 'id', 'user_id');
//    }
//
//    public function qplayer()
//    {
//        return $this->hasMany('App\Qplayer', 'id', 'user_id');
//    }
//
//    public function nplayer()
//    {
//        return $this->hasMany('App\Nplayer', 'id', 'user_id');
//    }

    public function withdraw()
    {
        return $this->hasMany(Withdraw::class, 'id', 'user_id');
    }

    public function deposit()
    {
        return $this->hasMany(Deposit::class, 'id', 'user_id');
    }

    public function transaction()
    {
        return $this->hasMany(Transaction::class, 'id', 'user_id');
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
