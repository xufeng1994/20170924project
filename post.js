let axios = require('axios');
var topicid;
let assert = require('assert')
let baseurl = " http://192.168.198.129:3000/api/v1/"
describe("发布话题", function () {
    it("发布话题", async function () {
        console.log(baseurl+"topics")
        let res = await axios.post(baseurl+"topics", {
            accesstoken: "756dc3ee-1303-4d0b-9454-16f9bdc5489d",
            title: "2222222222222222222",
            tab: "ask",
            content: "3333333333333333"
        })

        console.log(res.data.topic_id);
        topicid = res.data.topic_id;
        return assert.deepEqual(true, res.data.success)
    })
   
})
describe("编辑主题",async function () {
    it("编辑主题", async function () {
        console.log(baseurl+"topics/update")
        await axios.post(baseurl+"topics/update", {
            accesstoken: "756dc3ee-1303-4d0b-9454-16f9bdc5489d",
            topic_id: topicid,
            title: "helloworld",
            tab: "job",
            content: "wwwwwwwwwwwwwwwwwwwww"
        })
    })

})


describe("收藏主题",async function(){
     it("收藏主题",async function (){
         console.log(baseurl+"topic_collect/collect")
         await axios.post(baseurl+"topic_collect/collect",{
             accesstoken:"756dc3ee-1303-4d0b-9454-16f9bdc5489d",
             topic_id :"59c7dd29e984fa2a068e1ba5"
         }

         )
     }
    )
}
)

