import PropTypes from "prop-types"
import { useState } from "react"
const MovieForm = ({addMovie}) => {
  const [movieData, setMovieData] = useState({
      title: "",
      ott: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(movieData);

    if(!movieData?.title.trim() || !movieData?.ott.trim()) return;
    addMovie(movieData)
    setMovieData({...movieData, title: "", ott: ""})
  }


  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setMovieData({...movieData, [key]: value})
  }
  return (
   
    <form action="" onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 items-center mb-8 w-full">
      <input
      className="border border-gray-300 rounded-md"
       type="text"
       placeholder="Enter movie name..."
       name = "title"
       value={movieData?.title}
      onChange={handleChange}
        />

        <select name="ott" value={movieData?.ott} onChange={handleChange} id=""  className = "flex p-2 border border-gray-700 bg-gray-800 rounded text-white">
          <option value="">Select an OTT</option>
          <option value="Netflix">Netflix</option>
          <option value="Amazon Prime">Amazon Prime</option>
          <option value="Hotstar">Hotstar</option>
          <option value="SonyLIVE">SonyLIVE</option>
          <option value="Hoichoi">Hoichoi</option>
          <option value="Others">Others</option>
        </select>

        <button 
        type="submit"
        className="px-4 py-2  bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer"
        >
          Add
        </button>
    </form>
  )
}

MovieForm.PropTypes = {
  addMovie: PropTypes.func.isRequired,
}

export default MovieForm