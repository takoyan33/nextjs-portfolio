import Header from "../components/Components/ui/Header";
import Footer from "../components/Components/ui/Footer";
import Timeline from "../components/Components/ui/Timeline";
import {
  HISTORY_LIST,
  JOB_LIST,
  LICENSE_LIST,
} from "../components/Components/data/data";
import React, { useState } from "react";
import Head from "next/head";

export default function History() {
  return (
    <>
      <Head>
        <title>To You Design - About</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/bb61864944.js"
          crossOrigin="anonymous"
        ></script>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
      <Header />
      <nav className="container">
        <div style={{ textAlign: "center", padding: 50 }}></div>

        {/*ここから学歴*/}
        <div className="padding">
          <div className="max_width">
            <div className="flx">
              <div className="flx_el">
                <h2 className="main__title">History</h2>
                <h3 className="main__subtitle">過去の経歴</h3>
              </div>
              <dl>
                {HISTORY_LIST.map((history, index) => (
                  <Timeline
                    key={index}
                    title={history.title}
                    date={history.date}
                    body={history.body}
                  />
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/*ここから職歴*/}
        <div className="padding">
          <div className="max_width">
            <div className="flx">
              <div className="flx_el">
                <h2 className="main__title">Job</h2>
                <h3 className="main__subtitle">過去の経歴</h3>
              </div>
              <dl>
                {JOB_LIST.map((job, index) => (
                  <Timeline
                    key={index}
                    title={job.title}
                    date={job.date}
                    body={job.body}
                  />
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* ここからLicense*/}
        <section className="license padding max_width">
          <h2 className="main__title">License</h2>
          <h3 className="main__subtitle">資格</h3>
          <table className="license__table">
            <tbody>
              <tr>
                <th>日付</th>
                <th>資格名</th>
              </tr>
              {LICENSE_LIST.map((license, index) => (
                <tr key={index}>
                  <td>{license.date}</td>
                  <td>{license.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </nav>
      <Footer />
    </>
  );
}
