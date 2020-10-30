const basicDataQuery = {
    festivalId: null,
    performanceId: null,
    startTime__gt: null,
    endTime: null,
    popularity : null,
    page : 0,
    pageSize : 5
}

const paginationFunction = {
    gottoFirstPage: function(){
        basicDataQuery['page'] = 0;
    },
    changePage: function(delta){
        basicDataQuery['page'] += parseInt(delta);
    },
    changePageSize: function(newPageSize){
        basicDataQuery['pageSize'] = newPageSize;
    }
}
const basicDataUrl = 'http://localhost:3000/basic/data';

function populateBasicDataTable(data) {
    console.log(data);
   const dataTableHTML = data.map(({performanceid, festivalid,starttime,endtime}) => `
    <tr>
    <td>${performanceid}</td>
    <td>${festivalid}</td>
    <td>${starttime}</td>
    <td>${endtime}</td>
  </tr>
    `);
    $('#basic-data-tbody').html(dataTableHTML);
}


function getBasicDataFromBackend(callback) {
    $.get(basicDataUrl, basicDataQuery)
        .done((result) => callback(null, result))
            .fail((message) => callback(message, null));
}

function refreshBasicDataTable() {
    getBasicDataFromBackend(function (err, data) {
        if (err) return alert(err);
        populateBasicDataTable(data);
    });
}

function paginateBasicData(event){
    const fn = $(this).attr('fn');
    const value = $(this).attr('value') || $(this).val();
    paginationFunction[fn](value);
    refreshBasicDataTable();
}

function registerBasicDataPaginationForm(){
    $('#basic-data-first-page').click(paginateBasicData);
    $('#basic-data-next-page').click(paginateBasicData);
    $('#basic-data-previous-page').click(paginateBasicData);
    $('#basic-data-page-size').change(paginateBasicData)
}

function filterBasicData(event) {
    $('#basic-data-filter-form input').not(':input[type=submit]')
        .each((idx, input) => {
            //console.log(idx,input)
            basicDataQuery[$(input).attr('key')] = $(input).val();
        });
    // console.log(basicDataQuery);


    refreshBasicDataTable();
    return false;
}

function registerBasicDataFilterForm() {
    $('#basic-data-filter-form').submit(filterBasicData);
}

$(document).ready(function () {
    registerBasicDataFilterForm();
    registerBasicDataPaginationForm();
});