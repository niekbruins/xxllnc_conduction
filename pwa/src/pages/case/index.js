import * as React from "react"
import { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import Breadcrumbs from "../../components/common/breadcrumbs";
import ActionMenu from "../../components/common/actionMenu";
import { useUrlContext } from "../../context/urlContext";
import { isLoggedIn } from "../../services/auth";
import { useLocation } from '@reach/router';
import queryString from 'query-string';

const IndexPage = () => {
  const location = useLocation();
  const context = useUrlContext();

  const [data, setData] = useState(null);
  const [caseId, _] = useState(queryString.parse(location?.search))

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isLoggedIn()) {
        getCases();
      }
    }
  }, []);

  const getCases = () => {
    fetch(context.apiUrl + "/gateways/zaken/zaken/" + caseId?.id, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        if (data) {
          setData(data);
        } else {
          console.log('Not sure what to do here')
        }
      });
  }

  return (
    <Layout>
    <main>
      <div className="row">
        <div className="col-12 col-sm-3">
          <ActionMenu />
        </div>
        <div className="col-12 col-sm-9">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Mijn aanvragen', href: '/cases' }, , { name: data?.identificatie, href: '/cases?id=' + data?.identificatie }]} />
          <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Zaak details</h1>
          <br /><br />
          <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Algemene gegevens</h3>
          <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
            identificatie: <span style={{ textAlign: "right", float: "right" }}>{ data?.identificatie }</span>
          </h5>
          <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
            omschrijving: <span style={{ textAlign: "right", float: "right" }}>{ data?.omschrijving }</span>
          </h5>
        </div>
      </div>
    </main>
  </Layout>

  )
}

export default IndexPage
