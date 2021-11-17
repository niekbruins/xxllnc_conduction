import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/layout";
import {useUrlContext} from "../context/urlContext";
import DigiDImg from "../images/digid_button.svg";
import { getUser, isLoggedIn, logout } from "../services/auth";

const IndexPage = () => {
  const context = useUrlContext();

  React.useEffect(() => {
    console.log(context.apiUrl);
    console.log(context.meUrl);
  }, []);

  return (
      <Layout>
        <main>
        <title>Demodam</title>
          <div style={{textAlign: 'left'}}>
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Welkom</h1>
            <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
              Dit is de skeleton NL Design applicatie.
            </h4>
            <p className="utrecht-p">
            Het doel van deze skeleton applicatie is om meerdere design tokens te testen over een set NL Design componenten. Ook zou je deze applicatie als template kunnen gebruiken om zelf een app te bouwen in NL Design. De link naar onze github repo: https://github.com/ConductionNL/nl-design-skeleton-gatsby
          </p>

          {
            isLoggedIn() ?
              <Link to="/data">
                <button class="utrecht-button" type="button">
                  <b class="utrecht-b" style={{ verticalAlign: 'middle' }}>
                    MIJN GEGEVENS
                  </b>
                </button>
              </Link>
              :
              <a className="utrecht-link" href={context.baseUrl + "/digid/login?returnUrl=" + context.frontendUrl + "/redirect"}>
                <button class="utrecht-button" type="button">
                  <img src={DigiDImg} width='55px' height='55px' />
                  <b className="utrecht-b" style={{textAlign: 'center', verticalAlign: 'middle', paddingLeft: '45px'}}>
                    INLOGGEN
                  </b>
                </button>
              </a>
        }

          <br/>
          <br/>

            <Link to="/cases">
              <button class="utrecht-button" type="button">
                <b className="utrecht-b" style={{verticalAlign: 'middle'}}>
                  Mijn aanvragen
                </b>
              </button>
            </Link>

          <br/>
          <br/>

            <Link to="/products">
              <button class="utrecht-button" type="button">
                <b className="utrecht-b" style={{verticalAlign: 'middle'}}>
                  Diensten
                </b>
              </button>
            </Link>

          <br />
          <br />

            <Link to="/vault">
              <button class="utrecht-button" type="button">
                <b className="utrecht-b" style={{verticalAlign: 'middle'}}>
                  Mijn Kluis
                </b>
              </button>
            </Link>

          <br />
          <br />

            <Link to="/data">
              <button class="utrecht-button" type="button">
                <b className="utrecht-b" style={{verticalAlign: 'middle'}}>
                  Mijn gegevens
                </b>
              </button>
            </Link>

          <br />
          <br />
          </div>
        </main>
      </Layout>

  )
}

export default IndexPage
