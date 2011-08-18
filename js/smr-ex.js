var smr = smr || {};

smr.dateForDay=['2011-08-05','2011-08-06','2011-08-07','2011-08-08','2011-08-09','2011-08-10','2011-08-11',
             '2011-08-12','2011-08-13','2011-08-14','2011-08-15','2011-08-16','2011-08-17','2011-08-18',
             '2011-08-19','2011-08-21','2011-08-22','2011-08-23','2011-08-24','2011-08-25','2011-08-26']; 

smr.dateForWeek=['2011-06-06','2011-06-13','2011-06-20','2011-06-27','2011-07-04','2011-07-11','2011-07-18',
             '2011-07-25','2011-08-01','2011-08-08','2011-08-15','2011-08-22','2011-08-29','2011-09-05']; 

smr.dateForMonth=['2011-01-01','2011-02-01','2011-03-01','2011-04-01','2011-05-01','2011-06-01','2011-07-01',
             '2011-08-01','2011-09-01','2011-10-01','2011-11-01','2011-12-01']; 

smr.dateForQuarter=['2010-01-01','2010-04-01','2010-07-01','2010-10-01','2011-01-01','2011-04-01','2011-07-01','2011-10-01']; 

smr.dateForYear=['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011']; 

smr.dateFormat=['08\/05\/2011','08\/06\/2011','08\/07\/2011','08\/08\/2011','08\/09\/2011','08\/10\/2011','08\/11\/2011',
                '08\/12\/2011','08\/13\/2011','08\/14\/2011','08\/15\/2011','08\/16\/2011','08\/17\/2011','08\/18\/2011',
                '08\/19\/2011','08\/20\/2011','08\/21\/2011','08\/22\/2011',]; 

smr.dateFormat2=['09\/05\/2011','09\/06\/2011','09\/07\/2011','09\/08\/2011','09\/09\/2011','09\/10\/2011','09\/11\/2011',
                '09\/12\/2011','09\/13\/2011','09\/14\/2011','09\/15\/2011','09\/16\/2011','09\/17\/2011','09\/18\/2011',
                '09\/19\/2011','09\/20\/2011','09\/21\/2011','09\/22\/2011',]; 

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

