import { Constants } from "../../app.constants";
import { useSearch } from "../../service/search.service";
import { InputBox } from "../../components/InputBox";
import { Loader } from "../../components/Loader";
import { Center } from "../../components/containers/Center";
import { Form } from "../../components/containers/Form";
import { FormEvent, useState } from "react";
export function Home() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
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
        {results && results.results && (
          <div>
            <img src={results.results[0].img} alt="" loading="lazy" />
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
}
