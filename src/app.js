const fetch = require('node-fetch');
const btoa = require('btoa')

async function createIncident (action, settings) {
    let bodyData = (action.params.BODY || "").trim();
    if (typeof bodyData !== 'string'){
        bodyData = JSON.stringify(bodyData)
    }
    return genericRestAPI(action, settings, bodyData, "POST");
}

async function genericRestAPI(action, settings, bodyData, method) {
    /**
     * Send Default API Request
     */    
    const url = action.params.URL || settings.URL;
    const user = action.params.USER || settings.USER;
    const pass = action.params.PASSWORD || settings.PASSWORD;

    const host =  `${url}/api/now/table/incident`;
    const response = await fetch(host,  {
        method: `${method}`,
        headers: {
          'Authorization': 'Basic '+btoa(`${user}:${pass}`),
             'Accept': 'application/json',
              'Content-Type': 'application/json'
        },
        body: bodyData
    })
    if (response.status < 200 || response.status > 299) {
        throw response
    }
    return response.json();
}

module.exports = {
    createIncident: createIncident
}


