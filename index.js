const _ = require("lodash")
function main(){
    var ownerArr = [{
        "owner": "Colin",
        "pets": [{"name":"dog1"}, {"name": "dog2"}]
    }, {
        "owner": "John",
        "pets": [{"name":"dog3"}, {"name": "dog4"}]
    }];

    ownerArr.forEach(ele=>{
        ele.pets.forEach(ele1=>{
            console.log(ele1.name);
        })
    })


}
main();