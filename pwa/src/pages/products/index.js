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
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Diensten', href: '/products' }]} />
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Diensten</h1>
            <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
              Hier vind u diensten en producten waar u gebruik van kunt maken.
            </h4>

            <div className="row">
              <div className="col-12 col-sm-4">
                {/*<Card*/}
                {/*  date={new Date()}*/}
                {/*  href="https://github.com"*/}
                {/*  onClick={function noRefCheck() { }}*/}
                {/*  subTitle="Verhuizen, emigreren, briefadres, geheimhouding persoonsgegevens."*/}
                {/*  title="Verhuizen"*/}
                {/*/>*/}
              </div>
              <div className="col-12 col-sm-4">
                {/*<Card*/}
                {/*  date={new Date()}*/}
                {/*  href="https://github.com"*/}
                {/*  onClick={function noRefCheck() { }}*/}
                {/*  subTitle="Verhuizen, emigreren, briefadres, geheimhouding persoonsgegevens."*/}
                {/*  title="Verhuizen"*/}
                {/*/>*/}
              </div>
              <div className="col-12 col-sm-4">
                {/*<Card*/}
                {/*  date={new Date()}*/}
                {/*  href="https://github.com"*/}
                {/*  onClick={function noRefCheck() { }}*/}
                {/*  subTitle="Verhuizen, emigreren, briefadres, geheimhouding persoonsgegevens."*/}
                {/*  title="Verhuizen"*/}
                {/*/>*/}
              </div>
              <div className="col-12 col-sm-4">
                {/*<Card*/}
                {/*  date={new Date()}*/}
                {/*  href="https://github.com"*/}
                {/*  onClick={function noRefCheck() { }}*/}
                {/*  subTitle="Verhuizen, emigreren, briefadres, geheimhouding persoonsgegevens."*/}
                {/*  title="Verhuizen"*/}
                {/*/>*/}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>

  )
}

export default IndexPage
