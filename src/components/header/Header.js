import React, { useState } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container } from "react-bootstrap";
import images from '../../assets/images.png';
import style from './Header.module.css';
import axios from "axios";

const Header = () => {
    const [filteredCards, setFilteredCards] = useState([]);
    const LoadCard = [];
    // const cardCtx = useContext(CartContext);

    // const changeCardHandler = (e) => {
    //     cardCtx.filteredCards(e.target.value);
    // }

    const changeCardHandler = (event) => {
        const getStatus = event.target.value;
        axios.get(`https://rickandmortyapi.com/api/character/?status=${getStatus}`)
        .then(response => {
            for (const key in response.data.results) {
                LoadCard.push({
                  id: response.data.results[key].id,
                  name: response.data.results[key].name,
                  image: response.data.results[key].image,
                  status: response.data.results[key].status,
                  location: response.data.results[key].location.name
                });
            }
        }).catch(e => console.log(e));
        console.log([...filteredCards, ...LoadCard]);
        setFilteredCards([...filteredCards, ...LoadCard]);

    }

    return (
        <div className="row align-items-start">
            <ul className="nav row align-items-start justify-content-space-between">
                <li className="col nav-item">
                    <a className="nav-link active" href="#">
                        <Image  
                            className={style.logo} 
                            src={images}
                        />
                    </a>
                </li>
                
                <li className="col nav-item justify-content-space-between">
                    <div className="row">    
                        <DropdownButton
                            id="dropdown-button"
                            variant="secondary"
                            menuVariant="dark"
                            title="Status"
                            className="col mt-4 d-flex justify-content-end "
                        >
                            <Dropdown.Item
                                value="unknown" 
                                onClick={changeCardHandler}
                            >
                                Unknown
                            </Dropdown.Item>

                            <Dropdown.Item 
                                value="alive"
                                onClick={changeCardHandler}
                            >
                                 Alive
                            </Dropdown.Item>

                            <Dropdown.Item 
                                value="dead "
                                onClick={changeCardHandler}
                            >
                                Dead
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </li>
            </ul>

            <Container className="row nav-item">
                <h2 className={style.title}>
                    The Rick and Morty API
                </h2>
            </Container>
        </div>
    );
};

export default Header;