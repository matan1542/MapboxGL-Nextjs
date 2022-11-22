
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  //temporary solution until auth0 come into play 

  const router = useRouter()
  useEffect(() => {
    router.push('/stack-status')
  })
  
  return (
    <div>

    </div>
  )
}
