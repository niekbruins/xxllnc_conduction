import * as React from "react";
import { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import Breadcrumbs from "../../components/common/breadcrumbs";
import ActionMenu from "../../components/common/actionMenu";
import { useUrlContext } from "../../context/urlContext";
import { getUser, isLoggedIn } from "../../services/auth";

function Index() {
  const context = useUrlContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isLoggedIn()) 
        getPerson();
    }
  }, []);

  const getPerson = () => {
    fetch(`${context.apiUrl}/gateways/brp/ingeschrevenpersonen/${getUser().username}?expand=ouders,kinderen`, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((response) => {
        if (response.error !== undefined && response.error.status !== undefined && response.error.status === 404) {
          getPersonWithoutExpand();
        } else {
          setData(response);
        }
      });
  }

  const getPersonWithoutExpand = () => {
    fetch(`${context.apiUrl}/gateways/brp/ingeschrevenpersonen/${getUser().username}`, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((response) => {setData(response)});
  }

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
                  Naam: <span style={{ textAlign: "right", float: "right" }}>{ data?.naam?.aanschrijfwijze }</span>
              </h5>
              <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
                Geslachtsaanduiding: <span style={{ textAlign: "right", float: "right" }}>{ data?.geslachtsaanduiding }</span>
              </h5>
              <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
                Leeftijd: <span style={{ textAlign: "right", float: "right" }}>{ data?.leeftijd } ({ data?.geboorte?.datum?.datum })</span>
              </h5>
              <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
                Verblijfsplaats: <span style={{ textAlign: "right", float: "right" }}>{ data?.verblijfplaats?.adresregel1 }, { data?.verblijfplaats?.adresregel2 }</span>
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
