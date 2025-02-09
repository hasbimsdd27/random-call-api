import "./App.css";
import { Header, MasonryWrapper } from "./components";
import { data_contributor } from "./contributor";

function App() {
  return (
    <div className="mx-0 xl:mx-20 font-body">
      <Header />
      <MasonryWrapper>
        {data_contributor.map((res) => {
          const Component = res;
          return <Component />;
        })}
      </MasonryWrapper>
    </div>
  );
}

export default App;
