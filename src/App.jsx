import "./App.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import ColorPicker from "./components/ColorPicker-components/ColorPicker";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./ReduxStore/middleware/AsyncThunk";
import { useEffect } from "react";
import Loading from "./components/Loading";
import Cursor from "./components/MagicCursor/AnimatedCursor";

function App() {
  const { cursorValue } = useSelector((state) => state.Cursor);
  const { IsLoading } = useSelector((state) => state.FetchData);
  const { IsMagicCursor } = useSelector((state) => state.Cursor);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchData());
    }, 6000);
  }, []);

  return (
    <div className={`App relative cursor-${cursorValue}`}>
      {IsMagicCursor && <Cursor />}
      {IsLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <ColorPicker />
          <Layout />
        </>
      )}
    </div>
  );
}

export default App;
