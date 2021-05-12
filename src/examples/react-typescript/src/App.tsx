import { FC } from "react";
import "./App.css";
import { Header } from "./header";

export const App: FC = () => {
  return (
    <div className="App">
      <Header title={'Hola mundo'} />
    </div>
  );
}
