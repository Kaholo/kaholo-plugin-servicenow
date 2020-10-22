const fetch = require('node-fetch');
const btoa = require('btoa')

async function createIncident (action, settings) {
    /**
     * Set status of version to released inside a given project.
     */
    var bodyData = action.params.BODY;
    if(typeof action.params.BODY != 'string'){
        bodyData = JSON.stringify(action.params.BODY)
    }
    const method = "POST"
    return await genericRestAPI(action,settings, bodyData,method)
}

async function genericRestAPI(action,settings, bodyData, method) {
    /**
     * Send Default API Request
     */    
    
    const host = action.params.URL + "/api/now/table/incident";
    const response = await fetch(host,  {
        method: `${method}`,
        headers: {
          'Authorization': 'Basic '+btoa(`${action.params.USER}:${action.params.PASSWORD}`),
             'Accept': 'application/json',
              'Content-Type': 'application/json'
        },
        body: bodyData
    })
    if ( response.status < 200 || response.status > 299) {
        throw response
    }
    return JSON.parse(await response.text());
}

module.exports = {
    createIncident: createIncident
}


