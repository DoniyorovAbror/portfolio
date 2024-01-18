import React from "react";

const StyleSwitcher = () => {
    return (
        <div id="style-switcher">
            <h2>
                Choose Color
                <a href="#">
                    <i className="fa fa-cog fa-spin"></i>
                </a>
            </h2>
            <div>
                <ul className="colors" id="color1">
                    <li>
                        <a href="#" className="style1"></a>
                    </li>
                    <li>
                        <a href="#" className="style2"></a>
                    </li>
                    <li>
                        <a href="#" className="style3"></a>
                    </li>
                    <li>
                        <a href="#" className="style4"></a>
                    </li>
                    <li>
                        <a href="#" className="style5"></a>
                    </li>
                    <li>
                        <a href="#" className="style6"></a>
                    </li>
                    <li>
                        <a href="#" className="style7"></a>
                    </li>
                    <li>
                        <a href="#" className="style8"></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default StyleSwitcher;
