# GraphQL-Apllo

리액트를 활용한 GraphQL 과 아폴로 서버 공부

# 스키마와 리졸버 설정

## 스키마

- Query : 데이터베이스에서 데이터를 읽는 요청
- Mutation : 데이터베이스를 수정하는 요청

- 스키마엔 Movie의 구조와 자료형도 정의해야 한다. 그래야 GraphQL 서버에서 데이터베이스 구조를 알고 처리할 수 있다.

- 위 파일은 다음을 의미한다. 서버에 Query 형태로 movies를 요청하면 Movie의 배열이 반드시 반환된다.

- 서버에 Mutation 형태로 파라미터와 함께 addMovie를 요청하면 Movie가 반드시 반환된다.

- ! : Not Nullable. 데이터가 꼭 있어야 한다.
- [] : 배열

## 리졸버

개인 적인 생각으로는 rest api 에서 라우터와 비슷한 역활을 하는 느낌이 있다.
요청을 처리하고 응답을 반환하는 부분이 매우 비슷하다.

- Query와 Mutation 객체는 각각 GraphQL의 query와 mutation 요청을 처리하는 엔드포인트 역할.
- Query는 데이터를 조회하는 역할을 하고, Mutation은 데이터를 변경(추가, 수정, 삭제 등)하는 데 사용.

# 아플로 클라이언트

- 아폴로 클라리언트 설정 서버와 통신 하기 위해 인스턴스 생성
- 클라이언트를 인자로 받는 HOC(higher-order component) 즉 main ts인 ApolloProvider로 App을 감싸줍니다.

## UseQuery

API에 쿼리를 보낼 때는 필드별로 데이터 요청합니다. 필드들은 서버에서 받은 JSON 데이터 응답의 동일한 필드에 매핑시킵니다.
GraphQL 쿼리는 문자열 형태로 서버로 전송되어, 서버에서 읽은후 클라이언트에 다시 JSON 형태로 반환됩니다.

```
export const GET_MOVIES_QUERY = gql`
  query {
    movies {
      id
      name
      rating
      thumbnail
      description
      genre
      video
    }
  }
`;
```

```
const { loading, error, data } = useQuery(GET_MOVIES_QUERY);
const [moviesData, setMoviesData] = useRecoilState(moviesDataState);


useEffect(() => {
    if (data) {
      setMoviesData(data);
    }
}, [data, setMoviesData]);


 if (loading)
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );

if (error)
    return <div className={styles.errorMessage}>Error: {error.message}</div>;

 {moviesData?.movies.map((movie: movieState) => (
    <div key={movie.id} className={styles.movieCard}>
        <div className={styles.imageWrapper}>
            <img
                src={movie.thumbnail}
                alt={movie.name}
                className={styles.image}
            />
            <div className={styles.overlay}>
                <div className={styles.likeButton}>
                  <button className={styles.iconButton}>
                    <Heart className={styles.icon} />
                  </button>
                </div>
                <div
                  className={styles.playButtonWrapper}
                  onClick={() => handleShowVideo(movie.video)}
                >
                  <button className={styles.playButton}>
                    <Play className={styles.playIcon} />
                  </button>
                </div>

                <div className={styles.movieInfo}>
                  <h3 className={styles.title}>{movie.name}</h3>
                  <p className={styles.description}>{movie.description}</p>

                  <div className={styles.footer}>
                    <div className={styles.rating}>
                      <Star className={styles.starIcon} />
                      <span>{movie.rating}</span>
                    </div>
                    <div className={styles.genreWrapper}>
                      {movie.genre.map((genre, index) => (
                        <span key={index} className={styles.genreTag}>
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
))}
```

## UseMutation

GraphQL Mutation은 REST API 처럼, PUT, POST, DELETE 요청과 유사한 객체를 만들어서 수정합니다.
뮤테이션은 요청은 쿼리 요청과 동일한 엔드 포인트로 전송됩니다.

```
export const ADD_MOVIE_MUTATION = gql`
  mutation AddMovie(
    $name: String!
    $rating: Float!
    $thumbnail: String!
    $description: String!
    $genre: [String!]
    $video: String!
  ) {
    addMovie(
      name: $name
      rating: $rating
      thumbnail: $thumbnail
      description: $description
      genre: $genre
      video: $video
    ) {
      id
      name
      rating
      thumbnail
      description
      genre
      video
    }
  }
`;

```

```
const [body, setBody] = useState<movieState>({
    name: "",
    rating: 0,
    thumbnail: "",
    description: "",
    genre: [],
    video: "",
});

// useMutation 훅을 사용하여 addMovie 뮤테이션 호출 함수 생성
const [addMovie] = useMutation(ADD_MOVIE_MUTATION);


const handleSubmit = async () => {
    try {
      const { data } = await addMovie({
        variables: {
          name: body.name,
          rating: body.rating,
          thumbnail: body.thumbnail,
          description: body.description,
          genre: body.genre,
          video: body.video,
        },
      });
      console.log(data);
      closeModal();
    } catch (error) {
      console.error(error);
    }
};


```
