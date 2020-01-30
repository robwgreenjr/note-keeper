<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
use App\Note;

Route::prefix('v1')->group(function(){
    Route::apiResource('/note', 'Api\v1\NotesController')
        ->only(['store','show','update','destroy']);

    Route::apiResource('/notes', 'Api\v1\NotesController')
        ->only('index');
});
