<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class ToDoListController extends Controller
{
    public function index()
    {
        return view('tasks', ['todos' => Todo::all()]);
    }

    public function save(Request $request)
    {
        $newTodo = new Todo;
        $newTodo->user_id = "abc"; // placeholder
        $newTodo->title = $request->todo;
        $newTodo->is_completed = 0;
        $newTodo->save();
        return $newTodo;
    }

    public function getAll()
    {
        return Todo::all();
    }
}
