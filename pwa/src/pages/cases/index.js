import * as React from "react"
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import Layout from "../../components/common/layout";
import Breadcrumbs from "../../components/common/breadcrumbs";
import ActionMenu from "../../components/common/actionMenu";
import { useUrlContext } from "../../context/urlContext";
import { isLoggedIn } from "../../services/auth";

const IndexPage = () => {
  let context = useUrlContext();

  const [data, setData] = useState(null);
  const [zsData, setZsData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isLoggedIn()) {
        getCases();
        getZsCases();
      }
    }
  }, []);

  const getCases = () => {
    fetch(context.apiUrl + "/gateways/zaken/zaken", {
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

  const getZsCases = () => {
    fetch(context.apiUrl + "/gateways/zaaksysteem/case", {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        if (data) {
          setZsData(data);
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
              <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Mijn aanvragen', href: '/cases' }]} />
              <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Mijn aanvragen</h1>
              <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
                Zaaksysteem aanvragen
              </h4>
              <div className="utrecht-html">
                <table lang="nl" summary="Overzicht van zaken" style={{ width: "100%" }}>
                  <thead>
                  <tr>
                    <th scope="col">identificatie</th>
                    <th scope="col">type</th>
                    <th scope="col" className="numeric">registratie datum</th>
                    <th scope="col" className="numeric">bronorganisatie</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      zsData?.result?.instance.rows &&
                      zsData?.result?.instance.rows.filter((_, i) => i < 10).map(zaak => (
                          <tr key={zaak?.reference}>
                            <td>
                              <Link to={`/zaaksysteem?id=${zaak?.reference}`}>
                                {zaak?.reference}
                              </Link>
                            </td>
                            <td>{zaak?.instance.casetype.preview}</td>
                            <td className="numeric">{zaak?.instance.date_created}</td>
                            <td className="numeric">{zaak?.instance.route.instance.group.instance.group_id}</td>
                          </tr>
                        ))
                    }
                  </tbody>
                </table>
              </div>
              <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
                Open zaak aanvragen
              </h4>
              <div className="utrecht-html">
                <table lang="nl" summary="Overzicht van zaken" style={{ width: "100%" }}>
                  <thead>
                  <tr>
                    <th scope="col">identificatie</th>
                    <th scope="col">type</th>
                    <th scope="col" className="numeric">registratie datum</th>
                    <th scope="col" className="numeric">bronorganisatie</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      data && data.results &&
                        data.results.filter((_, i) => i < 10).map(zaak => (
                          <tr key={zaak?.uuid}>
                            <td>
                              <Link to={`/case?id=${zaak?.uuid}`}>
                                {zaak?.identificatie}
                              </Link>
                            </td>
                            <td className="numeric">{zaak?.type || '-'}</td>
                            <td className="numeric">{zaak?.registratiedatum}</td>
                            <td className="numeric">{zaak?.bronorganisatie}</td>
                          </tr>
                        ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </Layout>

  )
}

export default IndexPage
