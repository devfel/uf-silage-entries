import React, { ChangeEvent, FC, useState } from 'react';
import './assets/styles/global.css';
import SilageEntry from './Components/SilageEntry';

export interface IEntry {
  companyName: string;
  hybridName: string;
  silageType: string;
  multicut: string;
  season: string;
  relativeMaturity: number;
}

const App: FC = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [hybridName, setHybridName] = useState<string>("");
  const [silageType, setSilageType] = useState<string>("");
  const [summer, setSummer] = useState<boolean>(false);
  const [spring, setSpring] = useState<boolean>(false);
  const [multicut, setMulticut] = useState<string>("N/A");
  const [relativeMaturity, setRelativeMaturity] = useState<number>(0);

  const [showMulticut, setShowMulticut] = useState<boolean>(false);
  const [entriesList, setEntriesList] = useState<IEntry[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "company-name") setCompanyName(event.target.value);
    else if (event.target.name === "hybrid-name") setHybridName(event.target.value);
    else if (event.target.name === "relative-maturity") setRelativeMaturity(Number(event.target.value));
  };

  const addEntry = (): void => {
    if (summer === true && spring === true) {
      const newEntry1 = { companyName: companyName, hybridName: hybridName, silageType: silageType, multicut: multicut, season: "Summer", relativeMaturity: relativeMaturity }
      const newEntry2 = { companyName: companyName, hybridName: hybridName, silageType: silageType, multicut: multicut, season: "Spring", relativeMaturity: relativeMaturity }
      setEntriesList([...entriesList, newEntry1, newEntry2])
    }
    else if (spring === true && summer === false) {
      const newEntry = { companyName: companyName, hybridName: hybridName, silageType: silageType, multicut: multicut, season: "Spring", relativeMaturity: relativeMaturity }
      setEntriesList([...entriesList, newEntry])
    }
    else if (spring === false && summer === true) {
      const newEntry = { companyName: companyName, hybridName: hybridName, silageType: silageType, multicut: multicut, season: "Summer", relativeMaturity: relativeMaturity }
      setEntriesList([...entriesList, newEntry])
    }
    //Only Reset below variables when a newEntry is posted (otherwise user will have to fill everything again).
    setHybridName("");
    setSilageType("");
    setMulticut("N/A");
    setShowMulticut(false)
    setSummer(false);
    setSpring(false);
    setRelativeMaturity(0);
  };

  const removeEntry = (entryToBeDelete: string): void => {
    setEntriesList(entriesList.filter((nameToFilter) => {
      return nameToFilter.hybridName != entryToBeDelete
    }));
  };

  const MulticutOption = () => (
    <div className="types-radio" id="multicut">
      <span>Multicut: </span>
      <div className="radio-option">
        <input type="radio" id="yes" name="multicut" value="Yes" onChange={() => setMulticut("Yes")} checked={multicut === "Yes"} />
        <label htmlFor="yes">Yes</label>
      </div>
      <div className="radio-option">
        <input type="radio" id="no" name="multicut" value="No" onChange={() => setMulticut("No")} checked={multicut === "No"} />
        <label htmlFor="no">No</label>
      </div>
    </div>
  )


  return (
    <div className="container">
      <div className="title">
        <h1>Silage Trial Entries</h1>
        <h3>UF | IFAS - Forage Team</h3>
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
          <span>Forage Species: </span>
          <div className="radio-option">
            <input type="radio" id="corn" name="silage-type" value="Corn" onChange={() => { setSilageType("Corn"); setMulticut("N/A"); setShowMulticut(false) }} checked={silageType === "Corn"} />
            <label htmlFor="corn">Corn</label>
          </div>
          <div className="radio-option">
            <input type="radio" id="sorghum-sudan" name="silage-type" value="Sorghum-Sudan" onChange={() => { setSilageType("Sorghum-Sudan"); setMulticut("N/A"); setShowMulticut(false) }} checked={silageType === "Sorghum-Sudan"} />
            <label htmlFor="sorghum-sudan">Sorghum-Sudan</label>
          </div>
          <div className="radio-option">
            <input type="radio" id="sudan" name="silage-type" value="Sudan" onChange={() => { setSilageType("Sudan"); setMulticut("N/A"); setShowMulticut(true) }} checked={silageType === "Sudan"} />
            <label htmlFor="sudan">Sudan</label>
          </div>
          <div className="radio-option">
            <input type="radio" id="millet" name="silage-type" value="Millet" onChange={() => { setSilageType("Millet"); setMulticut("N/A"); setShowMulticut(true) }} checked={silageType === "Millet"} />
            <label htmlFor="millet">Millet</label>
          </div>
        </div>

        {showMulticut ? <MulticutOption /> : null}

        <div className="seasons-checkbox">
          <span>Seasons: (Select One or Both)</span>
          <div className="checkbox-option">
            <input type="checkbox" id="summer" name="summer" value="Summer" onChange={() => setSummer(!summer)} checked={summer} />
            <label htmlFor="summer"> Summer</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" id="spring" name="spring" value="Spring" onChange={() => setSpring(!spring)} checked={spring} />
            <label htmlFor="spring"> Spring</label>
          </div>
        </div>

        <div className="maturity-box">
          <label htmlFor="relative-maturity">Relative Maturity: </label>
          <input
            type="number"
            id="realtive-maturity"
            name="relative-maturity"
            placeholder="numbers only..."
            onChange={handleChange}
            value={relativeMaturity}
          />
        </div>

        <button onClick={addEntry}>Add Entry to the List.</button>
      </div>

      <div className="entries-list">

        <div className="entries-counter">
          <span>Amount of Entries Included to Send: </span>
          <span>{entriesList.length}</span>
        </div>

        {entriesList.map((entry: IEntry, key: number) => (
          <SilageEntry key={key} entryItem={entry} removeEntry={removeEntry} />
        ))}

      </div>

      <button className="email-button" onClick={addEntry}>Click Here When you Finished Adding All Entries for Trials.</button>
    </div>

  );
}

export default App;
