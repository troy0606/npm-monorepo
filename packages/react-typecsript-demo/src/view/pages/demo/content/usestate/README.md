## 觀察到的 useState 觸發機制

- 元件自己 setState
- 父元件 setState
- 父元件 state 用 props 傳給子元件 setState
- 一次寫多個 setState

---

### 元件自己 setState

1. 如果前後 state 不一樣觸發重新 render

   > state 不一樣的定義

   1. 如果是 Reference type 的資料類型，只要參照一樣就算裡面的值更新還是一樣的 state
      ```
        * 如果是Reference type 的資料類型，修改同一個參照後 setState 不會觸發 render，但下次如果有同個元件的 state 更新觸發 rerender，剛剛修改同一個參照的資料也會更新
      ```
   1. 如果是 Primitive type 的資料類型，只要值不一樣就算

1. 重新 render 只會在自己這個元件，不會觸發其他元件 render

---

### 父元件 setState

1.  setState 之後
    > 父元件更新
    1. 父元件更新會觸發所有子元件 rerender
    1. 父元件 setState 如果沒有觸發重新 render，子元件也不會重新 render

---

### 父元件 state 用 props 傳給子元件 setState

1. 子元件 setState 之後
   > 父元件更新
   1. 同父元件 setState
   1. 需要注意如果傳的 props 是 Reference type
      ```
        * 子元件如果只有更新值，沒有更新 Reference，畫面不會更新，要等到下次這個子元件重新render之後，子元件更新後的 props 才會顯示到畫面上，而且父元件的 state還是會是舊的，畫面上也是舊的，因為並沒有觸發父元件重新render
      ```

---

### 一次寫多個 setState

    const [conterA, setCounter] = useState(0);
    const pendingTripleAdd = (): void => {
      setCounter(conterA + 1);
      setCounter(conterA + 1);
      setCounter(conterA + 1);
    };

  1. 上面的 setState 只會觸發一次，所以結果會是 conterA === 1

  1. 下面的 setState 會觸發三次，所以結果會是 conterA === 3

    const [conterA, setCounter] = useState(0);
      const pendingTripleAdd = (): void => {
      setCounter((conterA) => conterA + 1);
      setCounter((conterA) => conterA + 1);
      setCounter((conterA) => conterA + 1);
    };

  1. Setting state requests a new render.
  1.React stores state outside of your component, as if on a shelf.
  1. When you call useState, React gives you a snapshot of the state for that render.
  1. Variables and event handlers don’t “survive” re-renders. Every render has its own event handlers.
  1. Every render (and functions inside it) will always “see” the snapshot of the state that React gave to that render.
  1. You can mentally substitute state in event handlers, similarly to how you think about the rendered JSX.
  1. Event handlers created in the past have the state values from the render in which they were created.