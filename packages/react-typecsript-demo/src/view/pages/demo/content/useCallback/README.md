## 官方文件提的 useRef 機制

- 在元件增加 ref
- 使用情境
- 使用範例
- 注意事項

---

當你想讓一個組件“記住”一些信息，但你不想讓這些信息觸發新的渲染時，你可以使用 ref。

### 在元件增加 ref

1. 使用 ref 的方法

   ```javascript
   // 你可以透過從 React 匯入 useRef Hook，為你的元件添加 ref
   import { useRef } from "react";
   // 在你的組件內，調用useRef Hook並將你想要引用的初始值作為唯一參數傳遞
   const ref = useRef(0);

   // useRef returns an object like this:
   ref = {
     current: 0, // The value you passed to useRef
   };
   ```

1. 你可以在這裡可以 mutate 你的 ref，要透過 ref.current 來做讀寫資料，React 不會去追蹤這邊的資料(資料改變不會觸發 render)

---

### 使用情境

1.  如果想讓元件保存資料，但是資料又不會顯示在畫面上
1.  資料是每個元件獨立的(把變數定義在元件外會導致所有元件共用資料 = side effect)
1.  timerID
1.  儲存或操作DOM

---

### 使用範例

1. 想記錄這個元件的某個功能被點幾次

   ```javascript
   import { useRef } from "react";

   export default function Counter() {
     let ref = useRef(0);

     function handleClick() {
       ref.current = ref.current + 1;
       alert("You clicked " + ref.current + " times!");
     }

     return <button onClick={handleClick}>Click me!</button>;
   }
   ```

1. 紀錄 timerID

   ```javascript
   import { useState, useRef } from "react";

   export default function Stopwatch() {
     const [startTime, setStartTime] = useState(null);
     const [now, setNow] = useState(null);
     const intervalRef = useRef(null);

     function handleStart() {
       setStartTime(Date.now());
       setNow(Date.now());

       clearInterval(intervalRef.current);
       // 每次創建後存進Ref，可以當作一個共用變數
       intervalRef.current = setInterval(() => {
         setNow(Date.now());
       }, 10);
     }

     function handleStop() {
       clearInterval(intervalRef.current);
     }

     let secondsPassed = 0;
     if (startTime != null && now != null) {
       secondsPassed = (now - startTime) / 1000;
     }

     return (
       <>
         <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
         <button onClick={handleStart}>Start</button>
         <button onClick={handleStop}>Stop</button>
       </>
     );
   }
   ```

1. 操作DOM(使用瀏覽器API)
   ```javascript
      import { useRef } from 'react';

      export default function Form() {
        const inputRef = useRef(null);

        function handleClick() {
          inputRef.current.focus();
        }

        return (
          <>
            <input 
              ref={inputRef} 
              // 使用函示寫法可以讓ref指向node時，做一些額外的處理，需要指向node的時間點
              ref={(node)=> inputRef.current = node}
            />
            <button onClick={handleClick}>
              Focus the input
            </button>
          </>
        );
      }
   ```


### 注意事項
1. 請不要在render階段使用
1. 使用ref保存DOM，會在commit階段，更新DOM之前先將ref設為Null，更新DOM之後，會再將ref指向DOM


### fowardRef(使用另一個元件的ref)
1. 因為react本身機制禁止元件操作其他元件的DOM元素，所以如果必須透過元件操作其他元素的DOM，必須透過 fowardRef 將被操作元素暴露出來。

    1. 錯誤範例 直接透過props.ref 獲得其他元件DOM :  
   ```javascript
    import { useRef } from 'react';

    function MyInput(props) {
      return <input {...props} />;
    }

    export default function MyForm() {
      const inputRef = useRef(null);

      function handleClick() {
        inputRef.current.focus();
      }

      return (
        <>
          <MyInput ref={inputRef} />
          <button onClick={handleClick}>
            Focus the input
          </button>
        </>
      );
    }

    /** Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
    */
   ```

   1. 正確用法 透過 fowardRef 取得其他元件DOM:

   ```javascript
    import { forwardRef, useRef } from 'react';

    const MyInput = forwardRef((props, ref) => {
      return <input {...props} ref={ref} />;
    });

    export default function Form() {
      const inputRef = useRef(null);

      function handleClick() {
        inputRef.current.focus();
      }

      return (
        <>
          <MyInput ref={inputRef} />
          <button onClick={handleClick}>
            Focus the input
          </button>
        </>
      );
    }
   ```

### useImperativeHandle 限制暴露 fowardRef API

1. 透過 useImperativeHandle 可以限制哪些DOM API暴露出來，防止使用端隨意調整到元件。
  ```javascript
    import {
      forwardRef, 
      useRef, 
      useImperativeHandle
    } from 'react';

    const MyInput = forwardRef((props, ref) => {
      const realInputRef = useRef(null);
      useImperativeHandle(ref, () => ({
        // Only expose focus and nothing else
        focus() {
          realInputRef.current.focus();
        },

        cssProps: realInputRef.current.style
      }));
      return <input {...props} ref={realInputRef} />;
    });

    export default function Form() {
      const inputRef = useRef(null);

      function handleClick() {
        console.log(inputRef.current);
        /**
         * {cssProps: CSSStyleDeclaration, focus: ƒ}
        */
        inputRef.current.focus();
      }

      return (
        <>
          <MyInput ref={inputRef} />
          <button onClick={handleClick}>
            Focus the input
          </button>
        </>
      );
    }
   ```
