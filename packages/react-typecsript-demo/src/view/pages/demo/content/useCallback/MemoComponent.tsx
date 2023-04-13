import React, { memo } from 'react'

export default memo(function MemoComponent() {
  console.log('MemoComponent rendered')
  return (
    <div>MemoComponent</div>
  )
});
