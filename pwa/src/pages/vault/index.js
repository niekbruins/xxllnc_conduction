import * as React from "react"
import Layout from "../../components/common/layout";
import Breadcrumbs from "../../components/common/breadcrumbs";
import ActionMenu from "../../components/common/actionMenu";
import { documentDownload } from "../../components/utility/DocumentDownload";
import { useEffect } from 'react';
import { getUser } from "../../services/auth";
import { useUrlContext } from "../../context/urlContext";

function Index() {

  const context = useUrlContext();

  const [claims, setClaims] = React.useState(null);

  useEffect(() => {
    if (getUser() !== undefined && getUser() !== null) {
      fetch(context.apiUrl + "/gateways/waardepapieren-register/certificates?person=" + getUser().bsn, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then((data) => {
          setClaims(data['hydra:member']);
          console.log('Certs:')
          console.log(data)
        });
    }
      }, []);

      return <>
      <Layout>
        <main>
          <div className="row">
            <div className="col-12 col-sm-3">
              <ActionMenu />
            </div>
            <div className="col-12 col-sm-9">
              <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Mijn gegevens', href: '/data' }]} />
              <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Identiteit</h1>
              <br /><br />
              {
                <>
                  <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Persoonlijke gegevens</h3>
                  <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
                      Bsn: <span style={{ textAlign: "right", float: "right" }}>{ data?.burgerservicenummer }</span>
                  </h5>
                  <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
                      Naam: <span style={{ textAlign: "right", float: "right" }}>{ data?.naam?.aanhef }</span>
                  </h5>
                </>
              }
            </div>
          </div>
        </main>
      </Layout>
    </>
  
  }

export default Index
