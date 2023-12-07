<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    protected $fillable = [
        'addressee',
        'requester',
        'type',
    ];

    public function userAdr()
    {
        return $this->belongsTo(User::class, 'addressee','id');
    }
    public function userReq()
    {
        return $this->belongsTo(User::class, 'requester','id');
    }
}
