const basicResultQuery = {
    festivalId: null
};

const basicResultUrl = 'http://localhost:3000/basic/result';

function populateBasicResultTable(result) {
    // const dataTable.html = Object.entries(data).map
    // ([performanceid, starttime, endtime]) => '
    // <tr>
    // <th scope = "row">${performanceid}</th>
    // <th scope = "row">${starttime}</th>
    // <th scope = "row">${endtime}</th>
    // </tr>
    // `,
    // );
   

};

function getBasicResultFromBackend(callback) {
    $.get(basicResultUrl, basicResultQuery)
        .done((result) => callback(null, result))
        .fail((message) => callback(message, null));
};

function refreshBasicResultTable() {
    getBasicResultFromBackend(function (error, result) {
        if (error) return alert(error);
        populateBasicResultTable(result)
    });
};

function filterResultData(event) {
    $('#basic-result-filter-form input')
        .not(':input[type=submit]')
        .each((idx, input) => {
           //console.log(idx,input);   //for checking purpose 
            basicResultQuery[$(input).attr('key')] = $(input).val();
        });
    validateSubmitButton();
    return false;
};

//validation for filter form
function validateSubmitButton() {
    getBasicResultFromBackend(function (error, result) {
        console.log(result);
        if (error) return alert(error);
        if (result.code == 404) {
            window.alert("No records found");
            location.reload();
        };
        populateBasicResultTable(result);
    });
};

function registerBasicResultFilterForm() {
    $('#basic-result-filter-form').submit(filterResultData);
};


$(document).ready(function () {
    registerBasicResultFilterForm();
    refreshBasicResultTable();
});