smr.generateSmrData = function(text,dataFor,dataType){
	console.log(dataFor+"-----"+dataType);
	var data = eval("(" + text + ")");
	var resultData = [];
	var dateVal = smr.dateForDay;
	var dateVal2 = smr.dateFormat2;
	
	var baseNum = 100;
	var baseNumB = 200;
	
	// set the minor change the data 
	var addCount = 5;
	var addRate = 0.5;
	if(dataType == "week"){
		addCount = 20;
		addRate = 2;
		dateVal = smr.dateForWeek;
	}else if(dataType == "month"){
		addCount = 30;
		addRate = 3;
		dateVal = smr.dateForMonth;
	}else if(dataType == "mailing"){
		addCount = 40;
		addRate = 4;
	}else if(dataType == "quarter"){
		addCount = 50;
		addRate = 5;
		dateVal = smr.dateForQuarter;
	}else if(dataType == "target"){
		addCount = 10;
		addRate = 1;
	}else if(dataType == "year"){
		addCount = 60;
		addRate = 2;
		dateVal = smr.dateForYear;
	}else if(dataType == "campaign"){
		addCount = 55;
		addRate = 2;
	}else if(dataType == "program"){
		addCount = 45;
		addRate = 2;
	}
	
	//here change date format
	if(dataType == "sharing" || dataType == "sharingftaf" || dataType == "failuredetail" || dataType == "failureinstance" || 
			dataType == "links"  || dataType == "filterMailings" || dataType == "filterPrograms" || dataType == "filterCampaigns"){
		dateVal = smr.dateFormat;
	}

	for(var i=0;i<dateVal.length;i++){
		var dataRow = data;
		
		if(dataFor == "batch"){
			//add some mock data
			if(dataType == "sharing"){
				dataRow.aggDate = dateVal[i];
				dataRow.offerId = baseNum + i;
				dataRow.offerName = "offer" + i;
				dataRow.offerShares = i;
				dataRow.offerUrl = "testurl" + i;
				dataRow.totalOfferClicks = baseNum + (i*5);
				dataRow.totalOfferShareCount = baseNum + (i*3);
			}else if(dataType == "sharingftaf"){
				dataRow.clickers = i;
				dataRow.date = dateVal[i];
				dataRow.forwaders = i + 1;
				dataRow.forwarededMessages = i + 1;
				dataRow.mailingId = baseNum + i;
				dataRow.openers =  i + 2;
				dataRow.subscribers = i + 3;
				dataRow.viralFactor = i*1.2;
			}else if(dataType == "failuredetail"){
				dataRow.count = baseNum + i;
				dataRow.detailCode = baseNum*10 + i;
				dataRow.detailDescription = "message" + 1;
				dataRow.failurePercentage = i*1.5;
				dataRow.failureRate =  i*2;
			}else if(dataType == "failureinstance"){
				dataRow.block = baseNum + i;
				dataRow.blockFailedRate = i*1.5;
				dataRow.date = dateVal[i];
				dataRow.failed = baseNum*10 + i;
				dataRow.failedRate = i*1.5;
				dataRow.hbounce = baseNum*20 + i;
				dataRow.hbounceFailedRate = i*2;
				dataRow.sbounce =  i*5;
				dataRow.sbounceFailedRate = i*3;
				dataRow.sent =  baseNum*15 + i;
				dataRow.technical =  i*2;
				dataRow.technicalFailedRate = i*5;
				dataRow.unknown =  i;
				dataRow.unknownFailedRate = i*4;
			}else if(dataType == "links"){
				dataRow.clickRate = i*1.5;
				dataRow.date = dateVal[i];
				dataRow.delivered = baseNum*10 + i;
				dataRow.linkId = baseNum + i;
				dataRow.linkName = "linkname" + i;
				dataRow.linkUrl =  "linkurl" + i;
				dataRow.mailingId =  baseNum*2 + i;
				dataRow.mailingName =  "mailingname" + i;
				dataRow.mailingSubject = "mailingsubject" + i;
				dataRow.opens =  baseNum*10 + i;;
				dataRow.templateId = baseNum*3 + i;
				dataRow.templateType =  "html";
				dataRow.totalClicks =  baseNum*4 + i;
				dataRow.uniqueClicks =  baseNum*5 + i;
				dataRow.uniqueClicksPercent =  i*2;
				dataRow.uniqueClicksRate =  i;
			}else if(dataType == "linksConversion"){
				dataRow.linkName = "linkConversionname" + i;
				dataRow.linkUrl =  "linkConversionurl" + i;
				dataRow.mailingName =  "mailingConversionname" + i;
				dataRow.mailingSubject = "mailingConversionsubject" + i;
				dataRow.conversionCount =  baseNum*10 + i;;
				dataRow.items = 80 + i;
				dataRow.averageOrderValue =  i + 5;
				dataRow.revenue =  20 + i;
				dataRow.covertToClicks =  baseNum*5 + i;
				dataRow.mailingId =  baseNum*3 + i;
				dataRow.linkId =  baseNum*2 + i;
			}else if(dataType == "day" || dataType == "week" || dataType == "month" || dataType == "quarter" || dataType == "mailing" || dataType == "target"){
				//here for dataType : day week month quarter
				dataRow.date = dateVal[i];
				
				dataRow.clickToOpen.percent = i+10;
				dataRow.clickToOpen.rate = i+5;
				dataRow.clickToOpen.uniqueRate = i+10;
				
				dataRow.clicks.count = smr.mockClicks[i] + addCount;
				dataRow.clicks.rate = smr.mockClicksRate[i] + addRate;
				dataRow.clicks.unique = smr.mockClicks[i] - addCount;
				dataRow.clicks.uniqueRate = smr.mockClicksRate[i] - addRate;
				dataRow.clicks.percent = i+10;
				
				dataRow.complaints.count = smr.mockClicks[i] + addCount;
				dataRow.complaints.rate = smr.mockClicksRate[i] + addRate;
				dataRow.complaints.unique = smr.mockClicks[i] - addCount;
				dataRow.complaints.uniqueRate = smr.mockClicksRate[i] - addRate;
				dataRow.complaints.percent = i+11;
				
				dataRow.conversions.count = smr.mockClicks[i] + addCount;
				dataRow.conversions.rate = smr.mockClicksRate[i] + addRate;
				dataRow.conversions.unique = smr.mockClicks[i] - addCount;
				dataRow.conversions.uniqueRate = smr.mockClicksRate[i] - addRate;
				dataRow.conversions.percent = i+12;
				
				dataRow.convertToClick.percent = i+10;
				dataRow.convertToClick.rate = i+5;
				dataRow.convertToClick.uniqueRate = i+10;
				
				dataRow.delivered.count = smr.mockDelivered[i] + addCount;
				dataRow.delivered.rate = smr.mockDeliveredPct[i] - addRate;
				dataRow.delivered.percent = smr.mockDeliveredPct[i] + addRate;
				
				dataRow.failed.count = smr.mockOpens[i] + addCount;
				dataRow.failed.rate = smr.mockOpens[i] - addRate;
				dataRow.failed.percent = smr.mockOpens[i] + addRate;
				
				dataRow.invalid.count = smr.mockDelivered[i] + addCount;
				dataRow.invalid.rate = smr.mockDeliveredPct[i] - addRate;
				dataRow.invalid.percent = smr.mockDeliveredPct[i] + addRate;
				
				dataRow.opens.count = smr.mockOpens[i] + addCount;
				dataRow.opens.rate = smr.mockOpensRate[i] + addRate;
				dataRow.opens.unique = smr.mockOpens[i] - addCount;
				dataRow.opens.uniqueRate = smr.mockOpensRate[i] - addRate;
				dataRow.opens.percent = smr.mockOpensPct[i] + addRate;
				
				dataRow.revenue.count = smr.mockDelivered[i] + addCount;
				dataRow.revenue.rate = smr.mockDeliveredPct[i] - addRate;
				dataRow.revenue.percent = smr.mockDeliveredPct[i] + addRate;
				
				dataRow.sent.count = smr.mockSents[i] + addCount;
				dataRow.sent.rate = smr.mockSentsRate[i] + addRate;
				dataRow.sent.unique = smr.mockSents[i] - addCount;
				dataRow.sent.uniqueRate = smr.mockSentsRate[i] - addRate;
				dataRow.sent.percent = smr.mockOpensPct[i] + addRate;
				
				dataRow.targeted.count = smr.mockDelivered[i] + addCount;
				dataRow.targeted.rate = smr.mockDeliveredPct[i] - addRate;
				dataRow.targeted.percent = smr.mockDeliveredPct[i] + addRate;
				
				dataRow.unsub.count = smr.mockSents[i] + addCount;
				dataRow.unsub.rate = smr.mockSentsRate[i] + addRate;
				dataRow.unsub.unique = smr.mockSents[i] - addCount;
				dataRow.unsub.uniqueRate = smr.mockSentsRate[i] - addRate;
				dataRow.unsub.percent = smr.mockOpensPct[i] + addRate;
			}
			
		}else if(dataFor == "transactional" || dataFor == "lifecycle"){
			//add some mock data
			if(dataType == "sharing"){
				dataRow.aggDate = dateVal[i];
				dataRow.offerId = baseNumB + i;
				dataRow.offerName = "offer" + i;
				dataRow.offerShares = i;
				dataRow.offerUrl = "testurl" + i;
				dataRow.totalOfferClicks = baseNumB + (i*5);
				dataRow.totalOfferShareCount = baseNumB + (i*3);
			}else if(dataType == "sharingftaf"){
				dataRow.clickers = i;
				dataRow.date = dateVal[i];
				dataRow.forwaders = i + 1;
				dataRow.forwarededMessages = i + 1;
				dataRow.mailingId = baseNumB + i;
				dataRow.openers =  i + 2;
				dataRow.subscribers = i + 3;
				dataRow.viralFactor = i*1.1;
			}else if(dataType == "failuredetail"){
				dataRow.count = baseNumB + i;
				dataRow.detailCode = baseNumB*10 + i;
				dataRow.detailDescription = "message" + 1;
				dataRow.failurePercentage = i;
				dataRow.failureRate =  i*2;
			}else if(dataType == "failureinstance"){
				dataRow.block = baseNumB + i;
				dataRow.blockFailedRate = i*2;
				dataRow.date = dateVal[i];
				dataRow.failed = baseNumB*10 + i;
				dataRow.failedRate = i*1.5;
				dataRow.hbounce = baseNumB*20 + i;
				dataRow.hbounceFailedRate = i*2;
				dataRow.sbounce =  i*2;
				dataRow.hbounceFailedRate = i*5;
				dataRow.sent =  baseNumB*15 + i;
				dataRow.technical =  i;
				dataRow.technicalFailedRate = i*4;
				dataRow.unknown =  i*2;
				dataRow.unknownFailedRate = i*5;
			}else if(dataType == "links"){
				dataRow.clickRate = i*2;
				dataRow.date = dateVal[i];
				dataRow.delivered = baseNumB*10 + i;
				dataRow.linkId = baseNumB + i;
				dataRow.linkName = "linknameB" + i;
				dataRow.linkUrl =  "linkurlB" + i;
				dataRow.mailingId =  baseNumB*2 + i;
				dataRow.mailingName =  "mailingnameB" + i;
				dataRow.mailingSubject = "mailingsubjectB" + i;
				dataRow.opens =  baseNumB*10 + i;;
				dataRow.templateId = baseNumB*2 + i;
				dataRow.templateType =  "html";
				dataRow.totalClicks =  baseNumB*3 + i;
				dataRow.uniqueClicks =  baseNumB*4 + i;
				dataRow.uniqueClicksPercent =  i;
				dataRow.uniqueClicksRate =  i*2;
			}else if(dataType == "linksConversion"){
				dataRow.linkName = "linkConversionnameB" + i;
				dataRow.linkUrl =  "linkConversionurlB" + i;
				dataRow.mailingName =  "mailingConversionnameB" + i;
				dataRow.mailingSubject = "mailingConversionsubjectB" + i;
				dataRow.conversionCount =  baseNum*20 + i;;
				dataRow.items = 60 + i;
				dataRow.averageOrderValue =  i + 10;
				dataRow.revenue =  30 + i;
				dataRow.covertToClicks =  baseNum*4 + i;
				dataRow.mailingId =  baseNum*3 + i;
				dataRow.linkId =  baseNum*2 + i;
			}else if(dataType == "day" || dataType == "week" || dataType == "month" || dataType == "quarter" || dataType == "mailing" || dataType == "target" ||
					 dataType == "campaign" || dataType == "program"){
				//here for dataType : day week month quarter
				dataRow.date = dateVal[i];
				dataRow.program = "program" + i;
				dataRow.campaign = "campaign" + i;
				
				dataRow.averageRevenue.count = smr.mockClicks[i] + addCount;
				dataRow.averageRevenue.countChange = smr.mockClicksRate[i] + addRate;
				dataRow.averageRevenue.rate = smr.mockClicks[i] - addCount;
				dataRow.averageRevenue.rateChange = smr.mockClicksRate[i] - addRate;
				
				dataRow.clickToOpen.rate = smr.mockClicks[i] - addCount;
				dataRow.clickToOpen.rateChange = smr.mockClicksRate[i] - addRate;
				dataRow.clickToOpen.uniqueRate = smr.mockClicks[i] + addCount;
				dataRow.clickToOpen.uniqueRateChange = smr.mockClicksRate[i] + addRate;
				
				dataRow.clicks.count = smr.mockClicks[i] + addCount;
				dataRow.clicks.countChange = smr.mockClicksRate[i] + addRate;
				dataRow.clicks.rate = smr.mockClicksRate[i] + addRate;
				dataRow.clicks.rateChange = smr.mockClicksRate[i] - addRate;
				
				dataRow.complaints.count = smr.mockClicks[i] + addCount;
				dataRow.complaints.countChange = smr.mockClicksRate[i] + addRate;
				dataRow.complaints.rate = smr.mockClicksRate[i] + addRate;
				dataRow.complaints.rateChange = smr.mockClicksRate[i] - addRate;
				
				dataRow.conversions.count = smr.mockClicks[i] + addCount;
				dataRow.conversions.countChange = smr.mockClicksRate[i] + addRate;
				dataRow.conversions.rate = smr.mockClicksRate[i] + addRate;
				dataRow.conversions.rateChange = smr.mockClicksRate[i] - addRate;
				
				dataRow.convertToClick.rate = smr.mockClicks[i] - addCount;
				dataRow.convertToClick.rateChange = smr.mockClicksRate[i] - addRate;
				dataRow.convertToClick.uniqueRate = smr.mockClicks[i] + addCount;
				dataRow.convertToClick.uniqueRateChange = smr.mockClicksRate[i] + addRate;
				
				dataRow.delivered.count = smr.mockDelivered[i] + addCount;
				dataRow.delivered.rate = smr.mockDeliveredPct[i] - addRate;
				dataRow.delivered.countChange = smr.mockDeliveredPct[i] + addRate;
				dataRow.delivered.rateChange = smr.mockDeliveredPct[i] - addRate;
				
				dataRow.failed.count = smr.mockOpens[i] + addCount;
				dataRow.failed.rate = smr.mockDeliveredPct[i] - addRate;
				dataRow.failed.countChange = smr.mockDeliveredPct[i] + addRate;
				dataRow.failed.rateChange = smr.mockDeliveredPct[i] - addRate;
				
				dataRow.invalid.count = smr.mockOpens[i] + addCount;
				dataRow.invalid.rate = smr.mockDeliveredPct[i] - addRate;
				dataRow.invalid.countChange = smr.mockDeliveredPct[i] + addRate;
				dataRow.invalid.rateChange = smr.mockDeliveredPct[i] - addRate;
				
				dataRow.opens.count = smr.mockOpens[i] + addCount;
				dataRow.opens.rate = smr.mockOpensRate[i] + addRate;
				dataRow.opens.countChange = smr.mockOpensPct[i] + addRate;
				dataRow.opens.rateChange = smr.mockDeliveredPct[i] - addRate;
				
				dataRow.sent.count = smr.mockSents[i] + addCount;
				dataRow.sent.rate = smr.mockSentsRate[i] + addRate;
				dataRow.sent.countChange = smr.mockOpensPct[i] + addRate;
				dataRow.sent.rateChange = smr.mockDeliveredPct[i] - addRate;
				
				dataRow.triggered.count = smr.mockSents[i] + addCount;
				dataRow.triggered.rate = smr.mockSentsRate[i] + addRate;
				dataRow.triggered.countChange = smr.mockOpensPct[i] + addRate;
				dataRow.triggered.rateChange = smr.mockDeliveredPct[i] - addRate;
				
				dataRow.uniqueClicks.count = smr.mockClicks[i] - addCount;
				dataRow.uniqueClicks.rate = smr.mockClicksRate[i] - addRate;
				dataRow.uniqueClicks.countChange = smr.mockOpensPct[i] - addCount;
				dataRow.uniqueClicks.rateChange = smr.mockOpensPct[i] - addRate;
				
				dataRow.uniqueComplaints.count = smr.mockClicks[i] - addCount;
				dataRow.uniqueComplaints.rate = smr.mockClicksRate[i] - addRate;
				dataRow.uniqueComplaints.countChange = smr.mockOpensPct[i] - addCount;
				dataRow.uniqueComplaints.rateChange = smr.mockOpensPct[i] - addRate;
				
				dataRow.uniqueConversions.count = smr.mockClicks[i] - addCount;
				dataRow.uniqueConversions.rate = smr.mockClicksRate[i] - addRate;
				dataRow.uniqueConversions.countChange = smr.mockOpensPct[i] - addCount;
				dataRow.uniqueConversions.rateChange = smr.mockOpensPct[i] - addRate;
				
				dataRow.uniqueOpens.count = smr.mockOpens[i] - addCount;
				dataRow.uniqueOpens.rate = smr.mockOpensRate[i] - addRate;
				dataRow.uniqueOpens.countChange = smr.mockOpensPct[i] - addRate;
				dataRow.uniqueOpens.rateChange = smr.mockOpensPct[i] - addRate;
				
				dataRow.uniqueUnsubs.count = smr.mockClicks[i] - addCount;
				dataRow.uniqueUnsubs.rate = smr.mockClicksRate[i] - addRate;
				dataRow.uniqueUnsubs.countChange = smr.mockOpensPct[i] - addCount;
				dataRow.uniqueUnsubs.rateChange = smr.mockOpensPct[i] - addRate;
				
				dataRow.unsubs.count = smr.mockOpens[i] - addCount;
				dataRow.unsubs.rate = smr.mockOpensRate[i] - addRate;
				dataRow.unsubs.countChange = smr.mockOpensPct[i] - addRate;
				dataRow.unsubs.rateChange = smr.mockOpensPct[i] - addRate;
			}
			
		}else if(dataFor == "filterLightbox"){
			//here the Filter Lightbox 
			if(dataType == "filterMailings"){
				dataRow.campaign = "testcampaign" + i;
				dataRow.completedDate =  dateVal2[i];
				dataRow.id = i + 1;
				dataRow.launchDate = dateVal[i];
				dataRow.name =  "testmailing" + i;
			}else if(dataType == "filterPrograms"){
				dataRow.campaign = "testcampaign" + i + 1;
				dataRow.completedDate =  dateVal2[i];
				dataRow.id = i + 1;
				dataRow.launchDate = dateVal[i];
				dataRow.name =  "testprogram" + i;
			}else if(dataType == "filterCampaigns"){
				dataRow.campaign = "testcampaign" + i;
				dataRow.id = i + 1;
			}
		}
		
		
		
		resultData.push(eval("(" + JSON.stringify(dataRow)+ ")"));
	}

	var dataStr = JSON.stringify(resultData);
	return dataStr;
}


