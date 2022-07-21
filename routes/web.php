<?php

use App\Http\Controllers\NotesController;
use App\Http\Controllers\ToDoListController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ToDoListController::class, 'index']);

Route::get('/todos', [ToDoListController::class, 'getAll']);

Route::post('/saveTodo', [ToDoListController::class, 'save']);

Route::put('/updateTodoStatus', [ToDoListController::class, 'updateStatus']);

Route::post('/saveNote', [NotesController::class, 'save']);

Route::put('/updateNoteContent', [NotesController::class, 'updatedContent']);
