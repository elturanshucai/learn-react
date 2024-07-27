import React, { useMemo, useState } from 'react'

export default function UseMemo() {
  const [id, setId] = useState(1)
  const [age, setAge] = useState(0)
  const userId = useMemo(() => {
    console.log('memo is runned')
    return `User id: ${id}`
  }, [id])
  return (
    <>
      <h1>{userId}</h1>
      <button onClick={() => setAge(age + 1)}>Birthday</button>
      <br />
      <button onClick={() => setId(id + 1)}>Acc Id</button>
    </>
  )
}