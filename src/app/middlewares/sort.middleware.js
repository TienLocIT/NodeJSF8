module.exports=function SortMiddleWare(req,res,next){
    res.locals._sort={
        enabled:false,
        type:"default"
    }
    if(req.body.type){
     Object.assign(res.locals._sort,{
            enabled:true,
            type:req.body.type,
            column:req.body.column         
     })
    }
    next();
}