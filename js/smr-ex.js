var smr = smr || {};

smr.dateVal=['2011-08-05','2011-08-06','2011-08-07','2011-08-08','2011-08-09','2011-08-10','2011-08-11',
             '2011-08-12','2011-08-13','2011-08-14','2011-08-15','2011-08-16','2011-08-17','2011-08-18',
             '2011-08-19','2011-08-21','2011-08-22','2011-08-23','2011-08-24','2011-08-25','2011-08-26']; 

smr.generateSmrData = function(text){
	var data = eval("(" + text + ")");
	var resultData = [];

	for(var i=0;i<smr.dateVal.length;i++){
		var dataRow = data;
		dataRow.date = smr.dateVal[i];
		//resultData.push(dataRow);
		resultData.push(eval("(" + JSON.stringify(dataRow)+ ")"));
	}

	var dataStr = JSON.stringify(resultData);
	return dataStr;
}