

interface BlogModal{
    children: React.ReactNode;
    onClose: () => void;
    
}

const BlogModal = ({children,onClose}:BlogModal) => {
  return (
    <div className="fixed insert-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        {children}

        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
    X
        </button>


    </div>
  )
}

export default BlogModal