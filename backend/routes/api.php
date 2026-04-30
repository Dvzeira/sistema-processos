<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProcessoController;
use App\Http\Controllers\AndamentoController;

Route::apiResource('processos', ProcessoController::class);
Route::apiResource('andamentos', AndamentoController::class);