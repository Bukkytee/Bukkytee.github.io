import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/sales";

const TOTAL_BALANCE_SUM_URL = "http://localhost:8080/api/sales/total-balance";

const TOTAL_BALANCE_SUM_BY_MONTH_URL = (month, year) => `http://localhost:8080/api/sales/total-balance/${month}/${year}`;

export const listSalesRecord = () => axios.get(REST_API_BASE_URL);

export const createSalesRecord = (sales) => axios.post(REST_API_BASE_URL, sales);

export const getTotalBalanceSum = () => axios.get(TOTAL_BALANCE_SUM_URL);

export const getTotalMonthlySales = (month, year) => axios.get(TOTAL_BALANCE_SUM_BY_MONTH_URL(month, year));


export const updateSalesRecord = (salesId, sales) => axios.put(REST_API_BASE_URL + "/" + salesId, sales);

export const getSalesRecord = (salesId) => axios.get(REST_API_BASE_URL + "/" + salesId);

export const deleteSalesRecord = (salesId) => axios.delete(REST_API_BASE_URL + "/" + salesId);

export const deleteAllSalesRecords = () => axios.delete(`${REST_API_BASE_URL}/deleteAll`);

export const getRecentTransactions = (page, size) => {
    return axios.get(`${REST_API_BASE_URL}/recent`, {
        params: {page, size},
    });
};