<?php

namespace App\Http\Controllers;
use App\Models\Processo;
use Illuminate\Http\Request;

class ProcessoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Processo::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $processo = Processo::create($request->all());

         if ($request->uf == 'MG') {
        return response()->json([
            'msg' => 'Processo de MG criado com sucesso',
            'data' => $processo
        ]);
        }

        return response()->json([
            'msg' => 'Processo fora de MG criado com sucesso',
            'data' => $processo
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $processo = Processo::with('andamentos')->findOrFail($id);

        return response()->json($processo);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $processo = Processo::findOrFail($id);

        $processo->update($request->all());

        return response()->json([
            'msg' => 'Processo atualizado com sucesso',
            'data' => $processo
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Processo::destroy($id);

         return response()->json([
            'msg' => 'Processo deletado com sucesso'
        ]); 
    }
}
