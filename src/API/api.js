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
        await fetch(url, setting);
        let lastParamIndx = url.lastIndexOf('/') + 1;
        let urlWithoutParam = url.slice(0, lastParamIndx);
        url = urlWithoutParam;
        setting = {};
        console.log("url", url);
        setting.method = "GET";
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