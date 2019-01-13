<?php
namespace CalculatorBundle\Entity;

class Calculator
{
    /**
     * @var float
     */
    private $leftOperand;
    /**
     * @var float
     */
    private $rightOperand;
    /**
     * @var string
     */
    private $operator;

    /**
     * @return float
     */
    public function getLeftOperand():?float
    {
        return $this->leftOperand;
    }

    /**
     * @param float $leftOperand
     */
    public function setLeftOperand($leftOperand)
    {
        $this->leftOperand = $leftOperand;
    }

    /**
     * @return float
     */
    public function getRightOperand(): ?float
    {
        return $this->rightOperand;
    }

    /**
     * @param float $rightOperand
     */
    public function setRightOperand($rightOperand)
    {
        $this->rightOperand = $rightOperand;
    }

    /**
     * @return string
     */
    public function getOperator():?string
    {
        return $this->operator;
    }

    /**
     * @param string $operator
     */
    public function setOperator($operator)
    {
        $this->operator = $operator;
    }

    /**
     * @return float
     */
    public function calculateResult():?float
    {
        $result=0;
        switch ($this->getOperator()){
            case"+":
            $result=$this->getLeftOperand()+$this->getRightOperand();
            break;
            case"-":
                $result=$this->getLeftOperand()-$this->getRightOperand();
                break;
            case"*":
                $result=$this->getLeftOperand()*$this->getRightOperand();
                break;
            case"/":
                $result=$this->getLeftOperand()/$this->getRightOperand();
                break;

            case"!":
                $result=1;
                for ($i=1;$i<=$this->getLeftOperand();$i++) {
                $result *= $i;
            }
            break;
            case"^":
                $result=pow($this->getLeftOperand(),$this->getRightOperand());
                break;
            case"sqr(x)":
                $result=sqrt($this->getLeftOperand());
                break;

            case"%":
                $result=$this->getRightOperand() * ($this->getLeftOperand()/100.0);
                break;
            default:
                break;

       }
        return $result;
    }


}