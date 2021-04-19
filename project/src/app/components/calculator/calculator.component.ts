import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //#region ugly calculator
  // ugly variables
  x: number = 0;
  y: number = 0;
  operation: string = '+';
  result2: number = 0;

  quickOperation(): number {
    switch (this.operation) {
      case '+':
        if (this.y == 0) {
          return (this.result2 = this.x);
        } else if (this.x == 0) {
          return (this.result2 = this.y);
        } else if (this.x != 0 && this.y != 0) {
          return (this.result2 = eval(this.x + this.operation + this.y));
        }

        break;

      case '-':
        return (this.result2 = eval(this.x + this.operation + this.y));

      case '*':
        return (this.result2 = eval(this.x + this.operation + this.y));

      case '/':
        return (this.result2 = eval(this.x + this.operation + this.y));

        break;
      default:
        break;
    }
  }

  clearFieldOnClick(event): any {
    event.target.value = '';
    this.result2 = 0;
  }
  //#endregion

  //#region cool calculator

  // cool variables
  reapeatCheck: boolean = false; // controls the checker variable
  numChecker: boolean = false; // checks if the user is writting the 1st or 2nd number of the account
  checker: boolean = false; // checks if the user is using the last result or not
  operator: string = '';
  n1: string = ''; // number 1
  n2: string = ''; // number 2
  result: any = 0;
  mathTracker: string = ''; // shows the account

  // does the math accounts
  doTheMath(): number | string {
    this.numChecker = false;
    this.reapeatCheck = false;
    this.mathTracker += ' =';

    switch (this.operator) {
      case '+':
        if (this.n2 == '0') {
          this.result = this.n1;
          this.n1 = this.result;
          this.n2 = '';

          return this.result;
        } else if (this.n1 == '0') {
          this.result = this.n2;
          this.n1 = this.result;
          this.n2 = '';

          return this.result;
        } else if (this.n1 != '0' && this.n2 != '0') {
          this.result = +this.n1 + +this.n2;
          this.n1 = this.result;
          this.n2 = '';

          return this.result;
        }
        break;

      case '-':
        this.result = +this.n1 - +this.n2;
        this.n1 = this.result;
        this.n2 = '';

        return this.result;
        break;

      case '×':
        this.result = +this.n1 * +this.n2;
        this.n1 = this.result;

        this.n2 = '';
        return this.result;

        break;

      case '÷':
        this.result = +this.n1 / +this.n2;
        this.n1 = this.result;
        this.n2 = '';

        return this.result;

        break;

      default:
        break;
    }
  }

  // sets the numbers on each account
  setNumber(x): string {
    if (!this.numChecker) {
      if (!this.reapeatCheck) {
        this.checker = false;
        if (!this.checker) {
          this.n1 = '';
          this.result = 0;
          this.reapeatCheck = true;
        }
      }
      this.n1 += x;
      this.mathTracker = this.n1;
      return this.n1;
    } else {
      this.n2 += x;
      this.mathTracker += this.n2;
      return this.n2;
    }
  }

  // sets the operators on each account
  setOperator(x): string {
    this.numChecker = true;
    this.checker = true;
    this.mathTracker = this.n1;
    this.mathTracker += ' ' + x + ' ';
    this.result = 0;
    return (this.operator = x);
  }

  // clears the accounts
  clear(): any {
    this.result = 0;
    this.n1 = '';
    this.n2 = '';
    this.operator = '';
    this.mathTracker = '';
    this.numChecker = false;
    this.checker = false;
    this.reapeatCheck = false;
  }

  //#region numeros dos botoes + operadores
  setPlus(): string {
    return this.setOperator('+');
  }

  setMinus(): string {
    return this.setOperator('-');
  }

  setSplit(): string {
    return this.setOperator('÷');
  }

  setMultiply(): string {
    return this.setOperator('×');
  }

  set0(): number | string {
    return this.setNumber(0);
  }

  set1(): number | string {
    return this.setNumber(1);
  }

  set2(): number | string {
    return this.setNumber(2);
  }

  set3(): number | string {
    return this.setNumber(3);
  }

  set4(): number | string {
    return this.setNumber(4);
  }

  set5(): number | string {
    return this.setNumber(5);
  }

  set6(): number | string {
    return this.setNumber(6);
  }

  set7(): number | string {
    return this.setNumber(7);
  }

  set8(): number | string {
    return this.setNumber(8);
  }

  set9(): number | string {
    return this.setNumber(9);
  }
  //#endregion
  //#endregion
}
