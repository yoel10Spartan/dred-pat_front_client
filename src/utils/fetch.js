const baseUrl = process.env.REACT_APP_API_URL;

const fetchToGet = ( endpoint, data, method = 'GET' ) => {
    const url = `${ baseUrl }${ endpoint }`;
    if ( method === 'GET' ) {
        return fetch( url );
    }
}

export {
    fetchToGet
}