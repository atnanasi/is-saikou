var app = require("express")();
app.get('/',function(req,res){
    res.send({
        status:"ok",
        message:""});
});
app.get('/:str',function(req,res){
    if(req.params.str=="ThinkPad"){
        res.send({
            status:"saikou",
            message:"is saikou"});
    }else{
        res.send({
            status:"kuso",
            message:"is kuso"});
    }
});
app.listen(3000);
