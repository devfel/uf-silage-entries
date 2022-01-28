import React, { ChangeEvent, FC, useState } from 'react';
import './assets/styles/global.css';
import SilageEntry from './Components/SilageEntry';

export interface IEntry {
  companyName: string;
  hybridName: string;
  relativeMaturity: number;
}


const App: FC = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [hybridName, setHybridName] = useState<string>("");
  const [relativeMaturity, setRelativeMaturity] = useState<number>(0);

  const [entriesList, setEntriesList] = useState<IEntry[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "company-name") setCompanyName(event.target.value);
    else if (event.target.name === "hybrid-name") setHybridName(event.target.value);
    else if (event.target.name === "relative-maturity") setRelativeMaturity(Number(event.target.value));
  };

  const addEntry = (): void => {
    const newEntry = { companyName: companyName, hybridName: hybridName, relativeMaturity: relativeMaturity }
    setEntriesList([...entriesList, newEntry])
    setHybridName("");
    setRelativeMaturity(0);
  };


  return (
    <>
      <div className="Title">
        <h1>UF - IFAS - Silage Trial Entries</h1>
      </div>

      <div className="entries-company">
        <label htmlFor="company-name">Company Name: </label>
        <input
          type="text"
          id="company-name"
          name="company-name"
          placeholder="Company or Brand Name..."
          onChange={handleChange}
          value={companyName}
        />
      </div>

      <div className="entries-form">
        <label htmlFor="hybrid-name">Hybrid Name/Number: </label>
        <input
          type="text"
          id="hybrid-name"
          name="hybrid-name"
          placeholder="as to be presented on the reports."
          onChange={handleChange}
          value={hybridName}
        />

        <div className="types-radio">
          <label>Type: </label>
          <input type="radio" id="corn" name="silage-type" value="Corn" />
          <label htmlFor="corn">Corn</label>
          <input type="radio" id="sorghum-sudan" name="silage-type" value="Sorghum-Sudan" />
          <label htmlFor="sorghum-sudan">Sorghum-Sudan</label>
          <input type="radio" id="sudan" name="silage-type" value="Sudan" />
          <label htmlFor="sudan">Sudan</label>
          <input type="radio" id="millet" name="silage-type" value="Millet" />
          <label htmlFor="millet">Millet</label>
        </div>

        <div className="seasons-checkbox">
          <label>Season: </label>
          <input type="checkbox" id="summer" name="summer" value="Summer" />
          <label htmlFor="summer"> Summer</label>
          <input type="checkbox" id="spring" name="spring" value="Spring" />
          <label htmlFor="spring"> Spring</label>
        </div>

        <label htmlFor="relative-maturity">Relative Maturity: </label>
        <input
          type="number"
          id="realtive-maturity"
          name="relative-maturity"
          placeholder="numbers only..."
          onChange={handleChange}
          value={relativeMaturity}
        />

        <button onClick={addEntry}>Add Entry</button>
      </div>

      <div className="entries-list">
        {entriesList.map((entry: IEntry, key: number) => (
          <SilageEntry key={key} entryItem={entry} />
        ))}

      </div>
    </>

  );
}

export default App;
