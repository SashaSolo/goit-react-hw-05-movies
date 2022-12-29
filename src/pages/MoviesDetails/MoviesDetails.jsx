import { useParams } from 'react-router-dom';
import { getMovieById } from '../../api/fetchAPI';

export const MoviesDetails = () => {
  const { id } = useParams();
  const movie = getMovieById(id);
  return (
    <main>
      <img src="" alt="" />
      <div>
        <h2>
          Movie - {movie.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quas culpa illo, quos aut quia voluptatem, rerum, beatae eligendi
          assumenda ratione nemo exercitationem in error vitae quo quis eum
          magni.
        </p>
      </div>
    </main>
  );
};
