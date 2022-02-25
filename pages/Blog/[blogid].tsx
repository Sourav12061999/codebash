import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
const Blogpage:NextPage =() => {
    const router = useRouter()
    const { blogid } = router.query
  return (
    <div>Blogpage</div>
  )
}

export default Blogpage