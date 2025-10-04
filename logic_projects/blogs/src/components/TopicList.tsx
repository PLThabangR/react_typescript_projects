
const TopicList = () => {
    const topics = [
        {id:1,name:"Technology"},
        {id:2,name:"Desgin Patterns"},
        {id:3,name:"Angular"},
        {id:4,name:"Personal Growth"},
        {id:5,name:"Reading"}
    ]

  return (
    <div className='bg-white p-4 rounded-lg shadow mt-8'>
        <h3 className='text-lg font-semibold mb-4'>Topics for you</h3>
        <div className='flex flex-wrap gap-2'>
            {topics.map((topic)=>(
                <span key={topic.id} className='bg-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300'>{topic.name}</span>
            ))}

        </div>

    </div>
  )
}

export default TopicList