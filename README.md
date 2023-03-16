#### 環境

  node v16.19.0
  npm 8.19.3

#### 操作步驟

  手動加上workspace
  packages/App1 
  packages/App1 

  全域安裝typescript
  npm i typescript -D -W

  手動加上workspace App3
  npm init -w ./packages/App3 

  安裝lodash 到 packages/App1
  npm i lodash --workspace=app1 

  安裝lodash 到 packages/App2
  npm i lodash --workspace=app2

  安裝lodash@3 到 packages/App2
  npm i lodash@3 --workspace=app2

  全域安裝 qs
  npm i qs

  新增workspace Lib
  npm init -w ./packages/Lib

  /packages/Lib/package.json
  新增index.tsx

  手動新增aaa.js
  依照common js 模組語法export