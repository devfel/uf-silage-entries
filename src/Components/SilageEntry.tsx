import React from 'react'
import { IEntry } from '../App';

interface Props {
    entryItem: IEntry;
}

const SilageEntry = ({ entryItem }: Props) => {
    return (
        <div className='entry-item'>
            <div className='entry-content'>
                <div>{entryItem.companyName}</div>
                <div>{entryItem.hybridName}</div>
                <div>{entryItem.relativeMaturity}</div>
            </div>
            <button>X</button>
        </div>
    )
}

export default SilageEntry;