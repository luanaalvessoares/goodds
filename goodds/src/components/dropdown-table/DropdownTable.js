import React, { useState } from 'react';
import './DropdownTable.css';
import CompareTable from "../compare-table/CompareTable";
import PackagesIncluded from '../packages-included/PackagesIncluded';
import RiArrowDownSLine from 'remixicon-react/ArrowDownSLineIcon';

function DropdownTable(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <section className="compareTableSection">
            <h2 onClick={toggleDropdown} className="compareTitle">
                Compare os Pacotes
                <span>
                    <RiArrowDownSLine  className={`dropdownArrow ${isDropdownOpen ? 'open' : ''}`}/>
                </span>

            </h2>

            {isDropdownOpen && <CompareTable />}

            <PackagesIncluded titleIncludedPackage={props.titleIncluded} />
        </section>
    )
}

export default DropdownTable;