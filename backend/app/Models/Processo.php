<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Processo extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'numero',
        'data_abertura',
        'descricao',
        'cliente',
        'advogado',
        'uf'
    ];

    public function andamentos() {
        return $this->hasMany(Andamento::class);
    }
}
