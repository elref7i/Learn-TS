# TypeScript Features and Examples

This README file explains various features and concepts of TypeScript, demonstrated in the provided code. Each section covers a different aspect of TypeScript and provides detailed explanations, including cases where errors occur.

---

## **[1] Built-in Types**
### **Primitive Types in TypeScript**
- **`string`**: Represents textual data.
    ```typescript
    let userName: string = 'refai';
    userName = 'ahmed refai'; // Changing the value of the string variable.
    ```
- **`number`**: Represents numeric values (integers and floats).
    ```typescript
    let age: number = 21;
    age = 22; // Changing the value of the number variable.
    ```
- **`boolean`**: Represents a true/false value.
    ```typescript
    let checked: boolean = false;
    checked = true; // Changing the value of the boolean variable.
    ```
- **`null`**: Represents the intentional absence of a value.
    ```typescript
    let data: null = null;
    ```
- **`undefined`**: Represents a variable that has been declared but not initialized.
    ```typescript
    let x: undefined;
    ```

---

## **[2] User-Defined Types: Arrays and Unions**
### **Arrays**
- **Empty Array**:
    ```typescript
    let empty: [] = []; // Declares an empty array with no elements.
    ```
- **String Array**:
    ```typescript
    let friends: string[] = ['ahmed', 'khaled', 'refai'];
    ```
- **Number Array**:
    ```typescript
    let numbers: number[] = [10, 20, 30, 40, 50];
    ```

### **Union Types**
- Allows a variable to hold values of different types.
    ```typescript
    let employee: (number | string)[] = [22, 'Ahmed Khaled'];
    let userAge: number | string = 10;
    userAge = 'ten'; // Changes the type from number to string.
    ```

---

## **[3] User-Defined Types: Tuples**
### **Tuple Structure**
- Fixed-length arrays where the order and types of elements are predefined.
    ```typescript
    const car: readonly [string, string, number] = ['corlla', 'Toyota', 500000];
    ```
    **Notes:**
    - The `readonly` modifier prevents changes to the tuple after its declaration.
    - Trying to add or modify elements results in an error.
        ```typescript
        // car.push(true); // ❌ Error: Tuple is readonly.
        // car.push(10); // ❌ Error: Push is not allowed.
        ```
    - A tuple with missing elements is invalid:
        ```typescript
        // const car2: [string, string, number] = ['corlla', 'Toyota']; // ❌ Error: Missing number.
        ```

---

## **[4] Understanding Type Aliases**
- **Type Alias**: Provides a custom name for a type.
    ```typescript
    type mix = (string | number | boolean)[];
    const arr: mix = ['refai', 22, false];
    const arr2: mix = ['ahmed', 21, true];
    ```
- **Literal Types**: Restricts the value of a variable to specific constants.
    ```typescript
    type returnValue = 1 | -1;
    ```
    Example (commented):
    ```typescript
    // Array.prototype.FindElement = function (ele): returnValue {
    //   return 1;
    // };
    ```

---

## **[5] Objects, Interfaces, and Classes**
### **Objects with Type Aliases**
- Object schemas can be defined using `type`.
    ```typescript
    type Car = {
      name: string;
      color: string;
      price: number;
      hasAirBag: boolean;
      brances: {
        branchOne: string;
        branchTwo?: string; // Optional property.
      };
    };
    ```
    **Examples:**
    ```typescript
    const carData: Car = {
      name: 'Toyota-type',
      color: 'Red',
      price: 500000,
      hasAirBag: true,
      brances: {
        branchOne: 'cairo',
        branchTwo: 'giza',
      },
    };

    const carTwoData: Car = {
      name: 'Toyota-type',
      color: 'White',
      price: 750000,
      hasAirBag: false,
      brances: {
        branchOne: 'Bagour',
      },
    };
    ```

### **Classes**
- Classes define object blueprints.
    ```typescript
    class CarTwo {
      name: string = '';
      color: string = '';
      hasAirBag: boolean = false;
      price: number = 0;
      branches: {
        branchOne: string;
        branchTwo: string;
      } = {
        branchOne: '',
        branchTwo: '',
      };
    }
    ```

### **Interfaces**
- Used to define object structures and support extension.
    ```typescript
    interface CarThree {
      name: string;
      color: string;
      price: number;
      hasAirBag: boolean;
      branches: {
        branchOne: string;
        branchTwo?: string;
      };
    }
    ```
    **Comparison of Interfaces and Types:**
    - Interfaces can be reopened and extended.
    - Types offer better union and intersection handling.

    **Extension Example:**
    ```typescript
    interface CarInfoExtend extends CarThree {
      modelExtend: number;
    }
    ```

---

## **[6] Function Parameters and Return Types**
### **Void Return Type**
- Indicates no return value.
    ```typescript
    function calc(num1: number, num2: number): void {
      console.log(num1 + num2);
    }
    ```
### **Number Return Type**
    ```typescript
    function calcTwo(num3: number, num4: number): number {
      return num3 + num4;
    }
    ```
### **Never Return Type**
- Used when a function never returns (e.g., throws an error).
    ```typescript
    function showError(msg: string): never {
      throw new Error(msg);
    }
    ```

---

## **[7] Special Types: `any` and `unknown`**
- **`any`**: Disables type checking (unsafe).
    ```typescript
    let str1: any = 'any';
    str1.push(); // ❌ No type safety.
    ```
- **`unknown`**: Requires explicit type checks (safe).
    ```typescript
    let str2: unknown = 'unknown';
    if (typeof str2 === 'string') {
      str2.toLowerCase();
    }
    ```

---

## **[8] Generics**
- Provides flexibility for functions to handle different types.
    ```typescript
    function generics<Type>(arr: Type[]): Type[] {
      let result: Type[] = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
      }
      return result;
    }

    console.log(generics<string>(['1', '2', '3']));
    console.log(generics<number>([1, 2, 3]));
    ```

---

This README covers all the sections of the code with detailed explanations, including potential errors and best practices for TypeScript development.

