import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/layout";
import {useUrlContext} from "../context/urlContext";
import DigiDImg from "../images/digid_button.svg";
import { isLoggedIn } from "../services/auth";
import { menuItems } from "../components/common/actionMenu";

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
                <button className="utrecht-button" type="button">
                  <b className="utrecht-b" style={{ verticalAlign: 'middle' }}>
                    MIJN GEGEVENS
                  </b>
                </button>
              </Link>
              :
              <a className="utrecht-link" href={context.baseUrl + "/digid/login?returnUrl=" + context.frontendUrl + "/redirect"}>
                <button className="utrecht-button" type="button">
                  <img src={DigiDImg} width='55px' height='55px' />
                  <b className="utrecht-b" style={{textAlign: 'center', verticalAlign: 'middle', paddingLeft: '45px'}}>
                    INLOGGEN
                  </b>
                </button>
              </a>
        }

          <br/>
          <br/>
          {menuItems.map(menuItem => (
              <>
              <Link to="/cases">
                <button className="utrecht-button" type="button">
                  <b className="utrecht-b" style={{verticalAlign: 'middle'}}>
                    Mijn aanvragen
                  </b>
                </button>
              </Link>

              <br/>
              <br/>
              </>
            ))}

          </div>
        </main>
      </Layout>

  )
}

export default IndexPage
