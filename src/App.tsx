import React from "react";

export interface AppProps {}
export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  componentDidMount = () => {};

  render() {
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, quaerat
        minima, adipisci suscipit pariatur ipsam eos laborum doloribus
        voluptatem illo veritatis commodi. Dolor itaque eum aperiam officiis
        architecto eos id?
      </div>
    );
  }
}

export default App;
