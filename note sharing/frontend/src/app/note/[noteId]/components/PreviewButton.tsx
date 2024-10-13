
'use client';

const PreviewButton = ({fileLink}: {fileLink: string}) => {
    const handlePreview = () => {
        window.open(fileLink, "_blank")
    }
  return (
    <div className="w-1/2 px-2">
        <button onClick={handlePreview} className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Preview</button>
    </div>
  )
}

export default PreviewButton