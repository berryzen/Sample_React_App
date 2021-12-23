 import React, { useRef, useState } from "react";

//Voisi valita url ajan kirjoittamalla sen nappuloihin, voi olla placeholder aika esimerkkinä
//Käy for loopilla kerran läpi json ja merkkaa siinä arvot

function App() {
  const baseURL = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart";

  const get_id = useRef(null);
  const get_title = useRef(null);

  const [getResult, setGetResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  async function getAllData() {
    try {
      const res = await fetch(`${baseURL}/range?vs_currency=eur&from=1577836800&to=1609376400`);

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        length: res.headers.get("Content-Length"),
        data: data,
      };

      Object.values(data).forEach(value => {
        console.log(value);
     });

      setGetResult(fortmatResponse(data));
    } catch (err) {
      setGetResult(err.message);
    }
  }

  // async function getDataById() {
  //   const id = get_id.current.value;

  //   if (id) {
  //     try {
  //       const res = await fetch(`${baseURL}/tutorials/${id}`);

  //       if (!res.ok) {
  //         const message = `An error has occured: ${res.status} - ${res.statusText}`;
  //         throw new Error(message);
  //       }

  //       const data = await res.json();

  //       const result = {
  //         data: data,
  //         status: res.status,
  //         statusText: res.statusText,
  //         headers: {
  //           "Content-Type": res.headers.get("Content-Type"),
  //           "Content-Length": res.headers.get("Content-Length"),
  //         },
  //       };

  //       setGetResult(fortmatResponse(result));
  //     } catch (err) {
  //       setGetResult(err.message);
  //     }
  //   }
  // }

  // async function getDataByTitle() {
  //   const title = get_title.current.value;

  //   if (title) {
  //     try {
  //       // const res = await fetch(`${baseURL}/tutorials?title=${title}`);

  //       let url = new URL(`${baseURL}/tutorials`);
  //       const params = { title: title };
  //       url.search = new URLSearchParams(params);

  //       const res = await fetch(url);

  //       if (!res.ok) {
  //         const message = `An error has occured: ${res.status} - ${res.statusText}`;
  //         throw new Error(message);
  //       }

  //       const data = await res.json();

  //       const result = {
  //         status: res.status + "-" + res.statusText,
  //         headers: {
  //           "Content-Type": res.headers.get("Content-Type"),
  //           "Content-Length": res.headers.get("Content-Length"),
  //         },
  //         data: data,
  //       };

  //       setGetResult(fortmatResponse(result));
  //     } catch (err) {
  //       setGetResult(err.message);
  //     }
  //   }
  // }

  // const clearGetOutput = () => {
  //   setGetResult(null);
  // }

  return (
    <div className="card">
      <div className="card-header">React Fetch GET - BezKoder.com</div>
      <div className="card-body">
        <div className="input-group input-group-sm">
          <button className="btn btn-sm btn-primary" onClick={getAllData}>Get All</button>

          <input type="text" ref={get_id} className="form-control ml-2" placeholder="Id" />
          <div className="input-group-append">
            {/* <button className="btn btn-sm btn-primary" onClick={getDataById}>Get by Id</button> */}
          </div>

          <input type="text" ref={get_title} className="form-control ml-2" placeholder="Title" />
          <div className="input-group-append">
            {/* <button className="btn btn-sm btn-primary" onClick={getDataByTitle}>Find By Title</button> */}
          </div>

          {/* <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button> */}
        </div>   
        
        { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div> }
      </div>
    </div>
  );
}

export default App;
