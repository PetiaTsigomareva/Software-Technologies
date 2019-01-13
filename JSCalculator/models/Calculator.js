class Calculator{

    constructor(leftOperand,operator,rightOperand) {
         this.leftOperand=leftOperand;
         this.operator=operator;
         this.rightOperand=rightOperand;
    }

   getCalculateResult() {

    let result=0;
    switch (this.operator){

        case"+":
            result=this.leftOperand + this.rightOperand;
            break;

        case"-":
            result=this.leftOperand - this.rightOperand;
            break;
        case"*":
            result=this.leftOperand * this.rightOperand;
            break;
        case"/":
            result=this.leftOperand / this.rightOperand;
            break;
        case"%":
            result=this.rightOperand * (this.leftOperand/100.0);
            break;
        case"!":
            result=1;
            for (let i=1;i<=this.leftOperand;i++) {
                result *= i;
            }
            break;
        case"^":
            result= Math.pow(this.leftOperand,this.rightOperand);
            break;
        case"sqr(x)":
            result=Math.sqrt(this.leftOperand);
            break;
        default:
            break;
    }
         return result;
    }

//TODO....
    resetValue(){
        this.leftOperand =" ";
    this.rightOperand = " ";
    this.operator = " ";
}

}

module.exports = Calculator;