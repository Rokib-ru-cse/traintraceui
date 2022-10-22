const baseURL = "http://localhost:7171/api/";

const CountryApi = {
    Country: baseURL + "Country/"
}

const LocationApi = {
    Location: baseURL + "Location/",
    LocationByTrainId: baseURL + "Location/trainid/",
}

const ReportApi = {
    Report: baseURL + "Report/",
}

const TrainApi = {
    Train: baseURL + "Train/",
}

export const apiEndpoints = {
    CountryApi,
    LocationApi,
    ReportApi,
    TrainApi
}
