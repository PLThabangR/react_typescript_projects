

interface BlogModal{
    children: React.ReactNode;
    onClose: () => void;
    
}

const BlogModal = ({children,onClose}:BlogModal) => {
  return (
    <div className="fixed insert-0  bg-opacity-50  flex items-center justify-center">
      <div className=" bg-white p-4 rounded-lg shadow-lg relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default BlogModal