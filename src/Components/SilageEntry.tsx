import React from 'react';
import { IEntry } from '../App';
import './SilageEntry.css';

interface Props {
    entryItem: IEntry;
    removeEntry(entryToBeDelete: string): void;
}

const SilageEntry = ({ entryItem, removeEntry }: Props) => {
    return (
        <div className='entry-item'>
            <div className='entry-content'>
                <div>Company: {entryItem.companyName}</div>
                <div>Hybrid: {entryItem.hybridName}</div>
                <div>Species: {entryItem.silageType}</div>
                <div>Multicut: {entryItem.multicut}</div>
                <div>Season: <b>{entryItem.season}</b></div>
                <div>Relative Maturity: {entryItem.relativeMaturity}</div>
            </div>
            <button onClick={() => removeEntry(entryItem.entryId)}>Remove</button>
        </div>
    )
}

export default SilageEntry;