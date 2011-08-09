var smr = smr || {};

smr.dateForDay=['2011-08-05','2011-08-06','2011-08-07','2011-08-08','2011-08-09','2011-08-10','2011-08-11',
             '2011-08-12','2011-08-13','2011-08-14','2011-08-15','2011-08-16','2011-08-17','2011-08-18',
             '2011-08-19','2011-08-21','2011-08-22','2011-08-23','2011-08-24','2011-08-25','2011-08-26']; 

smr.dateForWeek=['2011-06-06','2011-06-13','2011-06-20','2011-06-27','2011-07-04','2011-07-11','2011-07-18',
             '2011-07-25','2011-08-01','2011-08-08','2011-08-15','2011-08-22','2011-08-29','2011-09-05']; 

smr.dateForMonth=['2011-01-01','2011-02-01','2011-03-01','2011-04-01','2011-05-01','2011-06-01','2011-07-01',
             '2011-08-01','2011-09-01','2011-10-01','2011-11-01','2011-12-01']; 

smr.dateForQuarter=['2010-01-01','2010-04-01','2010-07-01','2010-10-01','2011-01-01','2011-04-01','2011-07-01','2011-10-01']; 

smr.mockClicks=[30014,36500,33841,26197,37239,27774,23183,20888,30253,26839,44417,41757,44383,15813,
                   28449,25757,41533,28167,26347,30803,32185];
smr.mockClicksRate=[14,36,33,26,39,24,18,20,30,26,17,47,43,13,29,25,41,28,27,30,32];

smr.mockSents=[33214,36533,33823,24597,37439,27114,20083,22288,31253,26239,41217,12757,44283,15813,
                   22349,23457,42433,22357,22347,30811,31111];
smr.mockSentsRate=[30,10,33,26,37,27,23,20,30,26,17,41,43,15,28,25,13,21,24,30,35];

smr.mockOpens=[13214,16533,13823,14597,17439,17114,20083,12288,11253,16239,11217,12757,14283,15813,
               12349,13457,12433,12357,12347,10811,11111];
smr.mockOpensRate=[10,30,43,16,17,27,23,24,34,24,14,31,33,18,28,20,13,21,24,30,35];
smr.mockOpensPct=[12,30,13,26,7,12,13,20,6,16,7,11,43,15,18,15,13,21,24,30,15];

smr.mockDelivered=[114,326,323,216,319,214,118,220,320,126,217,447,143,213,329,325,111,228,267,302,322];
smr.mockDeliveredPct=[12,30,13,26,7,21,9,20,9,16,11,11,43,15,18,15,13,21,24,30,9];

smr.generateSmrData = function(text,dataType,breakDown){
	var data = eval("(" + text + ")");
	var resultData = [];
	var dateVal = smr.dateForDay;
	// set the minor change the data 
	var addCount = 5;
	var addRate = 0.5;
	if(breakDown == "week"){
		addCount = 20;
		addRate = 2;
		dateVal = smr.dateForWeek;
	}else if(breakDown == "month"){
		addCount = 30;
		addRate = 3;
		dateVal = smr.dateForMonth;
	}else if(breakDown == "mailing"){
		addCount = 40;
		addRate = 4;
	}else if(breakDown == "quarter"){
		addCount = 50;
		addRate = 5;
		dateVal = smr.dateForQuarter;
	}else if(breakDown == "target"){
		addCount = 10;
		addRate = 1;
	}

	for(var i=0;i<dateVal.length;i++){
		var dataRow = data;
		dataRow.date = dateVal[i];
		if(dataType == "batch"){
			//add some mock data
			dataRow.clicks.count = smr.mockClicks[i] + addCount;
			dataRow.clicks.rate = smr.mockClicksRate[i] + addRate;
			dataRow.clicks.unique = smr.mockClicks[i] - addCount;
			dataRow.clicks.uniqueRate = smr.mockClicksRate[i] - addRate;
			
			dataRow.sent.count = smr.mockSents[i] + addCount;
			dataRow.sent.rate = smr.mockSentsRate[i] + addRate;
			
			dataRow.opens.count = smr.mockOpens[i] + addCount;
			dataRow.opens.rate = smr.mockOpensRate[i] + addRate;
			dataRow.opens.unique = smr.mockOpens[i] - addCount;
			dataRow.opens.uniqueRate = smr.mockOpensRate[i] - addRate;
			dataRow.opens.percent = smr.mockOpensPct[i] + addRate;
			
			dataRow.delivered.count = smr.mockDelivered[i] + addCount;
			dataRow.delivered.rate = smr.mockDeliveredPct[i] - addRate;
			dataRow.delivered.percent = smr.mockDeliveredPct[i] + addRate;
		}else if(dataType == "transactional"){
			//add some mock data
			dataRow.clicks.count = smr.mockClicks[i] + addCount;
			dataRow.clicks.rate = smr.mockClicksRate[i] + addRate;
			dataRow.uniqueClicks.count = smr.mockClicks[i] - addCount;
			dataRow.uniqueClicks.rate = smr.mockClicksRate[i] - addRate;
			
			dataRow.sent.count = smr.mockSents[i] + addCount;
			dataRow.sent.rate = smr.mockSentsRate[i] + addRate;
			
			dataRow.opens.count = smr.mockOpens[i] + addCount;
			dataRow.opens.rate = smr.mockOpensRate[i] + addRate;
			dataRow.opens.countChange = smr.mockOpensPct[i] + addRate;
			dataRow.uniqueOpens.count = smr.mockOpens[i] - addCount;
			dataRow.uniqueOpens.rate = smr.mockOpensRate[i] - addRate;
			dataRow.uniqueOpens.countChange = smr.mockOpensPct[i] - addRate;
			
			dataRow.delivered.count = smr.mockDelivered[i] + addCount;
			dataRow.delivered.rate = smr.mockDeliveredPct[i] - addRate;
			dataRow.delivered.countChange = smr.mockDeliveredPct[i] + addRate;
			dataRow.delivered.rateChange = smr.mockDeliveredPct[i] - addRate;
		}
		resultData.push(eval("(" + JSON.stringify(dataRow)+ ")"));
	}

	var dataStr = JSON.stringify(resultData);
	return dataStr;
}