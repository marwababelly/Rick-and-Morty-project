import React from "react";
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import style from './Header.module.css';
import images from '../../assets/images.png';

const Header = () => {
    return (
        <div className="row align-items-start">
            <ul className="nav row align-items-start justify-content-space-between">
                <li className="col nav-item">
                    <a className="nav-link active" href="#">
                        <Image  className={style.pic}  src={images}/>
                    </a>
                </li>
                
                <li className="col nav-item justify-content-space-between bg-red">
                    <div className="row">    
                        <DropdownButton
                            id="dropdown-button-dark-example1"
                            variant="secondary"
                            menuVariant="dark"
                            title="Name"
                            className="col mt-4"
                        >
                            <Dropdown.Item href="#/action-1" active>Bepisian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Michael Jenkins</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Mr. Meeseeks</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Shleemypants</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            menuVariant="dark"
                            title="State"
                            className="col mt-4"
                        >
                            <Dropdown.Item href="#/action-1" active>Unknown</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Alive</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Dead</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Header;