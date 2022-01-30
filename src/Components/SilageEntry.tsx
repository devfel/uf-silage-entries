import React from 'react'
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
                <div>{entryItem.companyName}</div>
                <div>{entryItem.hybridName}</div>
                <div>{entryItem.silageType}</div>
                <div>{entryItem.relativeMaturity}</div>
            </div>
            <button onClick={() => removeEntry(entryItem.hybridName)}>Remove</button>
        </div>
    )
}

export default SilageEntry;