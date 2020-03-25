import React from "react";

interface Props {
  videos: string;
}

const SearchBar: React.FC<Props> = props => {
  const [term, setTerm] = React.useState<string>("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    props.onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
