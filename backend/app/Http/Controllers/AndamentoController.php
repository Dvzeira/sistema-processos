<?php

namespace App\Http\Controllers;
use App\Models\Andamento;
use Illuminate\Http\Request;

class AndamentoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Andamento::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $andamento = Andamento::create($request->all());

        return response()->json([
            'msg' => 'Andamento criado com sucesso',
            'data' => $andamento
         ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         return Andamento::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $andamento = Andamento::findOrFail($id);
        $andamento->update($request->all());

        return response()->json([
            'msg' => 'Andamento atualizado com sucesso',
            'data' => $andamento
         ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Andamento::destroy($id);

        return response()->json([
             'msg' => 'Andamento deletado com sucesso'
        ]);
    }
}
