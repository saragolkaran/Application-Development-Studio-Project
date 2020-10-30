//algo only fucntion

//sorted performances by end time
function getPerformanceAlgo(performances) {
    //array
    // performances.sort(function (a, b) { return a.endtime > b.endtime });
    performances.sort(function(a, b){return a.endtime.localeCompare(b.endtime)});
    // var result = [performances[0]];
    var result = [{
        performanceid: parseInt(performances[0].performanceid),
        starttime: performances[0].starttime.replace(/:/g, "").slice(0, -2),
        endtime: performances[0].endtime.replace(/:/g, "").slice(0, -2)
    }]
    for (var i = 0; i < performances.length; i++) {
        if (result[result.length - 1].endtime <= performances[i].starttime) {
            // console.log(result);
            // result.push(performances[i]);
            result.push({
                performanceid: parseInt(performances[i].performanceid),
                starttime: performances[i].starttime.replace(/:/g, "").slice(0, -2),
                endtime: performances[i].endtime.replace(/:/g, "").slice(0, -2)
            });
            // console.log(performances[i]);
        }
    }
    return result;
}

//adv
function getPerformanceWithPopularityAlgo(performancesWithPopularity){
    //array
    performancesWithPopularity.sort(function(a, b){return a.endtime.localeCompare(b.endtime)});

    var result = [];
    var popularity = [];
    for(var p = 0; p < performancesWithPopularity.length; p++){
        popularity.push(performancesWithPopularity[p].popularity);
        result.push([performancesWithPopularity[p]]);
    }
    //console.log(performancesWithPopularity)
    for(var i = 1; i < performancesWithPopularity.length; i++){
        for(var j = 0; j < i; j++){
            if(performancesWithPopularity[j].endtime <= performancesWithPopularity[i].starttime){
                if((performancesWithPopularity[i].popularity+popularity[j])>popularity[i]) {
                    popularity[i] = (performancesWithPopularity[i].popularity+popularity[j]);
                    result[i] = [...result[j],performancesWithPopularity[i]];
                }
            }
        }
    } 
    // console.log(popularity);
    return result[popularity.indexOf(Math.max(...popularity))];
}
module.exports = {
    getPerformanceAlgo,
    getPerformanceWithPopularityAlgo
}
//create variable x
// x[0] = performances[0].popularity
// for( var i=1; i < performances.length; i++){
//     x[i] = 
// }