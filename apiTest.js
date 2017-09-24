let axios = require('axios');

let assert = require('assert')
let baseurl = " http://192.168.198.129:3000/api/v1/"

describe("api test",function(){
    this.timeout(60* 10000)

    describe ("主题首页 -get",function(){
        it("主题首页  page=1", async function(){
            let res = await axios.get(baseurl+"topics?page=1");
            console.log(res.data)
            console.log(res.data.data.length)
            return assert.deepEqual(20,res.data.data.length)
        })
        it("主题首页  tab=ask", async function(){
            let res = await axios.get(baseurl+"topics?tab=ask&mdrender=false");
            console.log(res.data.data[0].content)
            return assert.deepEqual("ndadnadnasjsdsoodosdosodosaodoaosodosodasodsaodoo",res.data.data[0].content)
        })
        it("主题首页  page=1&tab=ask", async function(){
            let res = await axios.get(baseurl+"topics?page=1&tab=ask");
            console.log(res.data.data.length)
            return assert.deepEqual(5,res.data.data.length)
        })
    })
})
describe("发布话题", function () {
    it("发布话题", async function () {
        let url = baseurl + "topics";
        console.log(url)
        let res = await axios.post(url, {
            accesstoken: "756dc3ee-1303-4d0b-9454-16f9bdc5489d",
            title: "helloworld123456789111",
            tab: "ask",
            content: "ndadnadnasjsdsoodosdosodosaodoaosodosodasodsaodoo"
        })

        console.log(res.data);
        return assert.deepEqual(true, res.data.success)
    })
})