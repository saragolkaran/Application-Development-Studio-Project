const advanceDataQuery = {
    festivalId: null,
    performanceId: null,
    startTime__gt: null,
    endTime: null,
    page : 0,
    pageSize : 5
}

const paginationFunctionAdv = {
    gottoFirstPage: function(){
        advanceDataQuery['page'] = 0;
    },
    changePage: function(delta){
        advanceDataQuery['page'] += parseInt(delta);
    },
    changePageSize: function(newPageSize){
        advanceDataQuery['pageSize'] = newPageSize;
    }
}
const advanceDataUrl = 'http://localhost:3000/advance/data';

function populateAdvanceDataTable(data) {
    console.log(data);
   const dataTableHTML = data.map(({performanceid, festivalid,starttime,endtime,popularity}) => `
    <tr>
    <td>${performanceid}</td>
    <td>${festivalid}</td>
    <td>${starttime}</td>
    <td>${endtime}</td>
    <td>${popularity}</td>
  </tr>
    `);
    $('#advance-data-tbody').html(dataTableHTML);
}


function getAdvanceDataFromBackend(callback) {
    $.get(advanceDataUrl, advanceDataQuery)
        .done((result) => callback(null, result))
            .fail((message) => callback(message, null));
}

function refreshAdvanceDataTable() {
    getAdvanceDataFromBackend(function (err, data) {
        if (err) return alert(err);
        populateAdvanceDataTable(data);
    });
}

function paginateAdvanceData(event){
    const fn = $(this).attr('fn');
    const value = $(this).attr('value') || $(this).val();
    paginationFunctionAdv[fn](value);
    refreshAdvanceDataTable();
}

function registerAdvanceDataPaginationForm(){
    $('#advance-data-first-page').click(paginateAdvanceData);
    $('#advance-data-next-page').click(paginateAdvanceData);
    $('#advance-data-previous-page').click(paginateAdvanceData);
    $('#advance-data-page-size').change(paginateAdvanceData)
}

function filterAdvanceData(event) {
    $('#advance-data-filter-form input').not(':input[type=submit]')
        .each((idx, input) => {
            //console.log(idx,input)
            advanceDataQuery[$(input).attr('key')] = $(input).val();
        });
    // console.log(basicDataQuery);


    refreshAdvanceDataTable();
    return false;
}

function registerAdvanceDataFilterForm() {
    $('#advance-data-filter-form').submit(filterAdvanceData);
}

$(document).ready(function () {
    registerAdvanceDataFilterForm();
    registerAdvanceDataPaginationForm();
});