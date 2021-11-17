import * as React from "react"
import Layout from "../../components/common/layout";
import Breadcrumbs from "../../components/common/breadcrumbs";
import ActionMenu from "../../components/common/actionMenu";

const IndexPage = () => {

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
                Hier vind u uw bestaande aanvragen voor verschillende zaken.
              </h4>
              <div className="utrecht-html">
                <table lang="nl" summary="Overzicht van de stemmen voor en tegen het betaald parkeren." style={{ width: "100%" }}>
                  <caption>Hier kunnen we een caption neerzetten</caption>
                  <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col" className="numeric">Status</th>
                    <th scope="col" className="numeric">Startdatum</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Huwelijk</td>
                    <td className="numeric">Pending</td>
                    <td className="numeric">8-11-2021</td>
                  </tr>
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
