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
    fetch(context.apiUrl + "/gateways/zaaksysteem/case/" + caseId?.id, {
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
  console.log({data: data?.result.instance})
  return (
    <Layout>
      <main>
        <div className="row">
          <div className="col-12 col-sm-3">
            <ActionMenu />
          </div>
          <div className="col-12 col-sm-9">
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Mijn aanvragen', href: '/cases' }, , { name: data?.result.instance.id, href: '/cases?id=' + data?.result.instance.id }]} />
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">{`Zaak details ${data?.result.instance.casetype.preview || ''}`}</h1>
            <br /><br />
            <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Aanvrager</h3>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Voornaam: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.requestor.instance.subject.instance.first_names }</span>
            </h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Achternaam: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.requestor.instance.subject.instance.family_name }</span>
            </h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Telefoon: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.requestor.instance.subject.instance.phone_number }</span>
            </h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Email: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.requestor.instance.subject.instance.email_address }</span>
            </h5>
            <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Algemene gegevens</h3>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Zaaknummer: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.id }</span>
            </h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Zaaktype: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.casetype.preview }</span>
            </h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Status: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.phase }</span>
            </h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Behandelaar: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.route.preview }</span>
            </h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Registratiedatum: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.date_of_registration }</span>
            </h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Streefafhandeldatum: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.date_target }</span>
            </h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
              Vertrouwelijkheid: <span style={{ textAlign: "right", float: "right" }}>{ data?.result.instance.confidentiality.mapped }</span>
            </h5>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
