import BlogList from './blogList';
import useFetch from './usefetch';

const Home = () => {
    const {data:blogs, isPending, error} = useFetch("http://localhost:8001/blogs");

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {blogs && <BlogList blogs={blogs}/>}
            </div>
     );
}
 
export default Home;