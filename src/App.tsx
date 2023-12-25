import { FormEvent, useState } from "react";
import "./App.css";
import { Constants } from "./app.constants";
import { InputBox } from "./components/InputBox";
import { Center } from "./components/containers/Center";
import { Form } from "./components/containers/Form";
import { useSearch } from "./service/search.service";
import { Loader } from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { results, searchTitle } = useSearch();
  function onSearchBoxInput(e: FormEvent<HTMLInputElement>) {
    setSearchText(e.currentTarget.value);
  }
  function onSearchTitle() {
    setLoading(true);
    searchTitle(searchText).finally(() => setLoading(false));
  }

  return (
    <>
      <Loader loading={loading} />

      <Center>
        <Form onSubmit={onSearchTitle}>
          <InputBox
            title={Constants.SEARCH_INPUT_TITLE}
            onChange={onSearchBoxInput}
            onLoad={() => console.log("LOADED")}
          />
        </Form>
        <br />
        {results && (
          <div>
            <img src={results?.results[0].img} alt="" loading="lazy" />
            {Object.values(results.results[0].countries).map(
              (country, index) => (
                <h3 key={index}>{country}</h3>
              )
            )}
          </div>
        )}
      </Center>
    </>
  );
};

export default App;
