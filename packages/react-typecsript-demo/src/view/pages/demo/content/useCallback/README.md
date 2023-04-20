## 官方文件提的 useCallback 機制

- 使用情境
- 使用範例
- 注意事項

---

useCallback是一個 React Hook，可讓您在重新渲染之間緩存函數定義。

### 使用情境

1.  當元件有子元件，會將函數當成props傳給子元件，子元件重新render會導致畫面卡頓
    
    1. 因為默認情況下，當元件重新渲染時，React 會遞歸地重新渲染其所有子元件
1.  當函數作為useEffect的dependency
    1. 因為重新render元件時，對於react來說都是重新定義一個新的函數，會導致每次都觸發useEffect 

---

### 使用範例

1. 防止因為傳給子元件的props更新導致子元件重新渲染

   ```javascript
    function ProductPage({ productId, referrer, theme }) {
      // Tell React to cache your function between re-renders...
      const handleSubmit = useCallback((orderDetails) => {
        post('/product/' + productId + '/buy', {
          referrer,
          orderDetails,
        });
      }, [productId, referrer]); // ...so as long as these dependencies don't change...

      return (
        <div className={theme}>
          {/* ...ShippingForm will receive the same props and can skip re-rendering */}
          <ShippingForm onSubmit={handleSubmit} />
        </div>
      );
    }
   ```

1. 當函數作為useEffect的dependency導致rerender後子元件重新渲染

   ```javascript
  function ChatRoom({ roomId }) {
    const [message, setMessage] = useState('');

    function createOptions() {
      return {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
      };
    }

    useEffect(() => {
      const options = createOptions();
      const connection = createConnection();
      connection.connect();
      // ...
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