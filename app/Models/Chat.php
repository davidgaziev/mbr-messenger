<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
  protected $fillable = ['id', 'pinned_message'];

  public function messages()
  {
    return $this->hasMany(Message::class);
  }
}