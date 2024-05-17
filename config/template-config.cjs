/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: 'Hey, baby',
    desc: `
      **🗓️{{date.DATA}}**
      
       {{moment_copyrighting.DATA}}
       
      ---
      
      城市：{{city.DATA}}
      
      天气：{{tian_api_weather_weather_0.DATA}}
      
      气温：{{tian_api_weather_lowest_0.DATA}}°c ~ {{tian_api_weather_highest_0.DATA}} °c
      
      风向: {{tian_api_weather_wind_0.DATA}}
      
      风级: {{tian_api_weather_windsc_0.DATA}}
      
       {{tian_api_weather_tips_0.DATA}}{{tian_api_weather_tips_1.DATA}｝{{tian_api_weather_tips_2.DATA}}{{tian_api_weather_tips_3.DATA}}{{tian_api_weather_tips_4.DATA}}{{tian_api_weather_tips_5.DATA}}

      
      ---
      
      ❤️今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{wx_earthy_love_words_0.DATA}} {{wx_earthy_love_words_1.DATA}} {{wx_earthy_love_words_2.DATA}}{{wx_earthy_love_words_3.DATA}}{{wx_earthy_love_words_4.DATA}}
     
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
