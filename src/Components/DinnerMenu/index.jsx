import React, { useEffect, useState } from "react";
import "./index.css";
import $ from "jquery";

import PopUps from "../PopUps";

const DinnerMenu = () => {
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        const checkTitle = () => {
          if (document.title === "BB's Diner | Dinner Menu") {
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
            $(".dinner-menu-container").fadeOut(500);

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
            <div className="dinner-menu-container">
                {showPopUp === true ? <PopUps /> : null}
                <nav className="navigation">
                    <ul>
                        <li className="nav-toggle" onClick={(e) => displayToggle(e)}><h1>Return</h1></li>
                        <li><h1>Dinner Menu</h1></li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Ahi Tuna Kinilaw</h3>
                          <ul className="item-description">
                            <li>
                              coconut, cane vinegar, calamansi,
                              bell pepper, avocado, cassava chips
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Pancit Canton</h3>
                          <ul className="item-description">
                            <li>
                              pancit canton, sweet soy, vegetables,
                              tofu, lemon, chili oil
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Adobo Fried Chicken</h3>
                          <ul className="item-description">
                            <li>
                              served with house-made habanero
                              pineapple hot sauce
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
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Pork Coppa Steak</h3>
                          <ul className="item-description">
                            <li>
                              ensalada pakwan (pickled watermelon rind, vinegar, shallots, fish sauce, lime),
                              tamarind sauce
                            </li>
                          </ul>
                        </li>
                        <li><h3>Steamed Rice</h3></li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Calamansi Pie</h3>
                          <ul className="item-description">
                            <li>
                              graham cracker crust, orange blossom meringue
                            </li>
                          </ul>
                        </li>
                    </ul>

                    <ul>
                        <li><h1>House Cocktails</h1></li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Kiss of Life</h3>
                          <ul className="item-description">
                            <li>
                              atchuete blanco, strega, amontillado sherry,
                              pineapple, agave
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Pink Matter</h3>
                          <ul className="item-description">
                            <li>
                              gumamela rum, oat milk, calamansi cordial, ginger beer
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>BBs G&T</h3>
                          <ul className="item-description">
                            <li>
                              gin, calamansi cordial, tonic
                            </li>
                          </ul>
                        </li>
                    </ul>

                    <ul>
                        <li><h1>Beverages</h1></li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Classic Cocktails</h3>
                          <ul className="item-description">
                            <li>french 75</li>
                            <li>spicy margarita</li>
                            <li>last word</li>
                            <li>el diablo</li>
                            <li>cosmopolitan</li>
                          </ul>
                        </li>
                        <li><h3>Bartenders Choice</h3></li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Beer</h3>
                          <ul className="item-description">
                            <li>san miguel</li>
                            <li>negra modelo</li>
                            <li>miller high life</li>
                          </ul>
                        </li>
                        <li>
                          <h3 onClick={(e) => toggleDropdown(e)}>Bangarang Hard Seltzer</h3>
                          <ul className="item-description">
                            <li>
                              tropical bellini
                            </li>
                          </ul>
                        </li>
                        <li><h3>Pop</h3></li>
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
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default DinnerMenu;