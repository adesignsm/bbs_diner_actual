import React, { useEffect, useState } from "react";
import "./index.css";
import $ from "jquery";

import PopUps from "../PopUps";

const BrunchMenu = () => {
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        const checkTitle = () => {
          if (document.title === "BB's Diner | Brunch Menu") {
            setShowPopUp(true);
            clearInterval(intervalId);
          } else {
            setShowPopUp(false);
          }
        };
    
        const intervalId = setInterval(checkTitle, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    

    const displayToggle = (e) => {
        document.title = "BB's Diner";
        e.target.classList.add("show-nav");
        
        if (e.target.classList.contains("show-nav")) {
            $(".brunch-menu-container").fadeOut(500);

            setTimeout(() => {
                $(".home-page-copy-content").stop().css({"display": "flex"});
                $(".home-page-copy-content").stop().animate({opacity: "1"}, 500);
            }, 500);

            e.target.classList.remove("show-nav");
        }
    }

    const toggleDropdown = (event) => {
        const h3 = event.target;
        const itemDescription = h3.nextElementSibling;
      
        if (itemDescription.style.display === 'block') {
          itemDescription.style.display = 'none';
        } else {
          itemDescription.style.display = 'block';
        }
      }

    return (
        <>
            <div className="brunch-menu-container">
                {showPopUp === true ? <PopUps /> : null}
                <nav className="navigation">
                    <ul>
                        <li className="nav-toggle" onClick={(e) => displayToggle(e)}><h1>Return</h1></li>
                        <li><h1>Brunch Menu</h1></li>
                        <li>
                            <h3 onClick={(e) => toggleDropdown(e)}>BB's Silog</h3>
                            <ul className="item-description">
                                <li>
                                    breakfast plate with garlic rice, two fried eggs, atsara & your choice of:
                                    <ul>
                                        <li>house made longanisa</li>
                                        <li>corned beef</li>
                                        <li>hash</li>
                                        <li>fried milkfish</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 onClick={(e) => toggleDropdown(e)}>Tortang Talong</h3>
                            <ul className="item-description">
                                <li>
                                    charred eggplant omlette, home fries, pico, aioli
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 onClick={(e) => toggleDropdown(e)}>Marivic's French Toast (Robbie's Remix)</h3>
                            <ul className="item-description">
                                <li>
                                    banana, cocounut dulce, mango compote, toasted almonds
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 onClick={(e) => toggleDropdown(e)}>Sides</h3>
                            <ul className="item-description">
                                <li>Steamed Rice</li>
                                <li>Garlic Rice</li>
                                <li>Egg</li>
                                <li>Hot Sauce</li>
                            </ul>
                        </li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Adobo Fried Chicken</h3>
                          <ul className="item-description">
                            <li>
                              served with house-made habanero
                              pineapple hot sauce, add one piece
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Filipino Spaghetti</h3>
                          <ul className="item-description">
                            <li>
                              all beef hotdog, beef ragu, cheddar cheese
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Pork Sinigang</h3>
                          <ul className="item-description">
                            <li>
                              pork shoulder braised in tamarind both, vegetables
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Ginataan</h3>
                          <ul className="item-description">
                            <li>
                              coconut curry, seasonal vegetables
                            </li>
                          </ul>
                        </li>
                    </ul>
                    <ul>
                        <li><h1>Brunch Cocktails</h1></li>
                        <li>
                            <h3 onClick={(e) => toggleDropdown(e)}>Tito Ceazar</h3>
                            <ul className="item-description">
                              <li>
                                vodka, clamato, tamarind, horseradish, hot saice, garnished with extreme bean & pickled onion
                              </li>
                            </ul>
                        </li>
                        <li>
                            <h3 onClick={(e) => toggleDropdown(e)}>Shandy</h3>
                            <ul className="item-description">
                              <li>
                                choice of juice with beer
                              </li>
                            </ul>
                        </li>
                        <li>
                            <h3 onClick={(e) => toggleDropdown(e)}>Mimosa</h3>
                            <ul className="item-description">
                              <li>
                                choice of juice with bubbles
                              </li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li><h1>Beverages</h1></li>
                        <li>
                            <h3 onClick={(e) => toggleDropdown(e)}>Coffee</h3>
                            <ul className="item-description">
                                <li>
                                  propeller coffee co.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 onClick={(e) => toggleDropdown(e)}>Tea</h3>
                            <ul className="item-description">
                                <li>chamomile</li>
                                <li>peppermint</li>
                                <li>green</li>
                                <li>lemon ginger</li>
                                <li>chai</li>
                                <li>earl grey</li>
                                <li>english breakfast</li>
                            </ul>
                        </li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Juice</h3>
                          <ul className="item-description">
                            <li>calamansi</li>
                            <li>mango</li>
                            <li>pineapple</li>
                            <li>orange</li>
                            <li>guava</li>
                          </ul>
                        </li>
                        <li><h3>Pop</h3></li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Beer</h3>
                          <ul className="item-description">
                            <li>san miguel</li>
                            <li>negra modelo</li>
                            <li>miller high life</li>
                          </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default BrunchMenu;