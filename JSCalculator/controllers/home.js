const Calculator=require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost:(req,res)=>{
        let calculatorBody=req.body;
        let calculatorParam=calculatorBody['calculator'];

        let calculator=new Calculator(Number(calculatorParam.leftOperand),calculatorParam.operator,Number(calculatorParam.rightOperand));

        let result = calculator.getCalculateResult();
        res.render('home/index',{'calculator': calculator, 'result': result});
    },
};