smr.generateSmrComparisonData = function(text,dataFor,dataType){
	var data = eval("(" + text + ")");
	var resultData = [];
	var summary = {"summary":{},"summary2":{}};
	
	for(var i=0;i<2;i++){
		console.log(smr.mockClicksRate[i]);
		var dataRow = data;
		if(dataFor == "batch"){
			dataRow.clickToOpen.uniqueRate = smr.mockClicksRate[i] ;
			console.log(dataRow.clickToOpen.uniqueRate);
			dataRow.clickToOpen.rate = smr.mockClicksRate[i];
			
			dataRow.clicks.count = smr.mockClicks[i];
			dataRow.clicks.rate = smr.mockClicksRate[i];
			dataRow.clicks.unique = smr.mockClicks[i] + i;
			dataRow.clicks.uniqueRate = smr.mockClicksRate[i] + i;
			
			dataRow.complaints.count = smr.mockClicks[i] + i;
			dataRow.complaints.rate = smr.mockClicksRate[i] + i;
			dataRow.complaints.unique = smr.mockClicks[i] + (i+1) ;
			dataRow.complaints.uniqueRate = smr.mockClicksRate[i] + (i+1);
			
			dataRow.conversions.count = smr.mockClicks[i] + i;
			dataRow.conversions.rate = smr.mockClicksRate[i] + i;
			dataRow.conversions.unique = smr.mockClicks[i] + (i+2) ;
			dataRow.conversions.uniqueRate = smr.mockClicksRate[i] + (i+2);
			
			dataRow.convertToClick.rate = smr.mockSentsRate[i] + i;
			dataRow.convertToClick.uniqueRate = smr.mockSentsRate[i] + i;
			
			dataRow.delivered.count = smr.mockDelivered[i] ;
			dataRow.delivered.rate = smr.mockDeliveredPct[i];

			dataRow.failed.count = smr.mockSents[i] + i;
			dataRow.failed.rate = smr.mockSentsRate[i] + i;
			
			dataRow.invalid.count = smr.mockSents[i] + i;
			dataRow.invalid.rate = smr.mockSentsRate[i] + i;
			
			dataRow.opens.count = smr.mockOpens[i] ;
			dataRow.opens.rate = smr.mockOpensRate[i];
			dataRow.opens.unique = smr.mockOpens[i];
			dataRow.opens.uniqueRate = smr.mockOpensRate[i];
			
			dataRow.revenue.count = smr.mockSents[i] + i;
			dataRow.revenue.rate = smr.mockSentsRate[i] + i;
			
			dataRow.sent.count = smr.mockSents[i];
			dataRow.sent.rate = smr.mockSentsRate[i];
			
			dataRow.targeted.count = smr.mockSents[i] + (i+5);
			dataRow.targeted.rate = smr.mockSentsRate[i] + (i+0.5);
			
			dataRow.threshold = 95 + (i+0.5);
			
			dataRow.unsub.count = smr.mockOpens[i] + i ;
			dataRow.unsub.rate = smr.mockOpensRate[i] + i;
			dataRow.unsub.unique = smr.mockOpens[i] + i;
			dataRow.unsub.uniqueRate = smr.mockOpensRate[i] + i;
			
		}else  if(dataFor == "transactional"){
			dataRow.clickToOpen.uniqueRate = smr.mockClicksRate[i] + (i*5) ;
			dataRow.clickToOpen.rate = smr.mockClicksRate[i] + (i+5);
			
			dataRow.clicks.count = smr.mockClicks[i] + (i*5);
			dataRow.clicks.rate = smr.mockClicksRate[i] + (i+10);
			
			dataRow.complaints.count = smr.mockClicks[i] + (i*200);
			dataRow.complaints.rate = smr.mockClicksRate[i] + i;
			
			dataRow.conversions.count = smr.mockClicks[i] + (i*5);
			dataRow.conversions.rate = smr.mockClicksRate[i] + (i+5);
			
			dataRow.convertToClick.rate = smr.mockSentsRate[i] + i;
			dataRow.convertToClick.uniqueRate = smr.mockSentsRate[i] + (i+5);
			
			dataRow.delivered.count = smr.mockDelivered[i] + (i*500) ;
			dataRow.delivered.rate = smr.mockDeliveredPct[i] + (i+5);

			dataRow.failed.count = smr.mockSents[i] + (i*100);
			dataRow.failed.rate = smr.mockSentsRate[i] + (i+5);
			
			dataRow.invalid.count = smr.mockSents[i] + (i*120);
			dataRow.invalid.rate = smr.mockSentsRate[i] + (i+10);
			
			dataRow.opens.count = smr.mockOpens[i] + (i*105) ;
			dataRow.opens.rate = smr.mockOpensRate[i] + (i+5);
			
			dataRow.sent.count = smr.mockSents[i] + (i*25);
			dataRow.sent.rate = smr.mockSentsRate[i] + (i+5);
			
			dataRow.triggered.count = smr.mockSents[i] + (i*5);
			dataRow.triggered.rate = smr.mockSentsRate[i] + (i+2);
			
			dataRow.threshold = 95 + (i+0.5);
			
			dataRow.uniqueClicks.count = smr.mockClicks[i] + (i*250);
			dataRow.uniqueClicks.rate = smr.mockClicksRate[i] + (i+5);
			
			dataRow.uniqueComplaints.count = smr.mockClicks[i] + (i*111);
			dataRow.uniqueComplaints.rate = smr.mockClicksRate[i] + (i+1);
			
			dataRow.uniqueConversions.count = smr.mockClicks[i] + (i*22);
			dataRow.uniqueConversions.rate = smr.mockClicksRate[i] + (i+2);
			
			dataRow.uniqueOpens.count = smr.mockOpens[i] + (i*220);
			dataRow.uniqueOpens.rate = smr.mockOpensRate[i] + (i*2);
			
			dataRow.uniqueUnsubs.count = smr.mockClicks[i] + (i*520);
			dataRow.uniqueUnsubs.rate = smr.mockClicksRate[i] +(i*2);
			
			dataRow.unsubs.count = smr.mockOpens[i] + (i*51) ;
			dataRow.unsubs.rate = smr.mockOpensRate[i] + (i*2);
		}
		
		if(i == 0){
			summary.summary = eval("(" + JSON.stringify(dataRow)+ ")");
		}else{
			summary.summary2 = eval("(" + JSON.stringify(dataRow)+ ")");
		}
		
	}
	
	resultData.push(eval("(" + JSON.stringify(summary)+ ")"));
	var dataStr = JSON.stringify(resultData);
	return dataStr;
	
}