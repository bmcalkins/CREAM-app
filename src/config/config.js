let configuration = {
    API_KEY: '6cd659eeb72f5cda524e78dbb3e4d577',
    BASE_URL: 'http://api.stlouisfed.org/fred/series/',
    SERIES_ID: {
        shaded: 'T10Y2Y',
        bar: 'GDPCA',
        line: 'DGS10-T10YIE'
    },
    API_OPTIONAL_PARAMS: {
        GDPCA: {
            frequency: 'a',
            aggregation_method: 'avg'
        }
    }

};

export default configuration;