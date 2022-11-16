import React from 'react'

export default function Acompo() {

  const ages = [12, 34, 54, 65, 45, 34, 46, 8, 21.23];

  const message = age => console.log("MaxAge is", age)

  const maxAge = (arr, fn) => {

    let maxAge = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxAge) {
        maxAge = arr[i]
      }
    }

    fn(maxAge)

  }

  maxAge(ages, message)
  return (
    <div>Acompo</div>
  )
}
