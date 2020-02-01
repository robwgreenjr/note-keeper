<?php

namespace App\Http\Controllers\Api\v1;

use App\Note;
use App\Http\Resources\NoteResource;
use App\Http\Resources\NoteResourceCollection;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NotesController extends Controller
{
  /**
  * @return NoteResource
  */
  public function show(Note $note): NoteResource
  {
    return new NoteResource($note);
  }

  /**
  * @return NoteResourceCollection
  */
  public function index(): NoteResourceCollection
  {
    return new NoteResourceCollection(Note::paginate());
  }

  /**
  * @return NoteResource
  */
  public function store(Request $request): NoteResource
  {
    $request->validate([
      'note' => 'required'
    ]);

    $note = Note::create($request->all());

    return new NoteResource($note);
  }

  /**
  * @return NoteResource
  */
  public function update(Note $note, Request $request): NoteResource
  {
    $note->update($request->all());

    return new NoteResource($note);
  }

  public function destroy(Note $note)
  {
    $note->delete();

    return response()->json();
  }
}
