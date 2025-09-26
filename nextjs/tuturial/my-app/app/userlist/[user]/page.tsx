'use client'
type Props = {
  user: string
}
const page = ({params}: {params: Props}) => {
  return (
    <div>{params.user}</div>
  )
}

export default page