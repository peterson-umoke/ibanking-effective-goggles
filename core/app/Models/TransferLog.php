<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransferLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_name',
        'account_number',
        'euro_iban',
        'swift_code',
        'bank_address',
        'beneficiary_address',
        'bank_name',
        'pin',
    ];
}
