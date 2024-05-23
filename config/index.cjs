/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
	"USE_PASSAGE": 'push-plus',
	"APP_ID": "wx35e06cb060eb2ef0",
	"APP_SECRET": "30812b53c5476da8fe20e0efcc1893ca",
	"IS_SHOW_COLOR": false,
	"CALLBACK_TEMPLATE_ID": "P9XpeUpGU8eMk3lEuKgjmKqj7goozIXzHBrdhILICqI",
	"CALLBACK_USERS": [{
		"name": "自己",
		"id": "oxXP96X3EWLXXLdBPH9KRUh-a2VQ"
	}],
	"USERS": [{
		"name": "test",
		"id": "e1102d1bde264b459b5ba2012f8002bc",
		"useTemplateId": "0001",
		"province": "上海",
		"city": "闵行",
		"horoscopeDate": "05-02",
		"horoscopeDateType": "今日",
		"openUrl": "https://shuangxunian.github.io/",
		"festivals": [{
			"type": "*生日",
			"name": "生日",
			"date": "05-27",
			"year": "1990"
		}],
		// "customizedDateList": [
		// 	 { keyword: 'love_day', date: '2024-05-05' },
		// ]
	},
	// {
	// 	"name": "test1",
	// 	"id": "e663054d678d4d458317035a3063c2b5",
	// 	"useTemplateId": "0001",
	// 	"province": "浙江",
	// 	"city": "绍兴",
	// 	"horoscopeDate": "05-02",
	// 	"horoscopeDateType": "今日",
	// 	"openUrl": "https://shuangxunian.github.io/",
	// 	"festivals": [{
	// 		"type": "*生日",
	// 		"name": "宝贝",
	// 		"date": "12-19",
	// 		"year": "1991"
	// 	}],
	// 	"customizedDateList": [
	// 		 { keyword: 'love_day', date: '2024-05-05' },
	// 	]
	// }		 
		 
		 ],
	TIAN_API: {
	    // 天行API KEY，如果使用天行API则需要填写此项
	    key: '9723b13e791c15b44313964c7dc557bd',
	    
	    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
	    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
	    morningGreeting: true,
	  
	    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
	    eveningGreeting: false,
	  
	    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
	    weather: 3,
	  
	    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
	    networkHot: 3,
	  
	    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
	    networkHotType: 'default',
	  },
	"SWITCH": {
		"weather": true,
		"holidaytts": true,
		"CIBA": false,
		"oneTalk": true,
		"earthyLoveWords": true,
		"momentCopyrighting": true,
		"poisonChickenSoup": false,
		"poetry": true,
		"horoscope": false,
		"birthdayMessage": true
	}
}

module.exports = USER_CONFIG

