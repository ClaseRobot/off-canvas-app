import { useState } from "react"

export const Pagination = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10) // Tamanio de la pagina

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      {
        currentPosts.map( post => (
          <div key={post.id}>{post.title}</div>
        ))
      }

      <button onClick={() => paginate(currentPage - 1)}>Anterior</button>
      <button onClick={() => paginate(currentPage + 1)}>Siguiente</button>
    </div>
  )
}