<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Processo;

class Andamento extends Model
{
    use HasFactory;
    
     protected $fillable = [
        'processo_id',
        'data',
        'descricao'
    ];  

    public function processo() {
        return $this->belongsTo(Processo::class);
    }
}