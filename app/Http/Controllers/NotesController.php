<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;

class NotesController extends Controller
{
    public function index()
    {
        return view('tasks');
    }

    public function getAll()
    {
        return Note::all();
    }

    public function save(Request $request)
    {
        $newNote = new Note;
        $newNote->user_id = "abc"; // placeholder
        $newNote->content = $request->content;
        $newNote->save();
        return $newNote;
    }

    public function updatedContent(Request $request)
    {
        $noteToUpdate = Note::find($request->id);
        if ($request->content == $noteToUpdate->content) {
            return $noteToUpdate;
        }
        $noteToUpdate->content = $request->content;
        $noteToUpdate->save();
        return $noteToUpdate;
    }
}
