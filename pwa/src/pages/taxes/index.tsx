import * as React from "react";
import { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import Breadcrumbs from "../../components/common/breadcrumbs";
import ActionMenu from "../../components/common/actionMenu";
import { useUrlContext } from "../../context/urlContext";
import { isLoggedIn } from "../../services/auth";

function Index() {
  const context = useUrlContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isLoggedIn()) 
        getTaxes();
    }
  }, []);

  console.log({data})
  const getTaxes = () => {
    fetch(`${context.apiUrl}/gateways/vrc/taxes`, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((response) => {setData(response)})
  }


  return <>
    <Layout>
        <main>
        <div className="row">
            <div className="col-12 col-sm-3">
            <ActionMenu />
            </div>
            <div className="col-12 col-sm-9">
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Mijn belastinggegevens', href: '/taxes' }]} />
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Belastinggegevens</h1>
            <br /><br />
            {
                <>
                <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }} >
                    Bsn: <span style={{ textAlign: "right", float: "right" }}>{ data?.burgerservicenummer }</span>
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
