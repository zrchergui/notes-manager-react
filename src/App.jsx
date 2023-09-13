import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NoteAPI } from "api/note-api";
import { setNotelist } from "store/note/note-slice";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNotelist(noteList));
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);
  return (
    <div className="container-fluid">
      <Header />
      <Outlet></Outlet>
    </div>
  );
}
