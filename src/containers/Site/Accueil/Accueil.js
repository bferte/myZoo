import React, { Component } from 'react';
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import banderole from "../../../assets/images/banderole.png";
import logo from "../../../assets/images/logo.png";

class Accueil extends Component {
    componentDidMount = () => {
        document.title = "parc d'animaux MyZoo";
    }

    render() { 
        return (
            <div>
            <img src={banderole} alt="banderole" className="img-fluid"/>
                <TitreH1 bgColor="bg-success">Venez visiter le parc d'animaux MyZoo</TitreH1>
                <div className="container">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla enim in officiis hic quidem error ipsum. Delectus modi praesentium aut? Voluptates maiores eius, porro odio sapiente alias obcaecati aliquid. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta obcaecati, hic commodi ad est quis odio soluta inventore quod consectetur mollitia cum molestias? Atque, debitis. Sequi odio ipsa molestiae molestias.
                    </p>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-md-6">
                            <img src={logo} alt="logo du site" className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus, perspiciatis et nesciunt nam hic saepe architecto? Aperiam, quo ut a ea laboriosam mollitia, suscipit impedit, sint tenetur rerum incidunt!
                        </div>
                        <div className="col-12 col-md-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus, perspiciatis et nesciunt nam hic saepe architecto? Aperiam, quo ut a ea laboriosam mollitia, suscipit impedit, sint tenetur rerum incidunt!
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={logo} alt="logo du site" className="img-fluid"/>
                        </div>

                    </div>
                   
                </div>
            </div>
          );
    }
}
 
export default Accueil;