import { useState, useEffect } from 'react';

function ReadStoriesPage() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [storyType, setStoryType] = useState('');
  const [newStory, setNewStory] = useState(null); // State to store the new story

  useEffect(() => {
    // Simulate fetching logic
    setLoading(false); // Set loading to false immediately for now
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Create a new story object
    const story = {
      title: title,
      author: author,
      genre: storyType,
      description: "User entered story details."
    };
    
    // Set the new story in state
    setNewStory(story);
  };

  return (
    <div className="bg-gradient-to-r from-[#EF060F] to-[#b60cf2] min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">Browse Stories</h1>

        <form onSubmit={handleSearch} className="mb-8">
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2"
            />
          </div>
          <br></br>
          <div>
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="p-2"
            />
          </div>
          <br></br>
          <div>
            <input
              type="text"
              placeholder="Story Type"
              value={storyType}
              onChange={(e) => setStoryType(e.target.value)}
              className="p-2"
            />
          </div>
          <br></br>

          <button type="submit" className="p-2 bg-white text-indigo-700 rounded">Search</button>
        </form>

        {loading && (
          <p className="text-gray-300 text-lg text-center mt-8">Loading stories...</p>
        )}
        {newStory && (
          <div className="mt-8 text-white">
            <h2 className="text-2xl">New Story Details:</h2>
            <p><strong>Title:</strong> {newStory.title}</p>
            <p><strong>Author:</strong> {newStory.author}</p>
            <p><strong>Genre:</strong> {newStory.genre}</p>
            <p><strong>Description:</strong> {newStory.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReadStoriesPage;
