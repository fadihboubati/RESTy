// const getLastItem = url => url.substring(url.lastIndexOf('/') + 1);

export const fetchData = async (myUrl, method, text) => {
    let setting = {};

    let res;
    let url = myUrl;
    console.log("method: ", method);
    if (method === "POST" || method === 'PUT') {
        setting.method = method;
        setting.body = text; // body data type must match "Content-Type" header
        setting.headers = {'Content-Type': 'application/json'};
        // setting.mode = "no-cors";
        res = await fetch(url, setting);

    } else if (method === "DELETE") {
        setting.method = method
        await fetch(url, setting); // delete
        let lastParamIndx = url.lastIndexOf('/') + 1;
        let urlWithoutParam = url.slice(0, lastParamIndx);
        url = urlWithoutParam;
        setting = {};
        console.log("url", url);
        setting.method = "GET";
        res = await fetch(url, setting);

    }
    else {
        setting.method = method;
        res = await fetch(url, setting); // method === "GET"
    }
    console.log("setting: ",setting);
    console.log("API - res", res);
    
    const body = await res.json();
    console.log("API - body", body);
    
    return { "body": body, "headers": res.headers };
};

// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }